import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import SingleDonation from "./SingleDonation/SingleDonation";
import "./UserDonationHistory.css";
const UserDonationHistory = () => {
  const { user } = useAuth();
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch(`https://blood4life-server.vercel.app/${user.email}/donateBlood`)
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);

  // if (!donations.length) {
  //   return (
  //     <button class="btn btn-primary spner-btn" type="button" disabled>
  //       <span
  //         class="spinner-border spinner-border-sm"
  //         role="status"
  //         aria-hidden="true"
  //       ></span>
  //       Loading...
  //     </button>
  //   );
  // }

  return (
    <div className="donation-history-container">
      <h2 className="text-white">My Donation History</h2>
      <div className="donation-history ">
        <Table striped bordered hover className="table-donor-list" >
          <thead className="text-white">
            <tr className="table-head">
              <th>Name</th>
              <th>Age</th>
              <th>Blood Group</th>
              <th>Disease (if any)</th>
              <th>Donate Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {donations.map((donation) => (
              <SingleDonation
                key={donation._id}
                donation={donation}
              ></SingleDonation>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserDonationHistory;
