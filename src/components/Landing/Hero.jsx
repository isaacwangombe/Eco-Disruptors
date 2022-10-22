import Carousel from "react-bootstrap/Carousel";

function Hero() {
  return (
    <section>
      <div className="bg-blue-600">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50">
            Welcome to Eco-Disruptors
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">
            Where you can turn your trash into treasure
          </p>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/dtj7bnapz/image/upload/v1666418068/lhxn9miwxbbnvkzyy2aw.jpg"
        alt=""
        className=" bg-blend-darken w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500"
      />
    </section>
  );
}

export default Hero;
