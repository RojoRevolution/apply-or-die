import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../../../utils/API"
import Content from "./Content"
import NoteCard from "./NoteCard"
import NewNote from "../../Forms/NewNoteForm"




function NewContent() {
    const [data, setData] = useState([])
    const [notes, setNotes] = useState([])
    // const [newNoteForm, setNoteForm] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        loadData();
    }, []);

    function loadData() {
        API.getOne(id)
            .then(res => {
                setData(res.data)
                setNotes(res.data.notes)
                // console.log('Notes', res.data.notes)
            })
            .catch(err => console.log(err));
    };

    // function newNote(event) {
    //     console.log("Click")
    //     // let show = event.target.id
    //     setNoteForm(prevState => !prevState)
    //     console.log('Note State', newNoteForm)

    // }



    return (
        <React.Fragment>
            <div className="p-5 position-relative card-container">
                {/* <Content /> */}
                <Content id={data._id} data={data} status={data.status} date={data.date} title={data.title} company={data.company} location={data.location} listing={data.listing} description={data.description} />
            </div>
            <div className="p-5 mt-5 position-relative card-container">
                <Link to={"/newnote/" + data._id}><button className="btn viewBtn editPos" >Add new Note</button></Link>
                <h1>Notes:</h1>
                <div>
                    {/* <div className="row"> */}
                    {notes.reverse().map((content, index) => (
                        <NoteCard key={index} note={content} />
                    ))}
                </div>
            </div>
        </React.Fragment>
    )

}

export default NewContent;