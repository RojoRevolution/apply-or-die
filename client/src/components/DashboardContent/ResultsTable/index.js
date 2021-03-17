import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DeleteEntry } from "../../Buttons"
import API from "../../../utils/API";

import { useAtom } from "jotai";
import { searchAtom, dbData, filterValue, } from "../../../utils/Atoms"



function ResultsTable() {

    const [searchInput] = useAtom(searchAtom);
    const [filterStatus] = useAtom(filterValue);
    // const [appsData, setAppsData] = useState([])
    const [appsData, setAppsData] = useState({
        data: [],
        statusState: "",
        search: ""
    })


    useEffect(() => {
        loadApps()
        console.log(appsData)
    }, []);

    function loadApps() {
        API.getApps()
            .then(res => {
                // setAppsData(res.data)
                setAppsData({
                    data: res.data,
                    // statusState: filterStatus,
                    // search: searchInput
                })
            }).then(res => console.log(appsData))
            .catch(err => console.log(err));
    };

    function deleteOne(id) {
        console.log("DELETE CLICKED")
        API.deleteOne(id)
            .then(res => loadApps())
            .catch(err => console.log(err));
    }




    return (
        <div id="userData" className="container-fluid py-3">
            <table className="results">
                <tbody>
                    <React.Fragment>
                        {appsData.data.filter(input => input.company.toLowerCase().includes(searchInput)).map(content => (
                            <tr key={content._id} className="row justify-content-between position-relative my-4 card-container">
                                <td className="col-10">
                                    <p><span className={`status ${content.status}`}>{content.status}</span>{content.date}</p>
                                    <h2>{content.title}</h2>
                                    <p className="margin-none">{content.company} | {content.location}</p>
                                </td>
                                <td className="col text-center viewBtnCol">
                                    <Link to={"/logs/" + content._id}><button id={content._id} className="viewBtn">View More</button></Link>
                                </td>
                                <td>
                                    <DeleteEntry id={content._id} onClick={() => deleteOne(content._id)} />
                                </td>
                            </tr>
                        ))}
                    </React.Fragment>
                </tbody>
            </table>
        </div >
    );
};



function APItable(props) {

    return (
        <table>
            <tbody>
                {props.data.map(content => (
                    <tr key={content.id} className="row justify-content-between my-4 card-container">
                        <td className="col-10">
                            <h2>{content.title}</h2>
                            <p className="margin-none">{content.company} | {content.location}</p>
                        </td>
                        <td className="col text-center viewBtnColAPI">
                            <button id={content.id} className="viewBtn">View More</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export { ResultsTable, APItable };