import React from "react";
import { AddNew } from "../Buttons";
import UserDataTable from "../DashboardContent/UserDataTable"


function ApplicationList() {
    return (
        <div className="container-fluid py-5 mainContainer">
            <div className="text-center">
                <AddNew />
            </div>
            <UserDataTable />
        </div>
    );
};

export default ApplicationList;

