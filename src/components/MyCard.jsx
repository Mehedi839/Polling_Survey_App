import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationDetail } from "./localstorage";
import { key } from "localforage";

const MyCard = () => {
  const [donations, setDonations] = useState([]);
  const storedDonateIds = getStoredDonationDetail();

  useEffect(() => {
    const fetchDonations = async () => {
      const response = await fetch("data.json");
      const data = await response.json();
      setDonations(data);
    };

    fetchDonations();
  }, []); 


  const displayCard = donations.filter((donation) => storedDonateIds.includes(donation.id));

  return (
    <div>
      <h1 className="text-5xl text-center text-red-500 mt-6">My Card List</h1>
      <div className="grid lg:grid-cols-3 gap-6 my-12 w-[90%] mx-auto">
        {displayCard.map((donation) => (
          <div key={donation.id} className="card card-compact  bg-base-100 shadow-xl">
          <figure><img src={donation.image} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title"><b>Name</b> {donation.name}</h2>
            <p className="text-lg"><b>Brand</b> {donation.brand}</p>
            <h2 className="text-lg"><b>Type</b> {donation.type}</h2>
            <h2 className="text-lg"><b>Price</b> ${donation.price}</h2>
            <p className="text-lg"> <b>Description</b> {donation.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default MyCard;
