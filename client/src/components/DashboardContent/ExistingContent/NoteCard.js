import React from "react";


function NoteCard(props) {
    console.log('NOTE', props.notes)

    return (
        <React.Fragment>
            {/* {props.notes.map()} */}
            <div className="col-md-3 m-2 card-container">
                {props.note}
            </div>
        </React.Fragment>
    )

}

export default NoteCard;