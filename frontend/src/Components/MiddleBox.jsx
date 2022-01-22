import React from "react";
import styles from './Styles/middleBox.module.css'
import dataSet3 from "../Utils/summary.json"

const MiddleBox = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        {dataSet3?.map((e) => (
          <li className={styles.boxContainer} key={e.id}>
            <div className={styles.headRow}>
              <div className={styles.headRowHeading}>{e.first_heading}</div>
              <div className={styles.headRowValue}>{e.first_value}</div>
            </div>
            <div className={styles.headRow}>
              <div className={styles.headRowHeading}>{e.second_heading}</div>
              <div className={styles.headRowValue}>{e.second_value}</div>
            </div>
          </li>
        ))}
      </div>
    </>
  );
};

export default MiddleBox;
