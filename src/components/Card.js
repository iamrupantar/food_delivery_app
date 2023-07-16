import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {
    let dispatch = useDispatchCart();
    let data = useCart();
    const priceref = useRef();
    let options = props.options;
    let priceOptions = Object.keys(options);
    const[qty,setQty]=useState('1')
    const[size,setSize]=useState("")
    const handleAddToCart = async() => {
        let food =[]
        for (const item of data) {
            if (item.id === props.foodItem._id) {
                food = item;
        
                break;
              }
        }
        if (food !== []) {
            if (food.size === size) {
              await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
              return
            }
            else if (food.size !== size) {
              await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
              console.log("Size different so simply ADD one more to the list")
              return
            }
            return
          }
        await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price: finalPrice,qty:qty,size:size})
        // console.log(data);
    }
    let finalPrice = qty * parseInt(options[size]);

    useEffect(()=>{
        setSize(priceref.current.value)
    },[])


    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src={props.foodItem.img} className="card-img-top" alt="Food_item_image" style={{ height: "140px", objectFit: "fill" }} />
                <div className="card-body ">
                    <h5 className="d-inline  card-title fw-bold">{props.foodItem.name}</h5>
                    {/* <p className="card-text">This is some important demo text</p> */}
                    <div className="container w-100">
                        <select className="m-2 h-100 bg-info rounded bg-info" onChange={(e)=>{setQty(e.target.value)}}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>

                        <select className="m-2 h-100 bg-info rounded" ref={priceref} onChange={(e)=>{setSize(e.target.value)}}>
                            {/* <option value="half">Half</option>
                        <option value="full">Full</option> */}

                            {
                                priceOptions.map((data) => {
                                    return <option key={data} value={data}>{data}</option>
                                })
                            }
                        </select>
                        <div className="price d-flex  fs-5 h-100">
                            Total Price: ₹{finalPrice}/-
                        </div>
                        
                    </div>
                    <hr />
                    <button className='btn bg-info justify-center text-white mb-3 fw-bold' onClick={handleAddToCart}>Add To Cart</button>
                
                </div>
            </div>
        </div>
    )
}
