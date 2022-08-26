import Card from "../components/Card/Card";
import Data from "../data/products";
import { Link } from "react-router-dom";

export default function Introduction() {
  const stars = Data.products.map((product) => {
    const { name, price, ratings, comment, localImage } = product;
    return (
      <Card image={localImage} count={ratings} price={price} comment={comment}>
        {name}
      </Card>
    );
  });

  return (
    <>
      <div className="products">{stars}</div>
      <Link to="/">To Home</Link>
    </>
  );
}
