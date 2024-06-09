import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./RequestHistory.css";

const RequestHistory = () => {
  const [bloodrequest, setBloodrequest] = useState([]);

  useEffect(() => {
    fetch("https://blood4life-server.vercel.app/bloodRequest")
      .then((res) => res.json())
      .then((data) => {
        setBloodrequest(data);
      });
  }, []);

  if (!bloodrequest?.length) {
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
      <div>
        <h4 className="donor-details mt-3 text-white">Request History</h4>
        <div className="pt-3">
          <Table striped brequestblooded hover className="table-donor-list">
            <thead>
              <tr className="t-head">
                <th className="text-white">Sl</th>
                <th className="text-white">Name</th>
                <th className="text-white">Age</th>
                <th className="text-white">Gender</th>
                <th className="text-white">Blood Group</th>
                <th className="text-white">Address</th>
                <th className="text-white">Reason</th>
                <th className="text-white">Doctor Name</th>
                <th className="text-white">Mobile</th>
                <th className="text-white">Date</th>
                <th className="text-white">Quantity</th>
                <th className="text-white">Status</th>
              </tr>
            </thead>
            <tbody>
              {bloodrequest?.map((requestblood, index) => (
                <tr>
                  <td className="text-white">{index + 1}</td>
                  <td className="text-white">{requestblood?.name}</td>
                  <td className="text-white">{requestblood?.age}</td>
                  <td className="text-white">{requestblood?.gender}</td>
                  <td className="text-white">{requestblood?.bloodGroup}</td>
                  <td className="text-white">{requestblood?.address}</td>
                  <td className="text-white">{requestblood?.reason}</td>
                  <td className="text-white">{requestblood?.doctorName}</td>
                  <td className="text-white">{requestblood?.mobile}</td>
                  <td className="text-white">{requestblood?.requestDate}</td>
                  <td className="text-white">{requestblood?.quantity}</td>
                  <td className="text-white">{requestblood?.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default RequestHistory;
