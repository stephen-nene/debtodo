import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcPrevious, FcNext } from "react-icons/fc";


import { Navbar } from "../Navbar";





export const HomeDebt = (props) => {
    const [currentDate, setCurrentDate] = useState(
        new Date().toISOString().split("T")[0]
    );


    const handleDate = (operator) => {
        const dateObj = new Date(currentDate);
        dateObj.setDate(dateObj.getDate() + (operator === "-" ? -1 : 1));
        const newDate = dateObj.toISOString().split("T")[0];
        setCurrentDate(newDate);
    };

    const resetToToday = () => {
        setCurrentDate(new Date().toISOString().split('T')[0]);
    };

    const isToday = (someDate) => {
        const today = new Date();
        return (
            someDate.getDate() === today.getDate() &&
            someDate.getMonth() === today.getMonth() &&
            someDate.getFullYear() === today.getFullYear()
        );
    };

    return (
        <div className="text-center -view">
            <Navbar />
            <div className="my-5 date-selector">
                <p className="mb-4">
                    {new Date(currentDate).toLocaleDateString(undefined, {
                        weekday: "long",
                    })}
                </p>
                <div className="dates flex justify-center">
                    <button
                        onClick={() => handleDate("-")}
                        className="px-3 border border-violet-600 hover:border-rose-600 text-white rounded  hover:text-black transition duration-300">
                        <FcPrevious
                            className="cursor-pointer"
                        />
                    </button>
                    <input
                        type="date"
                        value={currentDate}
                        onChange={(e) => setCurrentDate(e.target.value)}
                        className="mx-2 bg-transparent outline-none border rounded p-1 focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={() => handleDate("+")}
                        className="px-3 border border-violet-600 text-white rounded hover:border-rose-600 hover:text-black transition duration-300">
                        <FcNext
                            className="cursor-pointer"
                        />
                    </button>
                </div>
                
                {!isToday(new Date(currentDate)) && (

                    <button
                        onClick={resetToToday}
                        className="mt-4 py-1.5 px-3 border border-red-500 rounded  hover:border-fuchsia-700 hover:text-fuchsia-700 transition duration-300"
                    >
                        Today
                    </button>
                )}


            </div>


            <p>debts</p>
        </div>
    );
}