import React, { useState, useEffect } from "react";
import styles from "./cards.module.css";
import { useDispatch, useSelector } from "react-redux";
export default function Main() {
  const dispatch = useDispatch();
  //get item of store
  const item = useSelector((store) => store.cardAdds);
  
  return (
    <>
      <div>
          {/* sidebar */}
        <div className={styles.sidebar}>
          <span style={{ fontSize: 35, fontWeight: "700", color: "black" }}>
            press the add card button to add the new Card. <br />
            Use the "sort cards" button to sort the cards by the increase. Press
            an X icon on the top right to delete them
          </span>
        </div>
        {/* container of cards */}
        <div className={styles.containerOfMain}>
          <div className={styles.cardContainer}>
            <div className={styles.main}>
              {item.map((e, index) => {
                    return (
                      <React.Fragment key={index}>
                        <div className={styles.cards}>
                          <div className={styles.singleCard}>
                            <p>{e}</p>
                            {/* hide button */}
                            <a
                              href="/"
                              onClick={(e) => {
                                e.preventDefault();
                                dispatch({
                                  type: "delete",
                                  payload: {
                                    id: Date.now(),
                                  },
                                });
                              }}
                              className={styles.hide}
                            >
                              X
                            </a>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })
                }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
