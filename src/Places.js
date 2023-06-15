import React, { useEffect, useState } from "react";
import "./Places.css";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "./actions/restActions";
import ImageSlider from "./ImageSlider";
import About from "./About";


function Places() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList);
  }, []);

  const { placeList } = useSelector((state) => state.reducer1);

  return (
    <>
    <ImageSlider />
    <About />

    <Row className="ms-4 mb-2">
      {placeList.map((place) => (
        <Col id="c1" className="p-2" md={6} lg={4}>
          <Link id="link" to={`/viewSite/${place.id}`}>
            <Card
              className="ms-4 mt-5 me-5"
              style={{ width: "18rem", height: "400px" }}
            >
              <Card.Img
                variant="top"
                style={{ height: "300px" }}
                src={place.image}
              />
              <Card.Body>
                <Card.Title>{place.name}</Card.Title>
                <Card.Text style={{ color: "black" }}>
                  {place.address}
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>  
    </>
 
  );
}

export default Places;
