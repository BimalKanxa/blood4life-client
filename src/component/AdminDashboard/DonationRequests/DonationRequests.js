import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Swal from "sweetalert2";
import './DonationRequests.css'

const DonationRequests = () => {
  const [donationRequest, setDonationRequest] = useState([]);

  useEffect(() => {
    fetch("https://blood4life-server.vercel.app/bloods")
      .then((res) => res.json())
      .then((data) => {
        // const AproveRequestData =data.filter(data =>data.status ==="Approved")
        setDonationRequest(data);
      });
  }, [donationRequest]);
  // update approved status
  const handleApproved = (id) => {
    axios
      .put(`https://blood4life-server.vercel.app/bloods/${id}`, {
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
  // // update rejected status
  const handleRejected = (id) => {
    axios
      .put(`https://blood4life-server.vercel.app/bloods/${id}`, {
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
  if (!donationRequest?.length) {
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
  return (
    <div>
      <button class="add-data-button">Add New Data</button>
      <div>
        <h4 className="donor-details mt-3 text-white">Blood Donation</h4>
        <div className="pt-3">
          <Table striped brequestblooded hover className="table-request-list">
            <thead>
              <tr className="t-head">
                <th className="text-white">Sl</th>
                <th className="text-white">Name</th>
                <th className="text-white">Age</th>
                <th className="text-white">Gender</th>
                <th className="text-white">Blood Group</th>
                <th className="text-white">Address</th>
                <th className="text-white">Mobile</th>
                <th className="text-white">Donate Date</th> 
                <th className="text-white">Status</th>
                <th className="text-white">Action</th>
              </tr>
            </thead>
            <tbody >
              {donationRequest?.map((requestblood, index) => (
                <tr>
                  <td  className="text-white" style={{fontSize:"17px"}}>{index + 1}</td>
                  <td  className="text-white" style={{fontSize:"17px"}}>{requestblood?.name}</td>
                  <td  className="text-white" style={{fontSize:"17px"}}>{requestblood?.age}</td>
                  <td  className="text-white" style={{fontSize:"17px"}}>{requestblood?.gender}</td>
                  <td  className="text-white" style={{fontSize:"17px"}}>{requestblood?.bloodGroup}</td>
                  <td  className="text-white" style={{fontSize:"17px"}}>{requestblood?.address}</td>
                  <td  className="text-white" style={{fontSize:"17px"}}>{requestblood?.mobile}</td>
                  <td  className="text-white" style={{fontSize:"17px"}}>{requestblood?.DonateDate}</td>
                  <td  className="text-white" style={{fontSize:"17px"}}>{requestblood?.status}</td>
                  <td>
                    <button
                      className="btn btn-success btn-sm mx-1"
                      onClick={() => handleApproved(requestblood._id)}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRejected(requestblood._id)}
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
    </div>
  );
};

export default DonationRequests;
