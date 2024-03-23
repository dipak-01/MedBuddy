import React from "react"
import { useNavigate } from 'react-router-dom';

import Navbar from "./Navbar";

export default function landingPage() {
const history = useNavigate();
    return (
        
        <><Navbar/>
            <div className="flex justify-center mt-36 w-full h-20 sm:h-32 m-4">
                <img className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5" src="https://www.1mg.com/images/tata_1mg_logo.svg" alt="logo" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 pt-20 justify-center p-4">
                <div className="bg-orange-300 w-full sm:w-96 sm:h-72 h-56 rounded-3xl p-8 text-center flex flex-col justify-between">
                    <div className="flex  sm:flex-row justify-between space-x-4 sm:space-x-6">
                        <img className="w-16 h-16 sm:w-28 sm:h-28" src="/medicine.png" alt="" />
                        <p className="m-auto text-md sm:text-lg font-medium text-start">Discover alternate medicine with same contents and effects</p>
                    </div>
                    <button onClick={() => history('/alternate-medicine')} className="border border-neutral-900  text-center text-lg sm:text-2xl font-bold rounded-md bg-slate-50 w-full text-slate-600">ALTERNATIVE MEDICINE</button>
                </div>
                <div className="bg-red-300 w-full sm:w-96 sm:h-72 h-56  rounded-3xl p-8 text-center flex flex-col justify-between">
                    <div className="flex   sm:flex-row justify-between space-x-4 sm:space-x-6">
                        <img className="w-16 h-16 sm:w-28 sm:h-28" src="/syringe.png" alt="" />
                        <p className="m-auto text-md sm:text-lg font-medium text-start">Predict disease based on the user given symptoms</p>
                    </div>
                    <button onClick={() => history('/recommendation')} className="border border-neutral-900  text-center text-lg sm:text-2xl font-bold rounded-md bg-slate-50 w-full text-slate-600">RECOMMENDED MEDICINE</button>
                </div>
                <div className="bg-teal-400 w-full sm:w-96 sm:h-72 h-56  rounded-3xl p-8 text-center flex flex-col justify-between">
                    <div className="flex  sm:flex-row justify-between space-x-4 sm:space-x-6">
                        <img className="w-16 h-16 sm:w-28 sm:h-28" src="/emergency-services.png" alt="" />
                        <p className="m-auto text-md sm:text-lg font-medium text-start">Discover alternate medicine with same contents and effects</p>
                    </div>
                    <button onClick={() => window.location.href = "tel:108"} className="border border-neutral-900  text-center text-lg sm:text-2xl font-bold rounded-md bg-red-700 w-full text-slate-100">EMERGENCY</button>
                </div>
            </div>
        </>
    )
}