import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SocialLogin() {

  return (
    <div className="flex gap-3">
      <p className="btn text-base">
        <FcGoogle size={25}/> Google</p>
      <p className="btn text-base"> <FaFacebook size={25}/>Facebook</p>
    </div>
  )
}