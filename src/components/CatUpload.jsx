import React from "react";
import { useEffect, useState } from "react";
import { createCategory } from "../graphql/mutations";
import { API } from "aws-amplify";
import { listCategories } from "../graphql/queries";
import { withAuthenticator } from "@aws-amplify/ui-react";

const CatUpload = () => {
  const [catData, setCatData] = useState([]);
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const res = await API.graphql({
        query: listCategories,
      });
      return res.data.listCategories;
    };
    fetchItems().then((items) => setCatData(items));
  }, []);

  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "mariga");
    data.append("cloud_name", "dtj7bnapz");
    fetch("https://api.cloudinary.com/v1_1/dtj7bnapz/image/upload/", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;

    try {
      const { data } = await API.graphql({
        query: createCategory,
        variables: {
          input: {
            name: target.name.value,
            Image: url,
          },
        },
      });
      setCatData((currList) => {
        return [...currList, data.createCategory];
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="enter a name" name="name" />
        <input
          type="file"
          accept="image/*"
          capture
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        <button
          className="px-4 py-2 border rounded-md border-gray-800"
          onClick={uploadImage}
        >
          Upload Img
        </button>
        <button type="submit">create category</button>
        {/* {user}

        <button onClick={signOut}>logout</button> */}
      </form>

      {/* {catData.map((item) => (
        <div key={item.id}>
          <p>name={item.id}</p>
        </div>
      ))} */}
    </div>
  );
};

export default withAuthenticator(CatUpload);
