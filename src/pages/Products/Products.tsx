import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [Product, setProduct] = useState({
    isLoading: false,
    isError: false,
    products: [],
  });

  const FetchProducts = async () => {
    setProduct((load) => ({ ...load, isLoading: true }));

    await fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((res) => {
        setProduct((prevProduct: any) => ({
          ...prevProduct,
          products: res,
        }));
        setProduct((load) => ({ ...load, isLoading: false }));
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    FetchProducts();
  }, []);

  // console.log(Product);
  return (
    <div className="grid grid-cols-3 gap-8">
      {Product.isLoading ? (
        <h1>Loading..........</h1>
      ) : (
        Product.products.map((product: any) => (
          <Link
            to={`/e-commerce/products/${product.id}`}
            key={product.id}
            className="p-4 shadow-2xl flex flex-col items-center w-60 h-full m-auto">
            <div>
              <img
                className="h-36 w-36 object-contain"
                src={product.image}
                alt={product.title}
              />
            </div>
            <span className="bg-blue-400 rounded-lg px-1 text-xs font-extralight">
              {product.category}
            </span>
            <h4 className="font-bold"> {product.title}</h4>
            <p>Price: {product.price}</p>
          </Link>
        ))
      )}
    </div>
  );
};

export default Products;
