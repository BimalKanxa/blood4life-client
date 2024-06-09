import React, { useEffect, useState } from "react";

const SingleDonation = (props) => {
  const { name, age, bloodGroup, disease, donateDate, status } = props.donation;

  return (
    <tr >
      <td className="text-white">{name}</td>
      <td className="text-white">{age}</td>
      <td className="text-white">{bloodGroup}</td>
      <td className="text-white">{disease}</td>
      <td className="text-white">{donateDate}</td>
      <td className="text-white">{status}</td>
    </tr>
  );
};

export default SingleDonation;
