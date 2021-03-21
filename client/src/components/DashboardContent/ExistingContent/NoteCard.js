import React from "react";


function NoteCard(props) {
    // console.log('NOTE', props.notes)

    return (
        <React.Fragment>
            {/* <div className=" m-2 card-container"> */}
            <div className=" m-2 noteCard">
                {props.note}
            </div>
        </React.Fragment>
    )

}

export default NoteCard;