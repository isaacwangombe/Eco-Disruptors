import Card from "react-bootstrap/Card";

function Categories() {
  const cardItems = [
    {
      name: "farm",
      image:
        "https://images.unsplash.com/photo-1666053582202-25115d97c97b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    },
    {
      name: "electronic",
      image:
        "https://images.unsplash.com/photo-1665947676650-dd8b68e4519b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "paper",
      image:
        "https://images.unsplash.com/photo-1666053582202-25115d97c97b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    },
  ];
  return (
    <div className="">
      <h2>Categories</h2>
      <div className="grid p-10 gap-10 lg:p-20 gap-10 grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {cardItems.map((item) => (
          <Card className="bg-dark text-white shadow-2xl">
            <Card.Img src={item.image} alt="Card image" />
            <Card.ImgOverlay className="grid">
              <Card.Title>{item.name}</Card.Title>
            </Card.ImgOverlay>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Categories;
