import React from "react";
import { SideBar } from "../components/SideBar/SideBar";
import { ResultsTable } from "../components/DashboardContent/ResultsTable";


function Dashboard() {

  // Set page title
  document.title = 'Dashboard | Apply or Die'
  return (
    <div>
      <SideBar />
      <div className="container-fluid py-5 mainContainer">
        <ResultsTable />
      </div>
    </div >
  );
}


export default Dashboard;
