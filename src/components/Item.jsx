import React from "react";
import { useEffect, useState } from "react";
import { listStoreItems } from "../graphql/queries";
import { API, Storage } from "aws-amplify";
import useQuery from "./hooks/useQuery";
import Carousel from "./Carousel";
import Grid from "./Grid";

const Item = () => {
  const { itemData: nameFilter } = useQuery(
    { name: { eq: "name" } },
    listStoreItems
  );
  // let valueAdded;

  return <Grid itemData={nameFilter} />;
};

export default Item;
