import React, { useEffect, useState } from "react";
import Content from "./Content"
import { useParams } from "react-router-dom";
import API from "../../../utils/API"



function NewContent() {
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
        <React.Fragment>
            <div className="p-5 position-relative card-container">
                <Content id={data._id} data={data} status={data.status} date={data.date} title={data.title} company={data.company} location={data.location} listing={data.listing} description={data.description} />
            </div>
            <div className="p-5 mt-5 position-relative card-container">
                <h1>text</h1>
            </div>
        </React.Fragment>
    )

}

export default NewContent;