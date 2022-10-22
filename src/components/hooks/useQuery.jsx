import React from "react";
import { useEffect, useState } from "react";
import { API, Storage } from "aws-amplify";

const useQuery = (ans, query) => {
  const [itemData, setItemData] = useState([]);
  const [itemFilter, setItemFilter] = useState();

  useEffect(() => {
    const filter = "name";
    const fetchItems = async () => {
      const res = await API.graphql({
        query: query,
        variables: { filter: ans },
      });
      return res.data.listStoreItems.items;
    };
    fetchItems().then((items) => setItemData(items));
  }, []);

  return { itemData, setItemData };
};

export default useQuery;
