import React from "react";
import useQuery from "../hooks/useQuery";
import Carousel from "../Carousel";
import Grid from "../Grid";
import { listStoreItems } from "../../graphql/queries";
import { useEffect, useState } from "react";

const Featured = () => {
  const { itemData: recycledFilter } = useQuery(
    { valueAdded: { eq: "true" } },
    listStoreItems
  );
  const { itemData: WasteFilter } = useQuery(
    { valueAdded: { eq: "false" } },
    listStoreItems
  );

  return (
    <div>
      <h1>Featured Recycled Products</h1>

      <Grid itemData={recycledFilter.slice(0, 5)} />
      <h1>Featured Waste Products</h1>

      <Grid itemData={WasteFilter.slice(0, 5)} />
    </div>
  );
};

export default Featured;
