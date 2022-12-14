import React from "react";
import CategorySlider from "./CategorySlider";
import MainCategory from "./MainCategory";

const MainProuctSlide = ({ shopList, category, tit, des }) => {
    return (
        <section className="sce slide_">
            <h2>{tit}</h2>
            <p>{des}</p>
            <div className="inner">
                <CategorySlider shopList={shopList} category={category} arrow={true} dots={true} />
            </div>
        </section>
    );
};

export default MainProuctSlide;
