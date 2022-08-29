import Card from "../../components/Card/Card";
import Data from "../../data/products";
import { Link } from "react-router-dom";
import "./Introduction.scss";
import ThemeSelector from "../../components/ThemeSelector/ThemeSelector";

export default function Introduction() {
  const stars = Data.products.map((product) => {
    const { name, price, ratings, comment, localImage } = product;
    return (
      <Card
        image={localImage}
        count={ratings}
        price={price}
        comment={comment}
        key={localImage}
      >
        {name}
      </Card>
    );
  });

  return (
    <>
      <div className="proto-nav">
        <h1>Introducción</h1>
        <Link to="/">To Home</Link>
        <ThemeSelector />
      </div>
      <div className="spacer"></div>
      <div className="products">{stars}</div>
    </>
  );
}
