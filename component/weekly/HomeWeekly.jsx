"use client";
import React, { useContext } from "react";
import styles from "./home-weekly.module.scss";
import WeeklyCard from "@/component/weekly-card/WeeklyCard";
import { Context } from "@/context/DataProvider";

const HomeWeekly = ({title}) => {
  const {language, mockData} = useContext(Context);
  let [firstNumber, setFirstNumber] = React.useState(1);
  let [temporarilyArr, setTemporarilyArr] = React.useState([]);
  const itemsNumber = Math.ceil(mockData?.length / 4);

  const changeNews = (text) => {
    if (text === "inc") {
      firstNumber < itemsNumber
        ? setFirstNumber(firstNumber++)
        : setFirstNumber(itemsNumber);
      setTemporarilyArr(
        mockData?.slice((firstNumber - 1) * 4, firstNumber * 4)
      );
    } else if (text === "dec") {
      firstNumber > 1 ? setFirstNumber(firstNumber--) : setFirstNumber(1);
      setTemporarilyArr(
        mockData?.slice((firstNumber - 1) * 4, firstNumber * 4)
      );
    }
    console.log(firstNumber, "heeheheh");
  };

  React.useEffect(() => {
    setTemporarilyArr(mockData.slice(0, 4));
  }, []);
  return (
    <div className={styles.body}>
      <div className="container">
        <div className={styles.headerBlock}>
          <h2 className={styles.title}>
            {title === "home" ? language.digest : language.similar_posts}
          </h2>
          <p className={styles.itemNumber}>
            <span
              className={
                Number(firstNumber) == 1
                  ? styles.leftArrow
                  : styles.leftSelectedArrow
              }
              onClick={() => changeNews("dec")}
            ></span>
            {firstNumber}/ {itemsNumber}
            <span
              className={
                Number(firstNumber) < itemsNumber
                  ? styles.rightSelectedArrow
                  : styles.rightArrow
              }
              onClick={() => changeNews("inc")}
            ></span>
          </p>
        </div>
        <div className={styles.itemsBlock}>
          {temporarilyArr?.map((el) => {
            return (
    
                <WeeklyCard key={Date.now() + Math.random()} data={el} />
   
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeWeekly;
