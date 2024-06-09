import React, { useEffect, useState } from "react";
import Charts from "../Charts/Charts";

import "./AdminHome.css";

const AdminHome = () => {
  const [donors, setDonors] = useState([]);
  const [approve, setApprove] = useState([]);
  const [pandingdata, setPandingdata] = useState([]);
  const [rejecteddata, setRejecteddata] = useState([]);

  const [bloodrequest, setBloodrequest] = useState([]);
  const [bloodAprove, setBloodAprove] = useState([]);
  const [panding, setBloodPanding] = useState([]);
  const [rejected, setBloodRejected] = useState([]);

  useEffect(() => {
    fetch("https://blood4life-server.vercel.app/donateBlood")
      .then((res) => res.json())
      .then((data) => {
        const Aprove = data.filter((data) => data?.status === "Approved");
        const panding = data.filter((data) => data?.status === "Pending");
        const Rejected = data.filter((data) => data?.status === "Rejected");
        setApprove(Aprove);
        setPandingdata(panding);
        setRejecteddata(Rejected);
        setDonors(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://blood4life-server.vercel.app/bloodRequest")
      .then((res) => res.json())
      .then((data) => {
        const AproveRequestData = data.filter(
          (data) => data?.status === "Approved"
        );
        const pandingData = data.filter((data) => data?.status === "Pending");
        const Rejected = data.filter((data) => data?.status === "Rejected");
        setBloodAprove(AproveRequestData);
        setBloodPanding(pandingData);
        setBloodRejected(Rejected);
        setBloodrequest(data);
      });
  }, []);

  return (
    <div className="p-3">
      <Charts></Charts>
      <div >
        <h3 className=" mb-3 mt-3 subro" style={{color:'white'}}>Total Donor Data</h3>
        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-4">
          <div className="col">
            <div className="p-3 border total-css">
              <p className="donor-icon">
                <i class="fas fa-users"></i>
              </p>
              <p className="total text-white">Total Donors</p>
              <p className="count text-white">{donors.length}</p>
            </div>
          </div>

          <div className="col">
            <div className="p-3 border total-css">
              <p className="donor-icon">
                <i class="fas fa-users"></i>
              </p>
              <p className="total text-white">Total Pending</p>
              <p className="count text-white">{pandingdata.length}</p>
            </div>
          </div>

          <div className="col">
            <div className="p-3 border total-css">
              <p className="donor-icon">
                <i class="fas fa-users"></i>
              </p>
              <p className="total text-white">Total Approved</p>
              <p className="count text-white">{approve.length}</p>
            </div>
          </div>

          <div className="col">
            <div className="p-3 border total-css">
              <p className="donor-icon">
                <i class="fas fa-users"></i>
              </p>
              <p className="total text-white">Total Rejected</p>
              <p className="count text-white">{rejecteddata.length}</p>
            </div>
          </div>
        </div>

        {/************************************************************ */}
        <div>
          <h3 className=" mb-3 mt-5 subro text-white">Total Blood Requests Data</h3>
          <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-4">
            <div className="col">
              <div className="p-3 border total-css">
                <p className="donor-icon">
                  <i class="fas fa-spinner"></i>
                </p>
                <p className="total text-white">Total Requests</p>
                <p className="count text-white">{bloodrequest.length}</p>
              </div>
            </div>
            <div className="col">
              <div className="p-3 border total-css">
                <p className="donor-icon">
                  <i class="far fa-check-circle"></i>
                </p>
                <p className="total text-white">Pending Requests</p>
                <p className="count text-white">{panding.length}</p>
              </div>
            </div>
            <div className="col">
              <div className="p-3 border total-css">
                <p className="donor-icon">
                  <i class="far fa-check-circle"></i>
                </p>
                <p className="total text-white">Approved Requests</p>
                <p className="count text-white">{bloodAprove?.length}</p>
              </div>
            </div>
            <div className="col">
              <div className="p-3 border total-css">
                <p className="donor-icon">
                  <i class="fas fa-burn "></i>
                </p>
                <p className="total text-white">Total Rejected</p>
                <p className="count text-white">{rejected.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
