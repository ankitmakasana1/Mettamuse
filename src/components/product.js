import React, { useState, useEffect } from "react";
import ProdSide from "./prodside";

export default function Product() {
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setData(data);
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    getProducts();
  }, []);

  const handleClick = () => {
    setIsActive(!isActive); // Toggle the state
  };

  const filterProduct = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className={`product-wrp ${isActive ? "active" : ""}`}>
      <div className="container">
        <div className="p-topbar">
          <p className="items-text">{filteredProducts.length} Items</p>
          <button className="h-filter" onClick={handleClick}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99986 2.72125L5.65319 7.06792C5.13986 7.58125 5.13986 8.42125 5.65319 8.93458L9.99986 13.2812"
                stroke="#292D32"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="hidefil">HIDE FILTER </span>
            <span className="showfil">SHOW FILTER </span>
          </button>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => filterProduct(e.target.value)}
          >
            <option value="all">All</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>

        <div className="p-side-item-wrp">
          <ProdSide />

          {/* Product items code start */}
          <div className="prod-item-wrp">
            {filteredProducts.map((product) => (
              <div className="prod-card" key={product.id}>
                <img
                  alt={product.title}
                  src={product.image}
                  className="image-class"
                />
                <div className="svgwrp">
                  <svg
                    className="firsts"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.62 20.8096C12.28 20.9296 11.72 20.9296 11.38 20.8096C8.48 19.8196 2 15.6896 2 8.68961C2 5.59961 4.49 3.09961 7.56 3.09961C9.38 3.09961 10.99 3.97961 12 5.33961C13.01 3.97961 14.63 3.09961 16.44 3.09961C19.51 3.09961 22 5.59961 22 8.68961C22 15.6896 15.52 19.8196 12.62 20.8096Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="details">
                  <h6>{product.title}</h6>
                  <p className="mb-2">{product.description}</p>
                  <h6>Price: ${product.price}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
