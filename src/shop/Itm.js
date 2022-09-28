import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Itm = ({ shopList , cart , setCart }) => {
    const { itm } = useParams();
    const navigate = useNavigate();
    const matchItm = shopList.find((it) => itm == it.id);

    

    return (
        <section className="shopItm">
            <div>
                <div className="box">
                    <img src={matchItm.src} alt="" />
                </div>
                <div className="name">{matchItm.name}</div>
                <div className="des">{matchItm.des.substring(0, 100)}...</div>
                <div className="price">
                    <span>{matchItm.price.toLocaleString()}</span> 원
                </div>
                <button onClick={() =>{
                  setCart([
                    ...cart,
                    {id: matchItm.id, itm: matchItm.name, }
                  ])
                  navigate('/Cart')
                }
                }>장바구니 담기</button>
            </div>
        </section>
    );
};

export default Itm;
