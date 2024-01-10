import React from "react";
import { Icon } from "@iconify/react";
import Dropdown from "react-multilevel-dropdown";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

function DropdownComp() {
  return (
    <div className="flex gap-3">
      <Dropdown title={
        <span className="flex items-center">
          Academics
          <AssignmentIcon/>
        </span>
      } className="text-black">
        <Dropdown.Item>Item 1
        <Dropdown.Submenu>
            <Dropdown.Item>Subitem 1</Dropdown.Item>
          </Dropdown.Submenu>
        </Dropdown.Item>
        <Dropdown.Item>
          Item 2
          <Dropdown.Submenu>
            <Dropdown.Item>Subitem 1</Dropdown.Item>
          </Dropdown.Submenu>
        </Dropdown.Item>
      </Dropdown>
      
      <Dropdown title={
  <span className="flex items-center">
    Alumni
    <ArrowDropDownIcon />
  </span>
} className="text-black">
        
        <Dropdown.Item>Item 1
        <Dropdown.Submenu>
            <Dropdown.Item>Subitem 1
            <Dropdown.Submenu>
            <Dropdown.Item>Subitem 2
              

            <Dropdown.Submenu>
            <Dropdown.Item>Subitem 1</Dropdown.Item>
            </Dropdown.Submenu>
              

              
              

            </Dropdown.Item>
            <Dropdown.Item>Subitem 1</Dropdown.Item>

            </Dropdown.Submenu>

            </Dropdown.Item>
           

            <Dropdown.Item>Subitem 1
            <Dropdown.Submenu>
            <Dropdown.Item>Subitem 2
              

            <Dropdown.Submenu>
            <Dropdown.Item>Subitem 1</Dropdown.Item>
            </Dropdown.Submenu>
              

              
              

            </Dropdown.Item>
            <Dropdown.Item>Subitem 1
            <Dropdown.Submenu>
            <Dropdown.Item>Subitem 2
              

            <Dropdown.Submenu>
            <Dropdown.Item>Subitem 1</Dropdown.Item>
            </Dropdown.Submenu>
              

              
              

            </Dropdown.Item>
            <Dropdown.Item>Subitem 1</Dropdown.Item>

            </Dropdown.Submenu>
            </Dropdown.Item>

            </Dropdown.Submenu>
            </Dropdown.Item>
            <Dropdown.Item>Subitem 1
            <Dropdown.Submenu>
            <Dropdown.Item>Subitem 2
              

            <Dropdown.Submenu>
            <Dropdown.Item>Subitem 1</Dropdown.Item>
            </Dropdown.Submenu>
              

              
              

            </Dropdown.Item>
            <Dropdown.Item>Subitem 1</Dropdown.Item>

            </Dropdown.Submenu>
            </Dropdown.Item>
            <Dropdown.Item>Subitem 1
            <Dropdown.Submenu>
            <Dropdown.Item>Subitem 2
              

            <Dropdown.Submenu>
            <Dropdown.Item>Subitem 1</Dropdown.Item>
            </Dropdown.Submenu>
              

              
              

            </Dropdown.Item>
            <Dropdown.Item>Subitem 1</Dropdown.Item>

            </Dropdown.Submenu>
            </Dropdown.Item>
          </Dropdown.Submenu>
        </Dropdown.Item>
        <Dropdown.Item>
          Item 2
          <Dropdown.Submenu>
            <Dropdown.Item>Subitem 1
            <Dropdown.Submenu>
            <Dropdown.Item>Subitem 1</Dropdown.Item>
            <Dropdown.Item>Subitem 1</Dropdown.Item>

            </Dropdown.Submenu>

            </Dropdown.Item>
           

            <Dropdown.Item>Subitem 1</Dropdown.Item>
            <Dropdown.Item>Subitem 1</Dropdown.Item>
            <Dropdown.Item>Subitem 1</Dropdown.Item>
          </Dropdown.Submenu>
        </Dropdown.Item>
         
        <Dropdown.Item>Item 1
        <Dropdown.Submenu>
            <Dropdown.Item>Subitem 1
            <Dropdown.Submenu>
            <Dropdown.Item>Subitem 1</Dropdown.Item>
            <Dropdown.Item>Subitem 1</Dropdown.Item>

            </Dropdown.Submenu>

            </Dropdown.Item>
           

            <Dropdown.Item>Subitem 1</Dropdown.Item>
            <Dropdown.Item>Subitem 1</Dropdown.Item>
            <Dropdown.Item>Subitem 1</Dropdown.Item>
          </Dropdown.Submenu>
        </Dropdown.Item>
        <Dropdown.Item>
          Item 2
          <Dropdown.Submenu>
            <Dropdown.Item>Subitem 1
            <Dropdown.Submenu>
            <Dropdown.Item>Subitem 1</Dropdown.Item>
            <Dropdown.Item>Subitem 1</Dropdown.Item>

            </Dropdown.Submenu>

            </Dropdown.Item>
           

            <Dropdown.Item>Subitem 1</Dropdown.Item>
            <Dropdown.Item>Subitem 1</Dropdown.Item>
            <Dropdown.Item>Subitem 1</Dropdown.Item>
          </Dropdown.Submenu>
        </Dropdown.Item>
        
      </Dropdown>
     
      
      <Dropdown title="Campus Life" className="text-black">
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>
          Item 2
          <Dropdown.Submenu>
            <Dropdown.Item>Subitem 1</Dropdown.Item>
          </Dropdown.Submenu>
        </Dropdown.Item>
      </Dropdown>
      <Dropdown title={
        <span className="felx items-center">
          Carrer
         <BuildCircleIcon/>
        </span>
      } className="text-black">
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>
          Item 2
          <Dropdown.Submenu>
            <Dropdown.Item>Subitem 1</Dropdown.Item>
          </Dropdown.Submenu>
        </Dropdown.Item>
      </Dropdown>
      <Dropdown title="The Institute" className="text-black">
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>
          Item 2
          <Dropdown.Submenu>
            <Dropdown.Item>Subitem 1</Dropdown.Item>
          </Dropdown.Submenu>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="top-0 z-50 bg-blue-900 ">
      <div className="flex justify-between items-center px-16 py-2">
        <div className="flex justify-start items-center gap-4 cursor-pointer">
          <Icon icon="ic:round-email" className="text-white h-7 w-7" />
          <Icon icon="il:facebook" className="text-white h-6 w-6" />
          <Icon icon="devicon:twitter" fill="white" className=" h-5 w-5" />
        </div>
        <div className="flex items-center">
          <img
            src="/assets/logos/ausLogo.png"
            alt="Assam University Logo"
            className="w-10  invert"
          />
          <h1 className="text-white text-xl mx-2 font-serif">
            A Central University Established by an Act of Parliament
          </h1>
        </div>
      </div>
      <div className="flex bg-white justify-between px-32 py-2">
        <img
          className="w-36"
          src="/assets/logos/ausHindiLogo.png"
          alt="Assam University Logo"
        />
        <div className="flex items-center gap-3">
          <input
            type="search"
            placeholder="Assam University"
            className="border border-gray-300 rounded pl-10 pr-3 py-2"
          />
          <Icon icon="il:search" fill="black" className="w-6 h-6" />
        </div>
        <DropdownComp />
      </div>
    </nav>
  );
}

export default Navbar;
