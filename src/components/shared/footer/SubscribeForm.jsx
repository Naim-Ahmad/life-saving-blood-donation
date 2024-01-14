"use client"
import { IoIosArrowForward } from "react-icons/io";

export default function SubscribeForm() {

  return (
    <form>
      <header className="text-xl capitalize mb-4">Subscribe to our
        newsletter</header>
      <fieldset className="form-control">
        <div className="join">
          <input type="text" placeholder="Email address" className="input join-item bg-inherit border-b-1 border-b-gray-50" />
          <button className="btn bg-[#FFD2DD] join-item"><IoIosArrowForward size={30}/></button>
        </div>
      </fieldset>
    </form>
  )
}