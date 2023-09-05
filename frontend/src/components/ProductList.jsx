import React, { useState } from "react";
import smartphones from "./dummyData";
const brands = ["Samsung", "OnePlus", "Apple", "Moto"];

const ProductList = () => {
  const [productData, setProductData] = useState(smartphones);

  const displayProducts = () => {
    return productData.map((phone) => {
      return (
        <div className="col-md-3 mb-4">
          <div className="card">
            <img
              style={{ height: "200px", objectFit: "cover" }}
              className="card-img-top"
              src={phone.image}
              alt=""
            />
            <div className="card-body">
              <h5>{phone.brand}</h5>
              <h3>{phone.model}</h3>
              <h2>₹{phone.price}</h2>
            </div>
          </div>
        </div>
      );
    });
  };

  const searchProduct = (e) => {
    const search = e.target.value;
    setProductData(
      smartphones.filter((phone) => {
        return phone.model.toLowerCase().includes(search.toLowerCase());
      })
    );
  };

  const filterBrands = (e) => {
    const search = e.target.value;
    setProductData(
      smartphones.filter((phone) => {
        return phone.brand === search;
      })
    );
  };

  return (
    <div className="list-back">
      <header className="bg-body-secondary">
        <div className="container py-5">
          <h1 className="text-center">Product List Page</h1>
          <input
            onChange={searchProduct}
            type="text"
            className="form-control form-control-lg"
            placeholder="Search Product Name ..."
          />

          <select onChange={filterBrands}>
            {brands.map((brand) => (
              <option value={brand}>{brand}</option>
            ))}
          </select>

          <input
            type="range"
            min={1000}
            max={50000}
            step={1000}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="card mt-4 vh-100">
              <div className="card-body">
                <h3>Categories</h3>
                <hr />
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row mt-4">{displayProducts()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;