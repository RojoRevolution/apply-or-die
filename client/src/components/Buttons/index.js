import React from "react";
import { useAtom } from "jotai";
import { filterStatus } from "../../utils/Atoms"


function SortButton(props) {

    const [statusState] = useAtom(filterStatus);


    // function filterStatusHandler(event) {
    //     const input = event.target.id
    //     console.log(input)

    //     if (input === statusState.value) {
    //         setStatusState({
    //             status: "inactive",
    //             value: "",
    //         });
    //     } else {
    //         setStatusState({
    //             status: "active",
    //             value: input,
    //         });
    //     }
    // }

    return (
        <React.Fragment>
            <button id={props.id} type="button" className='btn sortBtn' onClick={props.filterStatusHandler}>{props.text}</button>
        </React.Fragment>
    );
};

function AddNew() {
    return (
        <React.Fragment>
            <button className="btn addNewBtn">Add New Application</button>
        </React.Fragment>
    );
};

export { SortButton, AddNew };