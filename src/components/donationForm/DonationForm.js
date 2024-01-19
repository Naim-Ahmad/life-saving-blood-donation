"use client";

import { bangladesh } from "@/utils/districs";
import { useState } from "react";

const DonationForm = () => {
  const divisions = Object.keys(bangladesh);
  const [districts, setDistricts] = useState([]);
  const [upzila, setUpzila] = useState([]);
  const [currentDivision, setCurrentDivision] = useState("");

  const handelSelectDistricts = (e) => {
    const selectedDivision = e.target.value;
    setCurrentDivision(selectedDivision);
    setDistricts(Object.keys(bangladesh[selectedDivision]));
  };
  const handelSelectUpzila = (e) => {
    const selectedDistrict = e.target.value;

    setUpzila(bangladesh[currentDivision][selectedDistrict]);
  };

  return (
    <div className="py-10 px-2">
      <form>
        <div className="w-full flex flex-col lg:flex-row lg:items-center justify-start max-md:space-y-2  lg:space-x-3">
          <span className="text-color-gray1 text-xl w-40">Phone Number</span>
          <input
            type="tel"
            required
            placeholder="Phone Number"
            className="lg:w-5/6 h-14 rounded-lg px-5 outline-none border border-color-gray"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 lg:mt-5">
          <div>
            <div className="w-full flex flex-col lg:flex-row lg:items-center justify-start max-md:space-y-2  lg:space-x-3">
              <span className="text-color-gray1 text-xl w-44">Address</span>
              <textarea
                required
                rows={15}
                placeholder="Address"
                className="lg:w-5/6 h-44 rounded-lg px-5 outline-none border border-color-gray resize-none"
              />
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col lg:flex-row lg:items-center justify-start max-md:space-y-2  lg:space-x-3">
              <span className="text-color-gray1 text-xl">Age</span>
              <input
                type="number"
                required
                min={18}
                placeholder="Your Age"
                className="lg:w-5/6 h-14 rounded-lg px-5 outline-none border border-color-gray"
              />
            </div>
            <div className="w-full flex flex-col lg:flex-row lg:items-center justify-start max-md:space-y-2  lg:space-x-3 lg:mt-10">
              <span className="text-color-gray1 text-xl">Blood Group</span>
              <select
                required
                className="lg:w-4/6 h-14 rounded-lg px-5 outline-none border border-color-gray bg-transparent"
              >
                <option>A+</option>
                <option>B+</option>
                <option>O+</option>
                <option>AB+</option>
                <option>A-</option>
                <option>B-</option>
                <option>O-</option>
                <option>AB-</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 lg:mt-5">
          {/* divisions */}
          <div>
            <div className="w-full flex flex-col lg:flex-row lg:items-center justify-start max-md:space-y-2  lg:space-x-3 lg:mt-10">
              <span className="text-color-gray1 text-xl w-40">Division</span>
              <select
                required
                className="lg:w-4/6 h-14 rounded-lg px-5 outline-none border uppercase border-color-gray bg-transparent"
                onChange={handelSelectDistricts}
              >
                <option hidden> select divisions</option>
                {divisions?.map((division, index) => (
                  <option key={index} className="uppercase">
                    {division}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Districts */}
          <div>
            <div className="w-full flex flex-col lg:flex-row lg:items-center justify-start max-md:space-y-2  lg:space-x-3 lg:mt-10">
              <span className="text-color-gray1 text-xl">Districts</span>
              <select
                required
                disabled={districts.length == 0}
                className="lg:w-4/6 h-14 rounded-lg px-5 outline-none border uppercase border-color-gray bg-transparent"
                onChange={handelSelectUpzila}
              >
                <option hidden> select districts</option>
                {districts?.map((district, index) => (
                  <option key={index} className="uppercase">
                    {district}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 lg:mt-5">
          {/* divisions */}
          <div>
            <div className="w-full flex flex-col lg:flex-row lg:items-center justify-start max-md:space-y-2  lg:space-x-3 lg:mt-10">
              <span className="text-color-gray1 text-xl w-40">Upzila</span>
              <select
                disabled={
                  upzila.length == 0 ||
                  districts.length == 0 ||
                  divisions.length == 0
                }
                required
                className="lg:w-4/6 h-14 rounded-lg px-5 outline-none border uppercase border-color-gray bg-transparent"
              >
                <option hidden> select upzila</option>
                {upzila?.map((upzila, index) => (
                  <option key={index} className="uppercase">
                    {upzila}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* time */}
          <div>
            <div className="w-full flex flex-col lg:flex-row lg:items-center justify-start max-md:space-y-2  lg:space-x-3 lg:mt-10">
              <span className="text-color-gray1 text-xl">Last Donate</span>
              <input
                type="date"
                required
                className="lg:w-4/6 h-14 rounded-lg px-5 outline-none border uppercase border-color-gray bg-transparent"
              />
            </div>
          </div>
        </div>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
