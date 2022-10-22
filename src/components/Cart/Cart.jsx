import React from "react";
import { createCartModel } from "../../graphql/mutations";
import { API } from "aws-amplify";
import { useEffect, useState } from "react";
const Cart = () => {
  const [petData, setPetData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;

    try {
      const { data } = await API.graphql({
        query: createCartModel,
        variables: {
          input: {
            id: target.storeId.value,
            units: target.units.value,
            amount: target.amount.value,
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="enter a id" name="storeId" />
        <input placeholder="enter a unit" name="units" />
        <input placeholder="enter a amount" name="amount" />

        <button type="submit">create pet</button>
      </form>
    </div>
  );
};

export default Cart;
