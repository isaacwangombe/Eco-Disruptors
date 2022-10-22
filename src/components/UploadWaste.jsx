import React from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { API, Storage } from "aws-amplify";
import { useEffect, useState } from "react";
import { createStoreItem } from "../graphql/mutations";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const UploadItem = () => {
  // const
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [item, setItemData] = useState("");

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
        query: createStoreItem,
        variables: {
          input: {
            name: target.ItemName.value,
            description: target.ItemDescription.value,
            units: target.ItemUnits.value,
            price: 0,
            category: target.ItemCategory.value,
            location: target.ItemLocation.value,
            valueAdded: "false",
            image: url,
          },
        },
      });
      console.log(target.ItemCategory);
      setItemData((currItemList) => {
        return [...currItemList, data.createStoreItem];
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="bg-gray-100 text h-full">
      <form
        onSubmit={handleSubmit}
        novalidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Make an Upload</p>
            <p className="text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              fuga autem eum!
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <input
                type="text"
                placeholder="Enter Name"
                name="ItemName"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-teal-600 border-gray-300 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
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
            </div>
            <div className="col-span-full">
              <input
                id="bio"
                placeholder="Enter Details"
                name="ItemDescription"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-teal-600 border-gray-300 text-gray-900"
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <input
                type="number"
                placeholder="Enter Number of units available"
                name="ItemUnits"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-teal-600 border-gray-300 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <input
                type="text"
                placeholder="Where are you located"
                name="ItemLocation"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-teal-600 border-gray-300 text-gray-900"
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <select
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-teal-600 border-gray-300 text-gray-900"
                name="ItemCategory"
                id=""
              >
                <option value="none">Please select a categoty</option>
                <option value="laptop">Laptop</option>
                <option value="tv">TV</option>
                <option value="phone">Phone</option>
              </select>
            </div>
            <div className="col-span-full sm:col-span-3">
              <select
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-teal-600 border-gray-300 text-gray-900"
                id=""
              >
                <option>Collect or deliver to facility </option>
                <option value="laptop">Collected</option>
                <option value="tv">Deliver</option>
              </select>
            </div>

            <button className="px-4 py-2 border rounded-md border-gray-800">
              Upload
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default withAuthenticator(UploadItem);
