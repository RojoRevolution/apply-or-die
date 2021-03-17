import React from "react";
import { Link } from "react-router-dom";
import { AddNew } from "../components/Buttons";
import { SideBar } from "../components/SideBar/SideBar";
import { ResultsTable } from "../components/DashboardContent/ResultsTable";
// import dummyDB from "../content/dummyDBresults.json";
// import API from "../utils/API"

function Dashboard() {

  return (
    <div>
      <SideBar />
      {/* <SideBar /> */}
      <div className="container-fluid py-5 mainContainer">
        <div className="text-center">
          <Link to={"/new"}><AddNew /></Link>
        </div>
        <ResultsTable />
      </div>
    </div >
  );
}


export default Dashboard;
