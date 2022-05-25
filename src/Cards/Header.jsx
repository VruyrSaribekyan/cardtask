import React from "react";
import store from "../redux/store";
import styles from "./cards.module.css";
import { useSelector, useDispatch } from "react-redux";
export default function Header() {
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.header}>
        <div className={styles.btnContainer}>
          {/* //add item to store  */}

          <button
            onClick={() => {
              dispatch({
                type: "add",
                num:localStorage.setItem('item', Math.floor(Math.random() * 1000)),
                payload: {
                  id:localStorage.getItem('item')
                },
              });
            }}
            className={styles.btn}
          >
            Card
          </button>
          {/* sort item  */}
          <button
            onClick={() => {
              dispatch({
                type: "sort",
              });
            }}
            className={styles.btn}
          >
            Sort
          </button>
        </div>
      </div>
    </>
  );
}
