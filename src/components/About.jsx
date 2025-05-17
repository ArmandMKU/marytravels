import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {
  Grid,
  Col,
  Image,
  // Button,
  Row,
} from "react-bootstrap";
import "../Styles/about.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <Image src="/assets/img/about.jpg" />
          <h2 className="heading">Qui sommes-nous? </h2>
        </div>
        <Grid>
          <Row className="show-grid text-center">
            <Col xs={12} sm={6}>
              <Image
                src="/assets/mary-travels-promo.jpg"
                style={{ width: 400, height: "auto" }}
              />{" "}
            </Col>
            <Col xs={12} sm={6}>
              <div className="banner text-center">
                <h2>La meilleure agence que vous pouvez choisir</h2>
                <p>
                  Nous nous engageons à offrir des services de voyage de la plus
                  haute qualité, en combinant notre énergie et notre
                  enthousiasme avec des années d'expérience.
                </p>
              </div>
            </Col>

            <Col xs={12} sm={6}>
              {/* <Col xs={12} sm={8} smOffset={2}></Col> */}
              <Image
                src="/assets/img/travel-12.webp"
                className="about-pc"
                rounded
              />
              <h3>Voyages. Circuits. Aventure.</h3>

              <p>
                Nous nous engageons à offrir des services de voyage de la plus
                haute qualité, alliant notre énergie et notre enthousiasme à nos
                années d'expérience. Notre plus grande satisfaction est de
                servir un grand nombre de clients satisfaits qui ont goûté aux
                joies et à l'inspiration du voyage.
              </p>

              <p>
                Behaviour we improving at something to. Evil true high lady roof
                men had open. To projection considered it precaution an
                melancholy or. Wound young you thing worse along being ham.
                Dissimilar of favourable solicitude if sympathize middletons at.
                Forfeited up if disposing perfectly in an eagerness perceived
                necessary. Belonging sir curiosity discovery extremity yet
                forfeited prevailed own off. Travelling by introduced of mr
                terminated. Knew as miss my high hope quit. In curiosity
                shameless dependent knowledge up. Whether article spirits new
                her covered hastily sitting her. Money witty books nor son add.
                Chicken age had evening believe but proceed pretend mrs. At
                missed advice my it no sister. Miss told ham dull knew see she
                spot near can. Spirit her entire her called.
              </p>
            </Col>
          </Row>
        </Grid>
        <br />
        <Grid fluid className="team">
          <h1 className="text-center">
            {" "}
            Confiez votre projet de voyage à notre Equipe
          </h1>
          <h5 className="text-center">
            Une équipe expérimentée de passionnés de voyages
          </h5>
          <Grid>
            <Row className="show-grid text-center">
              <Col xs={12} sm={4} className="person-wrapper">
                <Image
                  src="/assets/img/avatar2.jpg"
                  circle
                  className="profile-pic"
                />
                <h3>Christ Parchard Bimoni</h3>
                <h5>Fondateur et Directeur</h5>
                <p>
                  “Nina was an excellent Travel Agent for us and considered our
                  unique needs as she planned our itinerary. Every suggestion
                  she made was excellent.”{" "}
                </p>
              </Col>

              <Col xs={12} sm={4} className="person-wrapper">
                <Image
                  src="/assets/img/avatar1.jpg"
                  circle
                  className="profile-pic"
                />
                <h3>Serge Tchicaya</h3>
                <h5>Senior Travel Agent</h5>
                <p>
                  “I would highly recommend Andy because everything on my month
                  long trip to New Zealand, Australia and French Polynesia went
                  without a hitch.”
                </p>
              </Col>

              <Col xs={12} sm={4} className="person-wrapper">
                <Image
                  src="/assets/img/avatar3.jpg"
                  circle
                  className="profile-pic"
                />
                <h3>Sandra Iloye</h3>
                <h5>Hotel Agent</h5>
                <p>
                  “I would highly recommend Andy because everything on my month
                  long trip to New Zealand, Australia and French Polynesia went
                  without a hitch.”{" "}
                </p>
              </Col>
            </Row>
          </Grid>
        </Grid>
      </div>
    );
  }
}
