import React from "react";
import { Link } from "react-router-dom";

const Path = () => {
  return (
    <div className="">
      <div className="grid gap-10 p-10 lg:gap-40 lg:p-40 content-center grid-cols-1 md:grid-cols-2">
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWMlMjB3YXN0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h1 className="card-title">Waste Items</h1>
            <p>Upload or purchase waste items for recycling and earn coin</p>
            <div className="card-actions justify-end">
              <Link to={`products/false/artwork/southb`}>
                <button className="btn btn-primary">View Items</button>
              </Link>
              <Link to={`/uploadWaste`}>
                <button className="btn btn-primary">Upload Items</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl  image-full">
          <figure>
            <img
              src="https://res.cloudinary.com/dtj7bnapz/image/upload/v1666418068/lhxn9miwxbbnvkzyy2aw.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Recycled Items</h2>
            <p>Buy and sell amazing recycled products</p>
            <div className="card-actions justify-end">
              <Link to={`products/true/artwork/southb`}>
                <button className="btn btn-primary">View Items</button>
              </Link>
              <Link to={`/uploadItem`}>
                <button className="btn btn-primary">Upload Items</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Path;
