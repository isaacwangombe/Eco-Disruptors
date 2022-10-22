import React, { useState, useEffect } from "react";
import useQuery from "../hooks/useQuery";
import Carousel from "../Carousel";
import Grid from "../Grid";
import { useParams } from "react-router-dom";

import { API, Storage } from "aws-amplify";
import { listStoreItems } from "../../graphql/queries";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const { val, cat, loc } = useParams();

  const [itemData, setItemData] = useState([]);
  const [itemFilter, setItemFilter] = useState(val);
  const [categoryFilter, setCategoryFilter] = useState(cat);
  const [locationFilter, setLocationFilter] = useState(loc);
  const [open, setOpen] = useState("hidden");

  const openBar = () => {
    if (open === "hidden") setOpen("grid absolute h-full w-1/2 lg:w-auto");
    else setOpen("hidden");
  };

  let filterItem = {
    valueAdded: {
      eq: itemFilter, // filter priority = 1
    },
  };

  let filterCategory = {
    valueAdded: {
      eq: itemFilter, // filter priority = 1
    },
    category: {
      eq: categoryFilter,
    },
  };

  useEffect(() => {
    const fetchItems = async () => {
      const res = await API.graphql({
        query: listStoreItems,
        variables: { filter: filterCategory },
      });
      return res.data.listStoreItems.items;
    };
    fetchItems().then((items) => setItemData(items));
  }, [itemFilter, categoryFilter]);

  const switchRecycle = () => {
    if (itemFilter === "true") setItemFilter("false");
  };
  const switchWaste = () => {
    if (itemFilter === "false") setItemFilter("true");
  };

  const switchCat = (e, param) => {
    e.preventDefault();

    setCategoryFilter(param);
  };
  const switchloc = (e, param) => {
    e.preventDefault();

    setLocationFilter(param);
  };

  return (
    <div className="grid lg:grid-cols-6 ">
      <div className="z-10 bg-gray-100 col-span-1">
        <button onClick={openBar} className="lg:hidden">
          X
        </button>
        <div className={open + " lg:grid bg-gray-100  "}>
          <Nav
            variant="pills"
            defaultActiveKey=""
            className="flex-column grid gap-10"
          >
            <h2>Categories</h2>
            <Nav.Link
              eventKey="link-3"
              onClick={(e) => switchCat(e, "artwork")}
            >
              Artwork
            </Nav.Link>

            <Nav.Link
              eventKey="link-1"
              onClick={(e) => switchCat(e, "furniture")}
            >
              Furniture
            </Nav.Link>
            <Nav.Link
              eventKey="link-2"
              onClick={(e) => switchCat(e, "accessories")}
            >
              Accessories
            </Nav.Link>
          </Nav>
        </div>
      </div>{" "}
      <div className="col-span-3 relative lg:col-span-5 w-full">
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link onClick={switchRecycle} eventKey="link-1">
              Recycled
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={switchWaste} eventKey="link-2">
              Waste
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Grid itemData={itemData} />
      </div>
    </div>
  );
};

export default AllProducts;
