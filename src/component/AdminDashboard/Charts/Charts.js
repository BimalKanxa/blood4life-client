import React, { useEffect, useState } from "react";
import "./Charts.css";

const Charts = () => {
  const [apositive, setApositive] = useState([]);
  const [bpositive, setBpositive] = useState([]);
  const [opositive, setOpositive] = useState([]);
  const [abpositive, setAbpositive] = useState([]);

  const [anegative, setAnegative] = useState([]);
  const [bnegative, setBnegative] = useState([]);
  const [onegative, setOnegative] = useState([]);
  const [abnegative, setAbnegative] = useState([]);

  //////load data//
  useEffect(() => {
    fetch("https://blood4life-server.vercel.app/donateBlood")
      .then((res) => res.json())
      .then((approve) => {
        const data = approve.filter((data) => data?.status === "Approved");

        const aPositive = data.filter((d) => d?.bloodGroup === "A+");
        setApositive(aPositive);
        const singlebloodgroup = data.filter((d) => d?.bloodGroup === "B+");
        setBpositive(singlebloodgroup);
        const oposi = data.filter((d) => d?.bloodGroup === "O+");
        setOpositive(oposi);
        const abposi = data.filter((d) => d.bloodGroup === "AB+");
        setAbpositive(abposi);

        const Anegative = data.filter((d) => d?.bloodGroup === "A-");
        setAnegative(Anegative);

        const Bnegative = data.filter((d) => d?.bloodGroup === "B-");
        setBnegative(Bnegative);

        const Onegativea = data.filter((d) => d?.bloodGroup === "O-");
        setOnegative(Onegativea);

        const Abnegative = data.filter((d) => d?.bloodGroup === "AB-");
        setAbnegative(Abnegative);
      });
  }, []);
  ////load data///

  return (
    <div style={{color:'white'}}>
      <h2>Bloods in stock</h2>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 g-lg-4">
        <div className="col">
          <div className="col stock-card">
            <div className="p-1">
              <i class="fas fa-burn blood-icon"></i>
              <span className="blood"> &nbsp;A+</span>
              <p className="count text-white">
                In Stock : <span className="stock text-white">{apositive.length} </span>
                Bag(s)
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="col stock-card">
            <div className="p-1">
              <i class="fas fa-burn blood-icon"></i>
              <span className="blood"> &nbsp;B+</span>
              <p className="count text-white">
                In Stock : <span className="stock text-white">{bpositive.length} </span>
                Bag(s)
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="col stock-card">
            <div className="p-1">
              <i class="fas fa-burn blood-icon"></i>
              <span className="blood"> &nbsp;O+</span>
              <p className="count text-white">
                In Stock : <span className="stock text-white">{opositive.length} </span>
                Bag(s)
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="col stock-card">
            <div className="p-1">
              <i class="fas fa-burn blood-icon"></i>
              <span className="blood"> &nbsp;AB+</span>
              <p className="count text-white">
                In Stock : <span className="stock text-white">{abpositive.length} </span>
                Bag(s)
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="col stock-card">
            <div className="p-1">
              <i class="fas fa-burn blood-icon"></i>
              <span className="blood"> &nbsp;A-</span>
              <p className="count text-white">
                In Stock : <span className="stock text-white">{anegative.length} </span>
                Bag(s)
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="col stock-card">
            <div className="p-1">
              <i class="fas fa-burn blood-icon"></i>
              <span className="blood"> &nbsp;B-</span>
              <p className="count text-white">
                In Stock : <span className="stock text-white">{bnegative.length} </span>
                Bag(s)
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="col stock-card">
            <div className="p-1">
              <i class="fas fa-burn blood-icon"></i>
              <span className="blood"> &nbsp;O-</span>
              <p className="count text-white">
                In Stock : <span className="stock text-white">{onegative.length} </span>
                Bag(s)
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="col stock-card">
            <div className="p-1">
              <i class="fas fa-burn blood-icon"></i>
              <span className="blood" style={{color:'white'}}> &nbsp;AB-</span>
              <p className="count" style={{color:'white'}}>
                In Stock : <span className="stock" style={{color:'white'}}>{abnegative.length} </span>
                Bag(s)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
