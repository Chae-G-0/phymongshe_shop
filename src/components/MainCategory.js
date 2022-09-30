import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainCategory = ({ shopList, category }) => {
    const Mainlist = shopList.filter((it) => category === it.cate);

    return (
        <>
            {Mainlist.map((it) => {
                return (
                    <figure key={it.id}>
                        <Link to={"/shopItem/" + it.id}>
                            <div className="box">
                                <img src={it.src} alt="" />
                            </div>
                            <div className="name">{it.name}</div>
                            <div className="des">{it.des.substring(0, 100)}...</div>
                            <div className="price">
                                <span>{it.price.toLocaleString()}</span> 원
                            </div>
                        </Link>
                    </figure>
                );
            })}
        </>
    );
};

export default MainCategory;
