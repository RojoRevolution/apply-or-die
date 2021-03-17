import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


import API from "../../../utils/API"


function LogForm(props) {

    // const [data, setData] = useState([])

    // const { id } = useParams()

    // useEffect(() => {
    //     loadData()
    // }, []);

    // function loadData() {
    //     API.getOne(id)
    //         .then(res => {
    //             setData(res.data)
    //         })
    //         .catch(err => console.log(err));
    // };

    return (
        <div>
            <Link to={"/edit/" + props.id} data={props}><button className="btn viewBtn editPos" id={props.id}>Edit</button></Link>
            <p><span className={`status ${props.status}`}>{props.status}</span>{props.date}</p>
            <h2>{props.title}</h2>
            <p className="margin-none">{props.company} | {props.location}</p>
            <hr />
            <label className="form-check-label" htmlFor="checkApplied">Listing URL:</label>
            <p className="margin-none"><a href={props.listing}>{props.listing || "None available"}</a></p>
            <label className="form-check-label mt-2" htmlFor="checkApplied">Description:</label>
            <p className="margin-none">{props.description || "None Available"} </p>
        </div>
    )
}

export default LogForm;