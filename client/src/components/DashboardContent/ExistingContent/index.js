import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../../utils/API"
import Content from "./Content"
import NoteCard from "./NoteCard"



function NewContent() {
    const [data, setData] = useState([])
    const [notes, setNotes] = useState([])

    const { id } = useParams()

    useEffect(() => {
        loadData()
        console.log("DATA", data)
    }, []);

    function loadData() {
        API.getOne(id)
            .then(res => {
                setData(res.data)
                setNotes(res.data.notes)
                console.log('Notes', res.data.notes)
            })
            .catch(err => console.log(err));
    };

    return (
        <React.Fragment>
            <div className="p-5 position-relative card-container">
                {/* <Content /> */}
                <Content id={data._id} data={data} status={data.status} date={data.date} title={data.title} company={data.company} location={data.location} listing={data.listing} description={data.description} />
            </div>
            <div className="p-5 mt-5 position-relative card-container">
                <h1>Notes:</h1>
                <div className="row">
                    {notes.map((content, index) => (
                        <NoteCard key={index} note={content} />
                    ))}
                    {/* <NoteCard notes={data.notes} /> */}
                </div>
            </div>
        </React.Fragment>
    )

}

export default NewContent;