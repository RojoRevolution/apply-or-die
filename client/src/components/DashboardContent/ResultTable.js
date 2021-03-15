import React from "react";
import { AddNew } from "../Buttons";
import UserDataTable from "./UserDataTable"
import dummyDB from "../../content/dummyDBresults.json";


function ResultTable() {



    return (
        <div className="container-fluid py-5 mainContainer">
            <div className="text-center">
                <AddNew />
            </div>
            <UserDataTable data={dummyDB} id={dummyDB.id} status={dummyDB.status} date={dummyDB.date} date={dummyDB.content} title={dummyDB.title} company={dummyDB.companyy} location={dummyDB.location} />
        </div>
    );
};

export default ResultTable;

