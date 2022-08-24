import "./App.scss";
import Card from "./components/Card/Card";
import Data from "./data/products";

function App() {
  const stars = Data.products.map((product) => {
    const { name, price, ratings, comment, localImage } = product;
    return (
      <Card image={localImage} count={ratings} price={price} comment={comment}>
        {name}
      </Card>
    );
  });

  return (
    <div className="App">
      <div className="products">{stars}</div>
    </div>
  );
}

export default App;
