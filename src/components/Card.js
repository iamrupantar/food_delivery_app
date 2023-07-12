import React from 'react'

export default function Card(props) {

    let options = props.options;
    let priceOptions = Object.keys(options);

    return (
        <div><div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
            <img src={props.imgsrc} className="card-img-top" alt="Food_item_image" style={{height:"170px",objectFit:"fill"}} />
            <div className="card-body">
                <h5 className="card-title">{props.foodName}</h5>
                {/* <p className="card-text">This is some important demo text</p> */}
                <div className="container w-100">
                    <select className="m-2 h-100 bg-success rounded bg-success">
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}> {i + 1} </option>
                            )
                        })}
                    </select>

                    <select className="m-2 h-100 bg-success rounded bg-success">
                        {/* <option value="half">Half</option>
                        <option value="full">Full</option> */}

                        {
                            priceOptions.map((data)=>{
                                return <option key={data} value={data}>{data}</option>
                            })
                        }
                    </select>
                    <div className="price d-inline fs-5 h-100">
                        Total Price:
                    </div>
                </div>
            </div>
        </div></div>
    )
}
