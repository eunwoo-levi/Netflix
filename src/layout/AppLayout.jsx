import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link, useNavigate } from "react-router-dom";
import {useState} from "react";
// Outlet은 router 안에 있는 자손들을 가지고 오도록 도와주는 기능을 함!


const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate()
  
  const searchByKeyword=(event)=>{
    event.preventDefault()
    //url바꿔주기
    navigate(`/movies?q=${keyword}`)
    setKeyword("");
  }

  return (
    <div>
      <Navbar expand="lg" className="custom-bg-dark" style={{backgroundColor: "black", height:"7.5vh", paddingLeft:"2rem", paddingRight:"2rem"}}>
        <Container fluid>
          <Navbar.Brand href="#">
            <img src="https://images.ctfassets.net/4cd45et68cgf/4nBnsuPq03diC5eHXnQYx/d48a4664cdc48b6065b0be2d0c7bc388/Netflix-Logo.jpg"
            height="55vh"
            alt="Logo"  
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/" className="custom-nav-link" style={{
                color:"white", textDecorationLine:"none" , padding:"5px"}}>Home</Link>
              <Link to="/movies" className="custom-nav-link" style={{
                color:"white", textDecorationLine:"none" , padding:"5px"}}>Movies</Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event)=>setKeyword(event.target.value)}
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet/>
    </div>
  );
};

export default AppLayout;
