import React, { useEffect, useState } from "react";
import "./HomeDonor.css";
import HomeDonorData from "./HomeDonorData";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import HashLoader from "react-spinners/HashLoader";


const override: CSSProperties = {
  display: "block",
  margin: "5% auto",
  borderColor: "red",
};

const HomeDonor = () => {
  let [loading, setLoading] = useState(false);
  const [donors, setDonor] = useState([]);
  const [uidonor, setUidonor] = useState([]);

  const { register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    setLoading(true)
    if(data.bloodGroup==="All"){
      setUidonor(donors)
    }
    else{
      const searchdonor = donors.filter(
        (donor) => donor?.bloodGroup === data.bloodGroup
      );
      setUidonor(searchdonor);
    }
    // Delay setting loading state to false after 500ms
    setTimeout(() => {
      setLoading(false);
    }, 700);
  
  };

    

  useEffect(() => {
    fetch("https://blood4life-server.vercel.app/donateBlood")
      .then((res) => res.json())
      .then((Donordata) => {
        const AproveDonorData = Donordata.filter(
          (data) => data.status === "Approved"
        );
        setUidonor(AproveDonorData);
        setDonor(AproveDonorData);
      });
  }, []);

  if (!donors.length) {
    setLoading(true)
    return (
      // <button class="btn btn-primary spner-btn mb-5" type="button" disabled>
      //   <span
      //     class="spinner-border spinner-border-sm"
      //     role="status"
      //     aria-hidden="true"
      //   ></span>
      //   Loading...
      // </button>
      <HashLoader
        size={80}
        cssOverride={override}
        loading={loading}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  return (
    <div>
      <div className="Searce-Fild">
        <form onSubmit={handleSubmit(onSubmit)} className="search-option">
          <h3 className="Donor-src">
            Donor Search <i className="fas fa-arrow-right"></i>
          </h3>
          <div className="select-option">
            <small className="smaill-css">Blood Group</small>
            <select {...register("bloodGroup")} className="mb-3 select-options">
            <option value="All">All Blood Groups</option>
              <option value="A+">A+</option>
              <option value="O+">O+</option>
              <option value="AB+">AB+</option>
              <option value="B+">B+</option>
              <option value="A-">A-</option>
              <option value="O-">O-</option>
              <option value="AB-">AB-</option>
              <option value="B-">B-</option>
              
            </select>
            <input type="submit" value="Search" className="searce-btn" />
          
          </div>
        </form>
      </div>
      <div className="m-5 make-req">
        <h5>
          If you did't find a donar, please send blood request to the blood
          bank.
        </h5>
        <NavLink
          style={{ textDecoration: "none", color: "red" }}
          to="/user-blood-request"
        >
          <button className="btn btn-danger" color="inherit">
            {" "}
            Blood Request
          </button>
        </NavLink>
      </div>

    {loading ?  ( // Conditionally render loader based on loading state
     <div className="loader-container">
      <HashLoader
        size={80}
        cssOverride={override}
        loading={loading}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
   </div>  
  ) : (
    <div>
      {!uidonor.length && (
        <div>
          <h4 className="no-fund">Oops! No Donor Found</h4>
        </div>
      )}
      <div className="row mx-3 mb-5">
        {uidonor.map((donordata) => (
          <HomeDonorData donordata={donordata} key={donordata._id}></HomeDonorData>
        ))}
      </div>
    </div>
  )
    }
    </div>
  );
};

export default HomeDonor;
