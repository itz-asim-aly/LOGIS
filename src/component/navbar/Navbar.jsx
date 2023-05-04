import React, { useState } from "react";
import "./Navbar.css";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space, Tooltip, message } from "antd";
// import Dropdown from "react-bootstrap/Dropdown";
// import * as mdb from "mdb-ui-kit";
// import { Dropdown } from "rsuite";
// import "rsuite/dist/rsuite.min.css";

const Navba = () => {
  const [nav1, setnav1] = useState(false);
  const ChangeBg = () => {
    if (window.scrollY >= 300) {
      setnav1(true);
    } else {
      setnav1(false);
    }
  };


  const handleButtonClick = (e) => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const items = [
    {
      label: "1st menu item",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "2nd menu item",
      key: "2",
      icon: <UserOutlined />,
    },
    {
      label: "3rd menu item",
      key: "3",
      icon: <UserOutlined />,
      danger: true,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  window.addEventListener("scroll", ChangeBg);
  return (
    <>
      <Navbar className={nav1 ? "nav1 active" : "nav1"} fixed="top">
        <Container Container>
          <Navbar.Brand href="/">
            <strong>Logis</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              id="nav-list"
              style={{ maxHeight: "100px", color: "brown" }}
              navbarScroll
            >
              <NavLink to="/" className="nav-link" id="navactive">
                Home
              </NavLink>
              <NavLink to="/About" className="nav-link" id="navactive">
                About
              </NavLink>

              <NavLink to="/Services" className="nav-link" id="navactive">
                  Services
              </NavLink>
              <NavLink  to="/Pricing" className="nav-link" id="navactive">
                  Pricing
              </NavLink>
              <NavLink to="/Pricing"className="nav-link" id="navactive">
                  Dropdown
              </NavLink>
              <NavLink  to="/Contact"className="nav-link" id="navactive">
                  Contact
              </NavLink>
            </Nav>
            <Form className="d-flex">
              <Button className="nav-btn" id="nav-btn">
                <NavLink to="/GetaQuote" className="nav-link">
                  Get a Quote
                </NavLink>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navba;
