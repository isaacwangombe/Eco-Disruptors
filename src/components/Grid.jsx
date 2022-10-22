import React from "react";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { API, Storage } from "aws-amplify";
import { deleteStoreItem } from "../graphql/mutations";

const Grid = ({ itemData }) => {
  const [modalShow, setModalShow] = React.useState(false);

  const handleItemDelete = async (ID) => {
    const newList = itemData.filter((item) => item.id !== ID);

    await API.graphql({
      query: deleteStoreItem,
      variables: {
        input: {
          id: ID,
        },
      },
    });
  };

  return (
    <div class="grid p-10 gap-10 lg:p-20 gap-10 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
      {itemData.map((item) => (
        <div className="" key={item.id}>
          {/* <button onClick={(e) => handleItemDelete(item.id)}>Delete</button> */}
          <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div class="px-4 py-2">
              <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">
                {item.name}
              </h1>
              <h2 class="mt-1 text-md font-bold text-gray-600 dark:text-gray-400">
                ({item.category})
              </h2>
              <h2 class="mt-1 text-md font-bold text-gray-600 dark:text-gray-400">
                ({item.location})
              </h2>
              <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>

            <img
              class="object-cover w-full h-48 mt-2"
              src={item.image}
              alt=""
            />

            <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
              <h1 class="text-lg font-bold text-white">Kes {item.price}</h1>
              <Link to={"indProduct/" + item.id}>
                <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                  Purchase Item
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
