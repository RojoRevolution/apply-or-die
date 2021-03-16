import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


import API from "../../../utils/API"


function LogForm() {

    const [data, setData] = useState([])

    const { id } = useParams()

    useEffect(() => {
        loadData()
    }, []);

    function loadData() {
        API.getOne(id)
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <Link to={"/edit/" + data._id} data={data}><button className="btn viewBtn editPos" id={data._id}>Edit</button></Link>
            <p><span className={`status ${data.status}`}>{data.status}</span>{data.date}</p>
            <h2>{data.title}</h2>
            <p className="margin-none">{data.company} | {data.location}</p>
            <hr />
            <label className="form-check-label" htmlFor="checkApplied">Listing URL</label>
            <p className="margin-none"><a href="https://www.indeed.com/jobs?q=web%20Developer&l=Austin%2C%20TX&fromage=7&vjk=ec8bcfbeb7a4e775">https://www.indeed.com/jobs?q=web%20Developer&l=Austin%2C%20TX&fromage=7&vjk=ec8bcfbeb7a4e775</a></p>
            <label className="form-check-label" htmlFor="checkApplied">Description</label>
            <p className="margin-none">Id vivamus ullamcorper in neque litora imperdiet porta ultrices hac non iaculis malesuada cubilia sit odio habitant aenean etiam accumsan sapien cubilia hendrerit. Orci a imperdiet tempor fringilla egestas sociosqu a condimentum per donec nisl mi a non curae suscipit molestie ut nam id eleifend fermentum a </p>
        </div>
    )
}

export default LogForm;