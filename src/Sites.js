import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Nearby from "./nearby";
import Review from "./Review";
import { useSelector } from "react-redux";

function Sites() {
  const params = useParams();
  console.log(params.id);

  const { placeList } = useSelector((state) => state.reducer1);
  console.log(placeList);

  useEffect(() => {}, []);

  const siteData = placeList.find((i) => i.id == params.id);
  console.log(siteData);

  return (
    <>
      {siteData ? (
        <Row>
          <Col md={6} lg={6}>
            <img
              className="w-75 container p-2 mt-5 ms-5 me-3"
              style={{ height: "500px" }}
              src={siteData.image}
            />
          </Col>
          <Col
            md={6}
            lg={6}
            className="mt-5 mb-2 fs-3 d-flex align-items-center justify-content-start"
          >
            <ListGroup>
              <ListGroup.Item>
                <h1>{siteData.name}</h1>
              </ListGroup.Item>
              <ListGroup.Item>
                Address : <strong>{siteData.address}</strong>
              </ListGroup.Item>
              <ListGroup.Item>Package : {siteData.package}</ListGroup.Item>
              <ListGroup.Item>
                Location : <b>{siteData.location}</b>
              </ListGroup.Item>
              <ListGroup.Item>
                <Nearby nearbyPlaces={siteData.near_by_places} />
                <Review reviewList={siteData.reviews} />
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      ) : (
        ""
      )}
    </>
  );
}

export default Sites;
