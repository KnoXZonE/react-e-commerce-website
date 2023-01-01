import { ArrowRight } from "phosphor-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { useProductContext } from "../../context/fetchApi";
import FormatPrice from "../../Helpers/FormatPrice";
import "./products.scss";

const Products = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div>...loading</div>;
  }

  return (
    <section className="new-arrivals">
      <div className="custom-container">
        <div className="section-titles">
          <h2 className="title">Men's New Arrivals</h2>
          <NavLink to="/all-products">
            <span>
              Shop All
              <ArrowRight />
            </span>
          </NavLink>
        </div>

        <div className="products-grid">
          {featureProducts.slice(0, 2).map((curElem) => {
            const { name, image, price, category, description } = curElem;
            return (
              <NavLink to={`/single-product/${name}`} className="product-card">
                <div className="card-img">
                  <img src={image} alt={name} />
                </div>

                <div className="card-category">{category}</div>

                <div className="card-details">
                  <h3 className="card-title">{name}</h3>
                  <p className="card-desc">{description}</p>
                  <p className="card-price">{<FormatPrice price={price} />}</p>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
