"use client"
import { useState } from "react";

export default function Register(){
    const[name, setName]=useState("");
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[loadig, setLoading]=useState(false);

    const handleSbumit = async (e)=> {
        e.preventDefault();
        try{
           setLoading(true)
        }catch(err){
            console.log(err);
            setLoading(false);
        }
    };

    return(
        <main>
            <div className="constainer">
                <div className="row d-flex justify-content-center align-items-center vh-100">
                      <div className="col-lg-5 shadow bg-light p-5">
                       <h2 className="mb-4 text-center">Register</h2>
                      </div>
                </div>
            </div>
        </main>
    )
}