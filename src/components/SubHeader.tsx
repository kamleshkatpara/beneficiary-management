import React, { useEffect, useState } from "react";
import "../styles/SubHeader.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FlashMessage from "./FlashMessage";

const SubHeader: React.FC = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const [flashMessage, setFlashMessage] = useState<string>("");

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (location.state) {
      const { showAddFlash, showEditFlash, showDeleteFlash } = location.state
      if (showAddFlash) {
        setFlashMessage("Beneficiary added successfully");
      } else if (showEditFlash) {
        setFlashMessage("Beneficiary updated successfully");
      } else if (showDeleteFlash) {
        setFlashMessage("Beneficiary deleted successfully");
      }

      if (showAddFlash || showEditFlash || showDeleteFlash) {
        timer = setTimeout(() => {
          setFlashMessage("");
          navigate(location.pathname, { state: {} });
        }, 3000);

        return () => clearTimeout(timer);
      }
    }
  }, [location, navigate]);

  const renderBreadcrumb = () => {
    if (location.pathname === "/add") {
      return (
        <div className="breadcrumb">
          <Link to="/">Home</Link> / Add Beneficiary
        </div>
      );
    } else if (location.pathname.startsWith("/edit")) {
      return (
        <div className="breadcrumb">
          <Link to="/">Home</Link> / Edit Beneficiary
        </div>
      );
    } else if (location.pathname.startsWith("/view")) {
      return (
        <div className="breadcrumb">
          <Link to="/">Home</Link> / View Beneficiary
        </div>
      );
    } else {
      return (
        <div className="breadcrumb">
          <Link to="/">Home</Link> / List of beneficiaries
        </div>
      );
    }
  };

  const renderAddButton = () => {
    if (
      location.pathname !== "/add" &&
      !location.pathname.startsWith("/edit") &&
      !location.pathname.startsWith("/view")
    ) {
      return (
        <Link to="/add" className="add-btn">
          Add Beneficiary
        </Link>
      );
    }
  };

  const renderBackButton = () => {
    if (
      location.pathname === "/add" ||
      location.pathname.startsWith("/edit") ||
      location.pathname.startsWith("/view")
    ) {
      return (
        <Link to="/" className="back-btn">
          Back
        </Link>
      );
    }
  };

  return (
    <>
      {flashMessage && <FlashMessage message={flashMessage} />}
      {flashMessage && <div className="overlay" />}
      <div className="subheader">
        {renderBreadcrumb()}
        {renderAddButton()}
        {renderBackButton()}
      </div>
    </>
  );
}

export default SubHeader;
