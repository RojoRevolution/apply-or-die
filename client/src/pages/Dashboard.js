import React from "react";
import { ResultsTable } from "../components/DashboardContent/ResultsTable";
import { SideBar } from "../components/SideBar/SideBar";
import { MenuBtn } from "../components/Buttons/index"

import { useAtom } from "jotai";
import { sideBar } from "../utils/Atoms"

function Dashboard() {
  const [sidebarWidth] = useAtom(sideBar);



  // Set page title
  document.title = 'Dashboard | Apply or Die'
  return (
    <div>
      <SideBar width={sidebarWidth} />
      <div className="container-fluid py-5 mainContainer">
        <MenuBtn />
        <ResultsTable />
      </div>
    </div >
  );
}


export default Dashboard;
