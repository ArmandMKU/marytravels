import React, { Component } from "react";
import { Grid, Col, Image, Row } from "react-bootstrap";
import FormContact from "./FormContact";

import "../Styles/contact.css";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <Image src="/assets/img/contact.jpg" />
          <h2 className="heading">Nous Contacter</h2>
        </div>
        <Grid>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4}>
              <h3>Contactez Notre Agence</h3>
              <p>
                At Travel Agency we want to make sure that your trip is
                everything you could possibly dream of. Whether you want
                inspiration and guidance in planning your next adventure or need
                help with an existing booking, our travel experts are here to
                help. Send us an email or give our team a call to book your
                flights, plan your adventure or get help with any problems you
                encounter along the way. Or if you’re in New York, you can visit
                us in store to speak face to face. Our assistance doesn’t end
                when you take off either. Our Global Travel Help team are on
                hand to assist with any issues you may have.
              </p>
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
              <h3>Nos contacts </h3>
              <ul className=" contact-list fa-ul">
                <li>
                  <i class="fas fa-map-marker-alt"></i> 100, rue Mouleke,
                  Croisement Av. des Chars, Ouenze, Brazzaville, Congo
                </li>
                <li>
                  <i class="fas fa-mobile"></i> +242 06 612 25 65
                </li>
                <li>
                  <i class="fas fa-mobile-alt"></i> +242 05 523 23 00
                </li>
                <li>
                  <i class="far fa-envelope"></i> christparchardb@gmail.com
                </li>
              </ul>
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
              <h3>Des questions ?</h3>
              <FormContact />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
