import React, { useEffect, useState } from "react";
import axios from "axios";
import STYLES from "./Dashboard.module.scss";
const Dashboard = () => {
  const [tabSelected, setTabSelected] = useState(0);
  const [allProducts, setAllProduct] = useState([]);
  const [allCars, setAllCars] = useState([]);
  axios.defaults.baseURL = "http://localhost:3002";

  useEffect(() => {
    async function fetchData() {
      const promise1 = axios.get("/products");
      const promise2 = axios.get("/cars");
      await Promise.allSettled([promise1, promise2]).then((results) => {
        setAllProduct(results[0].value.data);
        setAllCars(results[1].value.data);
        console.log("results", results);
      });
    }
    fetchData();
  }, [0]);

  const tabClickHandler = (index) => {
    setTabSelected(index);
  };
  const getAllProducts = () => {
    return (
      <ul className={STYLES.itemProduct}>
        <li className={STYLES.rowProduct}>
          <span className={STYLES.cellProduct}>{"ID"}</span>
          <span className={STYLES.cellProduct}>Title</span>
          <span className={STYLES.cellProduct}>Description</span>
          <span className={STYLES.cellProduct}>Price</span>
        </li>
        {allProducts.map((item) => (
          <li className={STYLES.rowProduct}>
            <span className={STYLES.cellProduct}>{item.id}</span>
            <span className={STYLES.cellProduct}>{item.title}</span>
            <span className={STYLES.cellProduct}>{item.description}</span>
            <span className={STYLES.cellProduct}>{item.price}</span>
          </li>
        ))}
      </ul>
    );
  };
  const getAllCars = () => {
    return (
      <ul className={STYLES.itemProduct}>
        <li className={STYLES.rowProduct}>
          <span className={STYLES.cellProduct}>{"ID"}</span>
          <span className={STYLES.cellProduct}>Brand</span>
          <span className={STYLES.cellProduct}>Color</span>
          <span className={STYLES.cellProduct}>Model</span>
          <span className={STYLES.cellProduct}>VIN</span>
        </li>
        {allCars.map((item) => (
          <li className={STYLES.rowProduct}>
            <span className={STYLES.cellProduct}>{item.id}</span>
            <span className={STYLES.cellProduct}>{item.brand}</span>
            <span className={STYLES.cellProduct}>{item.color}</span>
            <span className={STYLES.cellProduct}>{item.model}</span>
            <span className={STYLES.cellProduct}>{item.vin}</span>
          </li>
        ))}
      </ul>
    );
  };
  const addItem = async () => {
    const data = {
      id: 4,
      brand: "",
      color: "",
      model: "",
      vin: "",
    };
    let result = await axios.post("/products", data);
  };
  const editItem = () => {};
  const updateItem = () => {};
  const deleteItem = () => {};

  return (
    <div>
      <div className={STYLES.tabHeader}>
        <div className={STYLES.tabHeaderItem}>
          <span
            className={STYLES.tabProduct}
            onClick={() => tabClickHandler(0)}
          >
            Products
          </span>
          <span
            className={STYLES.tabProduct}
            onClick={() => tabClickHandler(1)}
          >
            Cars
          </span>
        </div>
        <div className={STYLES.buttonCont}>
          <button onClick={addItem}>Add</button>
          <button onClick={editItem}>Edit</button>
          <button onClick={updateItem}>Update</button>
          <button onClick={deleteItem}>Delete</button>
        </div>
      </div>
      <div>{tabSelected === 0 ? getAllProducts() : getAllCars()}</div>
    </div>
  );
};

export default Dashboard;
