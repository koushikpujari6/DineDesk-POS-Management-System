import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import TableCard from "../components/tables/TableCard";
import { tables } from "../constants";

const Tables = () =>{

    const [status, setStatus]= useState("all");

    return(
        <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
             <div className="flex items-center justify-between px-8 py-4 mt-2">
        <div className="flex gap-4 items-center">
            <BackButton/>
            <h1 className="text-[#cdcdcd] text-2xl tracking-wider font-bold">Tables</h1>
        </div>
        <div className="flex items-center justify-around gap-4">
                    <button onClick={() => setStatus("all")} className={`text-[#ababab] ${status === "all" && "bg-[#383838] rounded-lg px-3 py-2"} text-lg rounded-lg px-3 py-2 font-semibold`}>All</button>
                    <button onClick={() => setStatus("booked")} className={`text-[#ababab] ${status === "booked" && "bg-[#383838] rounded-lg px-3 py-2"} text-lg rounded-lg px-3 py-2 font-semibold`}>Booked</button>
                    
                </div>

        

        </div>
        <div className="grid grid-cols-5 gap-5 px-10 py-5 overflow-y-scroll h-[calc(100vh-13rem)] no-scrollbar">
            {
                tables.map((table) => {
                    return(
                        <TableCard key={table.id} id={table.id} name={table.name} status={table.status}
                        initials={table.initial} seats={table.seats}/>
                    )
                })
            }

        </div>
            <BottomNav />
        </section>
    )
}

export default Tables