import React from "react";


function NoteCard(props) {
    return (
        <React.Fragment>
            <div className=" m-2 noteCard">
                {props.note}
            </div>
        </React.Fragment>
    )

}

export default NoteCard;