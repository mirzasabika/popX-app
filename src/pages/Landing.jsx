import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-xl  w-[90%] text-center mt-auto mb-10 bg-white p-6 rounded-xl sm:shadow-md  w-[90%] max-w-sm text-center mt-auto mb-10 min-h-screen justify-between mt-5  ">
      {/* Top Image */}
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/008/517/547/small_2x/welcome-to-team-two-men-shaking-hands-and-looking-at-each-other-with-smile-while-their-coworkers-sitting-at-the-business-meeting-vector.jpg" 
        alt="Top Illustration"
        className="w-90 h-90 pt-14 "
      />

     
      {/* Bottom White Card */}
      <div className="p-6  w-[90%] max-w-sm text-center  mb-10">
        <h2 className="text-2xl font-bold mb-2">Welcome to PopX</h2>
        <p className="text-sm text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <Link
          to="/signup"
          className="block w-full bg-[#6A0DAD] text-white font-medium py-3 rounded-lg mb-3"
        >
          Create Account
        </Link>
        <Link
          to="/login"
          className="block w-full bg-[#E5D4F4] text-[#6A0DAD] font-medium py-3 rounded-lg"
        >
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
}
