import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { GoHomeFill } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { GiArcher } from "react-icons/gi";
import { FaFilePowerpoint } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
function Navbar() {
  return (
    <>
      <header>
        <nav className=" w-11/12  m-auto flex justify-between items-center text-white  ">
          <Name className=" text-3xl font-semibold ">Aditya</Name>
          <Navitems>
            <Link
              to="home"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-100}
              duration={500}
            >
              <GoHomeFill className="hidden " />
              <li className="list-none  cursor-pointer flex items-center gap-1">
                Home
              </li>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-100}
              duration={500}
            >
              <FaUser className="hidden" />{" "}
              <li className="list-none  cursor-pointer"> About</li>
            </Link>
            <Link
              to="skill"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-100}
              duration={500}
            >
              <GiArcher className="hidden" />
              <li className="list-none  cursor-pointer">Skills</li>
            </Link>
            <Link
              to="project"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={500}
            >
              <FaFilePowerpoint className="hidden" />
              <li className="list-none  cursor-pointer ">Project</li>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
            >
              <MdContactPhone className="hidden" />
              <li className="list-none  cursor-pointer "> Contact</li>
            </Link>
          </Navitems>
        </nav>
      </header>
    </>
  );
}

export default Navbar;

const Name = styled.h1`
margin-right: 5rem;
  @media screen and (max-width: 600px) {
    display: none;

  }
`;
const Navitems = styled.ul`
  display: flex;
  gap: 2rem;

  li {
    color: var(--text-color);
    position: relative;
  }
  li:hover {
    color: white;
  }
  li::before {
    position: absolute;
    content: "";
    bottom: -5px;
    width: 0%;
    height: 3px;
    background-color: var(--theme);
    transition: all 0.5s ease-in-out;
  }
  li:hover::before {
    width: 105%;
  }
  .hidden {
    font-size: large;
    cursor: pointer;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    li {
      display: none;
    }
    .hidden {
      display: inline-block;

    }
    .hidden:hover {
      color:red;
    }
  }
`;
