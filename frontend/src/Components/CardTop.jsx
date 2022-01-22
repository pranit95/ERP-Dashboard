import React from "react"
import data from "../Utils/dataCardOne.json"
import styles from './Styles/cardTop.module.css'

const CartTop = () => {
    const dataSet = data
    return (
        <>
          <div className={styles.mainContainer}>
              {data?.map(e => (
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
    )
}


export default CartTop