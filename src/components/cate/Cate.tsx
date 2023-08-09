import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import CateList from "../cateList/CateList";
import { RootState, usedispatch } from "../features/store/store";
import { useSelector } from "react-redux";
import styles from "./cate.module.css";

import { defaultCat } from "../features/thunk/thunk";
import { itemType } from "../cateItem/type";



const Cate = () => {


  const dispatch = usedispatch();
  useEffect(() => {
    dispatch(defaultCat());
    
  }, []);

  const {defaultCats,itemCat} = useSelector((state:RootState)=> state.cat)



  return (
    <div className={styles.cat}>
      <CateList />

      <div className={itemCat.length ===0 ?styles.defaultCatStyle : styles.noneDefault}>

      {
        itemCat.length === 0 ?
        defaultCats.map((elem:itemType)=>(
          <div key={elem.id}>
            <img src={elem.url} width={150} height={150} />


            </div>
        )):" "
      }


      </div>

  

   
      
   

      <Outlet />
    </div>
  );
};

export default Cate;
