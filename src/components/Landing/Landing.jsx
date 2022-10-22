import React from "react";
import CloudinaryUploadWidget from "../CloudinaryUploadWdget";
import Categories from "./Categories";
import Featured from "./Featured";
import Hero from "./Hero";
import Path from "./Path";
import { withAuthenticator } from "@aws-amplify/ui-react";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Path />
      {/* <Categories /> */}
      <Featured />
    </div>
  );
};

export default withAuthenticator(Landing);
