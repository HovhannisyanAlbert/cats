import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RootState, usedispatch } from "../features/store/store";
import { addCate, getItemCategory } from "../features/thunk/thunk";
import { useSelector } from "react-redux";
import styles from "./cateItem.module.css";
import { itemType } from "./type";

const CateItem = () => {
  const { id } = useParams();

  const dispatch = usedispatch();
  const [limit, setLimit] = useState<number>(10);

  const itemId = Number(id);

  useEffect(() => {
    const obj = { itemId, limit };

    dispatch(getItemCategory(obj));
  }, [itemId]);
  const { itemCat } = useSelector((state: RootState) => state.cat);

  const handleClick = () => {
    setLimit((prev: number) => prev + 10);
   
    dispatch(addCate({ limit, itemId }));
  };

  

  return (
    <div className={styles.cateItem}>
      <div className={styles.cateImage}>
        <div className={styles.cateContainer}>
          {itemCat &&
            itemCat.map((item: itemType) => (
              <div key={item.id}>
                <img src={item.url} width={150} height={150} />
              </div>
            ))}
        </div>

        <div className={styles.bttnContainer}>
          <button onClick={handleClick} className={styles.btnMore}>
           
            Add more cat
          </button>
        </div>
      </div>
    </div>
  );
};

export default CateItem;
