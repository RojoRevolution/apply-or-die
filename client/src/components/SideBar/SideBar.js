import React from "react";
// import { useAtom } from "jotai";
// import { applications, searchAtom } from "../../utils/Atoms"
import { Logo, SearchContent, Sort, Filter, Navigation, CopyRight, GoBack } from "./SideBarContent";




function SideBar() {

    // const [searchInput, setSearchInput] = useAtom(searchAtom);
    // // const [searchInput, setSearchInput] = useState("");


    // // Search Form functions
    // function handleFormSubmit(event) {
    //     event.preventDefault();
    // }

    // function handleInputChange(event) {
    //     const input = event.target.value;
    //     console.log(input)
    //     setSearchInput(input)
    // }



    // function RenderTable() {
    //     if (window.location.pathname === "/") {
    //         return (
    //             <div>
    //                 <Logo />
    //                 <SearchContent />
    //                 <Sort />
    //                 <Filter filterStatus={filterStatus} />
    //                 <Navigation />
    //                 <CopyRight />
    //             </div>
    //         )
    //     } else {
    //         return (
    //             <React.Fragment>
    //                 <Logo />
    //                 <GoBack />
    //             </React.Fragment>
    //         )
    //     }
    // };


    return (
        <div className="sidebar">
            <div>
                <Logo />
                <SearchContent />
                <Sort />
                <Filter />
                <Navigation />
                <CopyRight />
            </div>
            {/* <RenderTable /> */}
        </div>
    );
}

export default SideBar;
