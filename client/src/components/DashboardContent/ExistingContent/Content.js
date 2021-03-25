import React from "react";
import { Link } from "react-router-dom";


function Content(props) {

    return (
        <div>
            <Link to={"/edit/" + props.id} data={props}><button className="btn viewBtn editPos" id={props.id}>Edit</button></Link>
            <p><span className={`status ${props.status}`}>{props.status}</span>{props.date}</p>
            <h2>{props.title}</h2>
            <p className="margin-none">{props.company} | {props.location}</p>
            <hr />
            <label className="form-check-label" htmlFor="checkApplied" >Listing URL:</label>
            <p className="margin-none"><a href={props.listing} target="_blank" rel="noopener noreferrer">{props.listing || "None available"}</a></p>
            <label className="form-check-label mt-4" htmlFor="checkApplied">Description:</label>
            <p className="margin-none">{props.description || "None Available"} </p>
        </div>
    )
}

export default Content;