import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { GrTwitter } from "react-icons/gr";
import team1 from "../assets/images/team1.jpg";
import team2 from "../assets/images/team2.jpg";
import team3 from "../assets/images/team3.jpg";
import team4 from "../assets/images/team4.jpg";
const TeamMember = () => {
  return (
    <div className="px-12 mx-auto grid grid-cols-4 gap-8">
      {data.map((d) => (
        <div key={d.id}>
          <img className="rounded-lg" src={d.img} alt="" />
          <h3 className="text-xl text-primary mt-4 font-semibold">{d.name}</h3>
          <h4 className="text-xl text-secondary my-2 font-semibold">
            {d.profession}
          </h4>
          <ul className="flex pl-2 mt-4">
            <li className="social-item">
              <FiInstagram className="social-icon" />
            </li>
            <li className="social-item">
              <GrTwitter className="social-icon" />
            </li>
            <li className="social-item">
              <FaLinkedinIn className="social-icon" />
            </li>
            <li className="social-item">
              <FaFacebookF className="social-icon" />
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

const data = [
  {
    id: 1,
    name: "John Doe",
    profession: "Co Founder",
    img: team1,
  },
  {
    id: 2,
    name: "Tim Baker",
    profession: "Marketing Expert",
    img: team2,
  },
  {
    id: 3,
    name: "Demi Mason",
    profession: "Social Media Expert",
    img: team3,
  },
  {
    id: 4,
    name: "Robert Bozo",
    profession: "Development",
    img: team4,
  },
];
export default TeamMember;
