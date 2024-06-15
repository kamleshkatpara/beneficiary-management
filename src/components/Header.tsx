import React from "react";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  return (
    <div className="header">
      <h1>
        <FontAwesomeIcon
          icon={faBarsStaggered}
          style={{ rotate: "90deg", marginRight: "20px" }}
        />
        Manage Beneficiary
      </h1>
      <FontAwesomeIcon icon={faCircleUser} className="user-icon" />
    </div>
  );
}

export default Header;
