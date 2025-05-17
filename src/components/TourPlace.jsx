import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {
  Thumbnail,
  Grid,
  Col,
  // Image,
  Button,
  Row,
} from "react-bootstrap";
import "../Styles/home.css";
export default class TourPlace extends Component {
  render() {
    return (
      <div>
        {/* <div className="content-wrapper">
          <Image src="/assets/img/services.jpg" />
          <h2 className="heading">Nos destinations</h2>
          <h5 className="sub-heading">
            Avec nous, vous trouverez une destination idéale parmi des centaines
            disponibles.
          </h5>
        </div> */}
        <Grid>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="place">
              <Thumbnail src="assets/img/places/china-1.jpg" alt="242x200">
                <h3>Chine</h3>
                <p>
                  Madrid, Barcelona • 9 days Start your Eastern Europe trip from
                  Berlin – one of the most attractive European cities. Head out
                  to Warsaw – the capital of Poland, where you’ll be able to
                  take a guided tour through the city’s places of interests and
                  museums.{" "}
                </p>
                <p>
                  <Button bsStyle="primary">More</Button>
                </p>
              </Thumbnail>
            </Col>

            <Col xs={12} sm={4} className="place">
              <Thumbnail src="assets/img/places/dubai-5.jpeg" alt="242x200">
                <h3>Dubai</h3>
                <p>
                  England, Scotland, Wales • 13 days Start your Eastern Europe
                  trip from Berlin – one of the most attractive European cities.
                  Head out to Warsaw – the capital of Poland, where you’ll be
                  able to take a guided tour through the city’s places of
                  interests and museums.{" "}
                </p>
                <p>
                  <Button bsStyle="primary">More</Button>
                </p>
              </Thumbnail>
            </Col>

            <Col xs={12} sm={4} className="place">
              <Thumbnail src="assets/img/places/turkey-3.jpg" alt="242x200">
                <h3>Turkey</h3>
                <p>
                  Istanbul, Antalya, Ephesus • 8 days Start your Eastern Europe
                  trip from Berlin – one of the most attractive European cities.
                  Head out to Warsaw – the capital of Poland, where you’ll be
                  able to take a guided tour through the city’s places of
                  interests and museums.{" "}
                </p>
                <p>
                  <Button bsStyle="primary">More</Button>
                </p>
              </Thumbnail>
            </Col>
          </Row>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="place">
              <Thumbnail src="assets/img/places/Paris-7.jpg" alt="242x200">
                <h3>France</h3>
                <p>
                  Madrid, Barcelona • 9 days Start your Eastern Europe trip from
                  Berlin – one of the most attractive European cities. Head out
                  to Warsaw – the capital of Poland, where you’ll be able to
                  take a guided tour through the city’s places of interests and
                  museums.{" "}
                </p>
                <p>
                  <Button bsStyle="primary">More</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={12} sm={4} className="place">
              <Thumbnail
                src="assets/img/places/marrakech-maroc.jpg"
                alt="242x200"
              >
                <h3>Maroc</h3>
                <p>
                  Madrid, Barcelona • 9 days Start your Eastern Europe trip from
                  Berlin – one of the most attractive European cities. Head out
                  to Warsaw – the capital of Poland, where you’ll be able to
                  take a guided tour through the city’s places of interests and
                  museums.{" "}
                </p>
                <p>
                  <Button bsStyle="primary">More</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={12} sm={4} className="place">
              <Thumbnail
                src="assets/img/places/south-africa-2.webp"
                alt="242x200"
              >
                <h3>Afrique du Sud</h3>
                <p>
                  Madrid, Barcelona • 9 days Start your Eastern Europe trip from
                  Berlin – one of the most attractive European cities. Head out
                  to Warsaw – the capital of Poland, where you’ll be able to
                  take a guided tour through the city’s places of interests and
                  museums.{" "}
                </p>
                <p>
                  <Button bsStyle="primary">More</Button>
                </p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
