import React from "react";
import MainSlide from "../components/MainSlide";
import MainTab from "../components/MainTab";
import "../css/Main.scss";
import MainCategory from "../components/MainCategory";
import MainProductSlide from "../components/MainProductSlide";

const Main = ({ shopList }) => {
    return (
        <>
            <MainSlide />
            <MainProductSlide shopList={shopList} category={"pencil"} tit={"BEST PRODUCT"} des={"피몽쉐 마인드풀 라운지"} />
            <MainProductSlide shopList={shopList} category={"liquid"} tit={"NEW PRODUCT"} des={"new product"} />
            <MainTab shopList={shopList} />
            <MainCategory shopList={shopList} category={"pencil"} />
            <MainCategory shopList={shopList} category={"liquid"} />
            <MainCategory shopList={shopList} category={"powder"} />
        </>
    );
};

export default Main;
