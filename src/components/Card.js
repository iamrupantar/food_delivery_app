import React from 'react'

export default function Card(props) {

    let options = props.options;
    let priceOptions = Object.keys(options);

    const handleAddToCart = () => {

    }



    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src={props.imgsrc} className="card-img-top" alt="Food_item_image" style={{ height: "140px", objectFit: "fill" }} />
                <div className="card-body ">
                    <h5 className="card-title">{props.foodName}</h5>
                    {/* <p className="card-text">This is some important demo text</p> */}
                    <div className="container w-100">
                        <select className="m-2 h-100 bg-info rounded bg-info">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>

                        <select className="m-2 h-100 bg-info">
                            {/* <option value="half">Half</option>
                        <option value="full">Full</option> */}

                            {
                                priceOptions.map((data) => {
                                    return <option key={data} value={data}>{data}</option>
                                })
                            }
                        </select>
                        <div className="price d-inline  fs-5 h-100">
                            Total Price:
                        </div>
                        
                    </div>
                    <hr />
                    <button className='btn bg-info justify-center text-white mb-3 fw-bold' onClick={handleAddToCart}>Add To Cart</button>
                
                </div>
            </div>
        </div>
    )
}
