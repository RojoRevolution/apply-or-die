import React from "react";
import { useAtom } from "jotai";
import { filterStatus, filterValue } from "../../utils/Atoms"


function SortButton(props) {

    // const [statusState] = useAtom(filterStatus);
    // const [filterValue, setStatusFilter] = useAtom(filterStatus);



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