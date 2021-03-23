import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DeleteEntry } from "../../Buttons"
import API from "../../../utils/API";

import { useAtom } from "jotai";
import { searchAtom, loadDB, userId, populateData } from "../../../utils/Atoms"



function ResultsTable() {

    const [searchInput] = useAtom(searchAtom);
    const [statusState, setStatusState] = useAtom(loadDB);
    const [ID, setID] = useAtom(userId);
    const [refData, setRefData] = useAtom(populateData)

    useEffect(() => {
        loadApps()
    }, [refData]);

    function loadApps() {
        API.getUser(ID)
            .then(res => {
                setRefData(res.data.userEntries)
            })
            .catch(err => console.log(err));
    };

    function deleteOne(id) {
        console.log("DELETE CLICKED")
        API.deleteOne(id)
            .then(res => loadApps())
            .catch(err => console.log(err));
    }

    function handleStatus(event) {
        event.preventDefault()
        const status = event.target.id
        setStatusState(status)
        console.log('StatusFilter:', status)
    }

    return (
        <div id="userData" className="container-fluid py-3">
            <table className="results">
                <tbody>
                    <React.Fragment>
                        {refData.filter(input => input.company.toLowerCase().includes(searchInput) || input.status.toLowerCase().includes(searchInput)).map(content => (
                            <tr key={content._id} className="row justify-content-between position-relative my-4 card-container" data-aos="fade-up">
                                <td className="col-10">
                                    <p><span onClick={handleStatus} className={`status ${content.status}`} id={content.status}>{content.status}</span>{content.date}</p>
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

export { ResultsTable };