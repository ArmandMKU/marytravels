import React, { Component } from "react";
import { Thumbnail, Grid, Col, Image, Button, Row } from "react-bootstrap";
import "../Styles/services.css";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <Image src="/assets/img/services.jpg" />
          <h2 className="heading">Nos services</h2>
          <h5 className="sub-heading">
            Avec nous, vous trouverez une destination idéale parmi des centaines
            disponibles.
          </h5>
        </div>
        <Grid>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="place">
              <Thumbnail>
                <i class="fas fa-plane-departure fa-7x"></i>
                <h3>BILLETS D'AVION</h3>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>

                <p>
                  <Button bsStyle="primary">More</Button>
                </p>
              </Thumbnail>
            </Col>

            <Col xs={12} sm={3} className="place">
              <Thumbnail>
                <i class="fas fa-ship fa-7x"></i>
                <h3>VOYAGES ET CROISIÈRES</h3>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
                <p>
                  <Button bsStyle="primary">More</Button>
                </p>
              </Thumbnail>
            </Col>

            <Col xs={12} sm={3} className="place">
              <Thumbnail>
                <i class="fas fa-hotel fa-7x"></i>
                <h3>RÉSERVATIONS D'HÔTEL</h3>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
                <p>
                  <Button bsStyle="primary">More</Button>
                </p>
              </Thumbnail>
            </Col>

            <Col xs={12} sm={3} className="place">
              <Thumbnail>
                <i class="fas fa-sun fa-7x"></i>
                <h3>CIRCUITS D'ÉTÉ</h3>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
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
