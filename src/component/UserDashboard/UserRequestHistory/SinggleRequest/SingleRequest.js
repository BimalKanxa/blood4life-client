import React, { useEffect, useState } from "react";

const SingleRequest = (props) => {
  const {
    name,
    age,
    bloodGroup,
    reason,
    doctorName,
    requestDate,
    status,
    quantity,
    address,
  } = props.request;

  return (
    <tr>
      <td className="text-white">{name}</td>
      <td className="text-white">{age}</td>
      <td className="text-white">{reason}</td>
      <td className="text-white">{quantity}</td>
      <td className="text-white">{doctorName}</td>
      <td className="text-white">{requestDate}</td>
      <td className="text-white">{bloodGroup}</td>
      <td className="text-white">{address}</td>
      <td className="text-white">{status}</td>
    </tr>
  );
};

export default SingleRequest;
