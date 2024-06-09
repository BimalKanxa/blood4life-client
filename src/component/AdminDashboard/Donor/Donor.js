import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Swal from "sweetalert2";
import "./Donor.css";

const Donor = () => {
  const [donorslist, setDonorslist] = useState([]);

  useEffect(() => {
    fetch("https://blood4life-server.vercel.app/donateBlood")
      .then((res) => res.json())
      .then((data) => setDonorslist(data));
  }, [donorslist]);

  if (!donorslist?.length) {
    return (
      <button class="btn btn-primary spner-btn" type="button" disabled>
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    );
  }

  // update approved status
  const handleApprovedStatus = (id) => {
    axios
      .put(`https://blood4life-server.vercel.app/donateBlood/${id}`, {
        status: "Approved",
      })
      .then((res) => {
        console.log(res);
        if (res.data.matchedCount > 0) {
          Swal.fire("Approved!", "Donar request has been Approved.", "success");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // update rejected status
  const handleRejectedStatus = (id) => {
    axios
      .put(`https://blood4life-server.vercel.app/donateBlood/${id}`, {
        status: "Rejected",
      })
      .then((res) => {
        console.log(res);
        if (res.data.matchedCount > 0) {
          Swal.fire("Rejected!", "Donar request has been Rejected.", "success");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h4 className="donor-details mt-3 text-white">DONOR DETAILS</h4>
      <div className="pt-3">
        <Table striped bdonorslisted hover className="table-donor-list">
          <thead className="text-white">
            <tr className="t-head">
              <th>Sl</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Blood Group</th>
              <th>Disease(If Any)</th>
              <th>Last Donate Date</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody >
            {donorslist?.map((donorslist, index) => (
              <tr>
                <td className="text-white">{index + 1}</td>
                <td className="text-white">{donorslist?.name}</td>
                <td className="text-white">{donorslist?.age}</td>
                <td className="text-white">{donorslist?.gender}</td>
                <td className="text-white">{donorslist?.bloodGroup}</td>
                <td className="text-white">{donorslist?.disease}</td>
                <td className="text-white">{donorslist?.lastDonateDate}</td>
                <td className="text-white">{donorslist?.address}</td>
                <td className="text-white">{donorslist?.mobile}</td>
                <td className="text-white">{donorslist?.status}</td>
                <td className="text-white">
                  <button
                    className="btn btn-sm btn-success mx-1"
                    onClick={() => handleApprovedStatus(donorslist._id)}
                  >
                    Approve
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleRejectedStatus(donorslist._id)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Donor;
