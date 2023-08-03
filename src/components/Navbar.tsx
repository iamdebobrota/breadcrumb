import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-gray-300 p-2 sticky">
      <ul className="flex justify-around ">
        <li className="flex gap-12">
        <Link to="/">Breadcamp</Link>
        </li>
        <li className="flex gap-4">
          <img className="h-7 w-7 object-cover rounded-full"
           src="https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=1060&t=st=1691045623~exp=1691046223~hmac=a6a4072f4bb17860c9fa4328847e3f210eba813508b8075e0b221156c6b5f0b9" alt="img" />
          <Link to="login" >Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
