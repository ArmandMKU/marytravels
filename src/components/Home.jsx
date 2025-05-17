import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {
  Jumbotron,
  // Carousel,
  Grid,
  Col,
  // Thumbnail,
  Image,
  // Button,
  Row,
  Table,
} from "react-bootstrap";
import TourPlace from "./TourPlace";
import Services from "./Services";
// import Services from "./ServicesCopy";
import About from "./About";
import "../Styles/home.css";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Grid>
            <Jumbotron>
              {/* <h2>Enjoy Your Dream Vacation</h2>
              <h3>
                Travel to the any corner of the world, without going around in
                circles.
              </h3> */}
              {/* <Link to="/services">
                <Button bsStyle="primary">More</Button>
              </Link> */}
            </Jumbotron>
          </Grid>
        </div>
        <br />
        <Grid>
          <TourPlace />

          <Services />

          <div>
            <h2>Compagnies aériennes partenaires</h2>
            <br />
            {/* <Col xs={12} sm={3} className="place">
              <Thumbnail>
                <i class="fas fa-plane-departure fa-7x"></i>
                <h3>AIR TICKETS</h3>
              </Thumbnail>
            </Col> */}
            <Table striped bordered hover>
              <thead></thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="assets/img/air_france.png"
                      alt="Air France"
                      height={150}
                      width={150}
                    />{" "}
                  </td>
                  <td>
                    <img
                      src="assets/img/ethiopian_airlines.png"
                      alt="Ethiopian"
                      height={150}
                      width={150}
                    />{" "}
                  </td>
                  <td>
                    <img
                      src="assets/img/turkish_airlines.png"
                      alt="Turkish airline"
                      height={150}
                      width={150}
                    />
                  </td>
                  <td>
                    <img
                      src="assets/img/royal_air_maroc.jpg"
                      alt="Royal Air Maroc"
                      height={150}
                      width={150}
                    />
                  </td>
                  <td>
                    <img
                      src="assets/img/South_African_ Airways.jpg"
                      alt="South African Airways"
                      height={150}
                      width={150}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="assets/img/afrijet.jpg"
                      alt="Afrijet"
                      height={150}
                      width={150}
                    />
                  </td>
                  <td>
                    <img
                      src="assets/img/TAAG.jpg"
                      alt="TAAG"
                      height={150}
                      width={150}
                    />
                  </td>
                  <td>
                    <img
                      src="assets/img/camair.jpg"
                      alt="Camair"
                      height={150}
                      width={150}
                    />
                  </td>
                  <td>
                    <img
                      src="assets/img/TAC.jpg"
                      alt="TAC"
                      height={150}
                      width={150}
                    />
                  </td>
                  <td>
                    <img
                      src="assets/img/canadian_airways_congo.jpg"
                      alt="Canadian Airways Congo.jpg"
                      height={150}
                      width={150}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="assets/img/ECair.jpg"
                      alt="ECair"
                      height={150}
                      width={150}
                    />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div>
            <h2>Location de voitures</h2>
          </div>
          <div class="container">
            <br />
            {/* <h4>
              Bootstrap 4 and CCS3 Product Cards with Transition -
              Techhowdy(demonguru18) - Lyoid Lopes
            </h4> */}
            <br />
            <div class="row" id="ads">
              {/* <!-- Category Card --> */}
              <div class="col-md-4">
                <div class="card rounded">
                  <div class="card-image">
                    <span class="card-notify-badge">Low KMS</span>
                    <span class="card-notify-year">2018</span>
                    <img
                      class="img-fluid"
                      src="https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC011A021001.jpg&width=440&height=262"
                      alt="Alternate Text"
                      style={{ width: 300, height: "auto" }}
                    />
                  </div>
                  <div class="card-image-overlay m-auto">
                    <span class="card-detail-badge">Used</span>
                    <span class="card-detail-badge">$28,000.00</span>
                    <span class="card-detail-badge">13000 Kms</span>
                  </div>
                  <div class="card-body text-center">
                    <div class="ad-title m-auto">
                      <h5>Honda Accord LX</h5>
                    </div>
                    <a class="ad-btn" href="https://www.autotrader.co.uk">
                      View
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card rounded">
                  <div class="card-image">
                    <span class="card-notify-badge">Fully-Loaded</span>
                    <span class="card-notify-year">2017</span>
                    <img
                      class="img-fluid"
                      src="https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=CAC80HOC021B121001.jpg&width=440&height=262"
                      alt="Alternate Text"
                      style={{ width: 300, height: "auto" }}
                    />
                  </div>
                  <div class="card-image-overlay m-auto">
                    <span class="card-detail-badge">Used</span>
                    <span class="card-detail-badge">$28,000.00</span>
                    <span class="card-detail-badge">13000 Kms</span>
                  </div>
                  <div class="card-body text-center">
                    <div class="ad-title m-auto">
                      <h5>Honda CIVIC HATCHBACK LS</h5>
                    </div>
                    <a class="ad-btn" href="https://www.autotrader.co.uk">
                      View
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card rounded">
                  <div class="card-image">
                    <span class="card-notify-badge">Price Reduced</span>
                    <span class="card-notify-year">2018</span>
                    <img
                      class="img-fluid"
                      src="https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262"
                      alt="Alternate Text"
                      style={{ width: 300, height: "auto" }}
                    />
                  </div>
                  <div class="card-image-overlay m-auto">
                    <span class="card-detail-badge">Used</span>
                    <span class="card-detail-badge">$22,000.00</span>
                    <span class="card-detail-badge">8000 Kms</span>
                  </div>
                  <div class="card-body text-center">
                    <div class="ad-title m-auto">
                      <h5>Honda Accord Hybrid LT</h5>
                    </div>
                    <a class="ad-btn" href="https://www.autotrader.co.uk">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2>Transfert Argent</h2>
            <br />
            <Table striped bordered hover>
              <thead></thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="assets/img/mobile money/IMG-20241005-WA0013.jpg"
                      alt="Mobile Money"
                      height={150}
                      width={150}
                    />{" "}
                  </td>
                  <td>
                    <img
                      src="assets/img/mobile money/IMG-20241005-WA0012.jpg"
                      alt="Mobile Money"
                      height={150}
                      width={150}
                    />
                  </td>
                  <td>
                    <img
                      src="assets/img/mobile money/mtn_mobile_money.jpg"
                      alt="Mobile Money"
                      height={150}
                      width={150}
                    />
                  </td>
                  <td>
                    <img
                      src="assets/img/mobile money/airtel_mobile_money.png"
                      alt="Mobile Money"
                      height={150}
                      width={150}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <br />
          <About />
          <br />
          <Row className="show-grid text-center">
            <div className="testimonial">
              <h1 className="text-center"> Ce que disent les clients</h1>
              <h5 className="text-center">
                Les témoignages de nos clients sont la meilleure preuve de la
                qualite de service.
              </h5>
            </div>

            <Col xs={12} sm={4} className="person-wrapper">
              <Image
                src="/assets/img/testimony/avatar4.jpg"
                circle
                className="profile-pic"
              />
              <h3>Cathy Dembo </h3>
              <p>
                “Nina was an excellent Travel Agent for us and considered our
                unique needs as she planned our itinerary. Every suggestion she
                made was excellent.”{" "}
              </p>
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
              <Image
                src="/assets/img/testimony/avatar5.jpg"
                circle
                className="profile-pic"
              />
              <h3>Jean Malonga</h3>
              <p>
                “I would highly recommend Andy because everything on my month
                long trip to New Zealand, Australia and French Polynesia went
                without a hitch.”
              </p>
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
              <Image
                src="/assets/img/testimony/avatar6.jpg"
                circle
                className="profile-pic"
              />
              <h3>Berthe Bongou</h3>
              <p>
                “I would highly recommend Andy because everything on my month
                long trip to New Zealand, Australia and French Polynesia went
                without a hitch.”{" "}
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
