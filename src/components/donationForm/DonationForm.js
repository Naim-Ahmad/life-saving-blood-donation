"use client";

const DonationForm = () => {
  return (
    <div className="py-10 px-2">
      <form>
        <div className="w-full flex flex-col lg:flex-row lg:items-center justify-start max-md:space-y-2  lg:space-x-3">
          <span className="text-color-gray1 text-xl w-40">Phone Number</span>
          <input
            type="tel"
            placeholder="Phone Number"
            className="lg:w-5/6 h-14 rounded-lg px-5 outline-none border border-color-gray"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 lg:mt-5">
          <div>
            <div className="w-full flex flex-col lg:flex-row lg:items-center justify-start max-md:space-y-2  lg:space-x-3">
              <span className="text-color-gray1 text-xl w-44">Address</span>
              <textarea
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
                min={18}
                placeholder="Your Age"
                className="lg:w-5/6 h-14 rounded-lg px-5 outline-none border border-color-gray"
              />
            </div>
            <div className="w-full flex flex-col lg:flex-row lg:items-center justify-start max-md:space-y-2  lg:space-x-3 lg:mt-10">
              <span className="text-color-gray1 text-xl">Blood Group</span>
              <select className="lg:w-4/6 h-14 rounded-lg px-5 outline-none border border-color-gray bg-transparent">
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
      </form>
    </div>
  );
};

export default DonationForm;
