import React from 'react'

export default function Card(props) {

    let options = props.options;
    let priceOptions = Object.keys(options);

    return (
        <div><div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
            <img src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" className="card-img-top" alt="..." />
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
