import React, { useState, useEffect } from 'react'
import axios from "axios";

export const All = () => {
    const [data, setData] = useState([]);
    const getData = () => {
        axios.get(`http://allevents.s3.amazonaws.com/tests/all.json`)
            .then((response) => {
                // console.log(response.data)
                const myData = response.data;
                setData(myData);
            });
    };
    useEffect(() => getData()
        // {
        //     effect
        //     return () => {
        //         cleanup
        //     }
        // }
        , [])
    console.log(data)
    let toggle = false;
    // const all = data.item;
    // console.log(typeof all)
    return (
        <div classNameName="container">
            <div className="d-flex justify-content-center py-3">
                <h3>Event List</h3>
            </div>
            <div className="d-flex justify-content-center toggle-btns">
                <button type="button" className="btn btn-dark" onClickCapture="toggleView(toggle)">Toggle</button>
            </div>
            {
                function toggleview(t){
                    if(t === false){
                        t = true;
                    }
                    else{
                        t = false;
                    }
                }
                if(toggle = true){
                    <div className="container py-4">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <div className="card h-100">
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                else{
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="..." class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            }
        </div>
    )
}


// import React from 'react'

// export const All = async() => {
//     const api_call = await fetch("http://allevents.s3.amazonaws.com/tests/all.json");
//     // const all = new Array (JSON.parse(api_call))
//     console.log(api_call)
//     return (
//         <div>
//             works
//         </div>
//     )
// }
