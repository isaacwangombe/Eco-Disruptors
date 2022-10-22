import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { withAuthenticator } from "@aws-amplify/ui-react";
import SingleProduct from "./Products/SingleProduct";

import { API } from "aws-amplify";

import { listCartModels } from "../graphql/queries";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavbarComponent({}) {
  const [cart, setCartData] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await API.graphql({
        query: listCartModels,
      });
      return res.data.listCartModels.items;
    };

    console.log(count);
    fetchItems().then((items) => setCartData(items));
  }, []);
  let count = 0;
  for (let i = 0; i < cart.length; i++) {
    count += cart[i].units;
  }

  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case text-xl">
            Eco-Disruptor
          </a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{count}</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow  w-96"
            >
              {cart &&
                cart.map((item) => (
                  <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-50 text-gray-800">
                    <h2 className="text-xl font-semibold">Your cart</h2>
                    <ul className="flex flex-col divide-y divide-gray-300">
                      <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        <div className="flex w-full space-x-2 sm:space-x-4">
                          <img
                            className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
                            src={item.image}
                            alt="Polaroid camera"
                          />
                          <div className="flex flex-col justify-between w-full pb-4">
                            <div className="flex justify-between w-full pb-2 space-x-2">
                              <div className="space-y-1">
                                <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                                  {item.name}
                                </h3>
                                <p className="text-sm text-gray-600">Classic</p>
                              </div>
                              <div className="text-right">
                                <p className="text-lg font-semibold">
                                  {item.price} Kes
                                </p>
                                <p className="text-md text-gray-400">
                                  units: {item.units}
                                </p>
                              </div>
                            </div>
                            <div className="flex text-sm divide-x">
                              <button
                                type="button"
                                className="flex items-center px-2 py-1 pl-0 space-x-1"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                  className="w-4 h-4 fill-current"
                                >
                                  <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                  <rect
                                    width="32"
                                    height="200"
                                    x="168"
                                    y="216"
                                  ></rect>
                                  <rect
                                    width="32"
                                    height="200"
                                    x="240"
                                    y="216"
                                  ></rect>
                                  <rect
                                    width="32"
                                    height="200"
                                    x="312"
                                    y="216"
                                  ></rect>
                                  <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                </svg>
                                <span>Remove</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <Link to={"checkout/"}>
                      <button className="btn btn-primary">To checkout</button>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to={"/profile"}>
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
              </Link>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
