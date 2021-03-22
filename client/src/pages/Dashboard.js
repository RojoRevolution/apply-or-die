import React from "react";
import { Link } from "react-router-dom";
import { AddNew } from "../components/Buttons";
import { SideBar } from "../components/SideBar/SideBar";
import { ResultsTable } from "../components/DashboardContent/ResultsTable";
// import dummyDB from "../content/dummyDBresults.json";
// import API from "../utils/API"

import { useAtom } from "jotai";
import { searchAtom } from "../utils/Atoms"

import AOS from 'aos';
import 'aos/dist/aos.css';

function Dashboard() {

  const [searchInput] = useAtom(searchAtom);
  const all = "All Results"

  // Set page title
  document.title = 'Dashboard | Apply or Die'
  return (
    <div>
      <SideBar />
      {/* <SideBar /> */}
      <div className="container-fluid py-5 mainContainer">
        <div>
          {/* <Link to={"/new"}><AddNew /></Link> */}
        </div>
        <ResultsTable />
      </div>
    </div >
  );
}


export default Dashboard;
