import React from "react";
import "./User.css";
import Account from "../../../Assets/Account.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const User = () => {
  const [username, setusername] = useState("Kunal Singla");
  const [userid, setuserid] = useState("12140960");
  const [userphone, setuserphone] = useState("+91 79732-03702");
  const [useremail, setuseremail] = useState("kunalsingla@iitbhilai.ac.in");
  const [useraddres, setuseraddress] = useState(
    "G-326,Hostel Kanhar, IIT Bhilai"
  );
  const [userpassword, setuserpassword] = useState("ABCD");
  // const nav = useNavigate();
  // function Update(username, userid, userphone, useremail, useraddres) {
  //   console.log("da");
  //   nav("updetails", {
  //     state: { username, userid, userphone, useremail, useraddres },
  //   });
  // }
  return (
    <div className="UserU">
      <div className="User-BoxU">
        <div className="Image-UserU">
          <img src={Account} alt="Account" />
        </div>
        <div className="Details-UserU">
          <div className="Detail-DivU">
            <div className="Name-UserU">{username}</div>
            <div className="Id-UserU">{userid}</div>
          </div>
          <div className="Detail-UserU"> {userphone}</div>
          <div className="Detail-UserU">{useremail}</div>
          <div className="Detail-UserU">{useraddres}</div>
        </div>
        <div className="Button-User">
          <NavLink
            to="updetails"
            state={{
              usersname: username,
              usersid: userid,
              usersphone: userphone,
              usersemail: useremail,
              usersaddres: useraddres,
            }}
          >
            <button>Update Details</button>
          </NavLink>
          <NavLink
            to="uppassword"
            state={{
              userspassword: userpassword,
            }}
          >
            <button>Update Password</button>{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default User;
