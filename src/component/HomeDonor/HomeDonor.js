
//added code to solve useeffect white screen error

import React, { useEffect, useState } from "react";
import "./HomeDonor.css";
import HomeDonorData from "./HomeDonorData";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import HashLoader from "react-spinners/HashLoader";

const override = {
  display: "block",
  margin: "5% auto",
  borderColor: "red",
};

const HomeDonor = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(true); // Initialize loading state as true
  const [donors, setDonors] = useState([]);
  const [uidonor, setUidonor] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://blood4life-server.vercel.app/donateBlood");
      const Donordata = await response.json();
      const approvedDonorData = Donordata.filter((data) => data.status === "Approved");
      setDonors(approvedDonorData);
      setUidonor(approvedDonorData);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Set loading to false in case of error
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = (data) => {
    setLoading(true);
    if (data.bloodGroup === "All") {
      setUidonor(donors);
    } else {
      const searchDonor = donors.filter((donor) => donor?.bloodGroup === data.bloodGroup);
      setUidonor(searchDonor);
    }
    // Delay setting loading state to false after 500ms
    setTimeout(() => {
      setLoading(false);
    }, 700);
  };

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
      <div className="m-5 make-req" style={{color:"white"}}>
        <h5>
          If you didn't find a donor, please send a blood request to the blood bank.
        </h5>
        <NavLink style={{ textDecoration: "none", color: "red" }} to="/user-blood-request">
          <Button variant="contained" color="secondary">
            Blood Request
          </Button>
        </NavLink>
      </div>

      {loading ? (
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
          {!uidonor.length ? (
            <div>
              <h4 className="no-fund">Oops! No Donor Found</h4>
            </div>
          ) : (
            <div className="row mx-3 mb-5">
              {uidonor.map((donordata) => (
                <HomeDonorData donordata={donordata} key={donordata._id}></HomeDonorData>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HomeDonor;
