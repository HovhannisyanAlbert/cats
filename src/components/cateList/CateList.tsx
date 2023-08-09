import React, { useEffect, FC,  } from "react";
import { RootState, usedispatch } from "../features/store/store";
import { getAllCat } from "../features/thunk/thunk";
import { useSelector } from "react-redux";
import styles from "./cateList.module.css";

import { Link } from "react-router-dom";

interface itemType {
  id: number;
  name: string;
}

const CateList: FC = () => {
  const dispatch = usedispatch();

  useEffect(() => {
    dispatch(getAllCat());
  }, []);

  const { cat } = useSelector((state: RootState) => state.cat);

  return (
    <div className={styles.cateList}>
    


    
      
    
      <div className={styles.cateItems}>
        {cat &&
          cat.map((item: itemType) => (
            <div key={item.id}>
              
              <Link to={`/${item.id}`} className={styles.cateName}>
             
                {item.name}
              </Link>
            </div>
          ))}
          
      </div>

     
    </div>
  );
};

export default CateList;
