import React from "react";
import styles from './Styles/middleBox.module.css'
import dataSet3 from "../Utils/customers.json"

const MiddleBox = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        {dataSet3?.map((e) => (
          <li className={styles.boxContainer} key={e.id}>
              <div className={styles.headRowValue}>{e.first_value}</div>
              <div className={styles.headRowHeading}>{e.first_heading}</div>
          </li>
        ))}
      </div>
    </>
  );
};

export default MiddleBox;
