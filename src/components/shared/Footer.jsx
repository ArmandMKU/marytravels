import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Image, Grid, Row, Col } from "react-bootstrap";
import "../../Styles/footer.css";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <Grid>
            <Row className="show-grid  ">
              <Col xs={12} sm={12} className="icons ">
                <div className="social-icons">
                  <Image
                    src="/assets/img/logo_facebook.png"
                    className="social-icon"
                  />
                  <Image
                    src="/assets/img/logo_twiter.png"
                    className="social-icon"
                  />
                  <Image
                    src="/assets/img/logo_google+.png"
                    className="social-icon"
                  />
                  <Image
                    src="/assets/img/logo_linkedin.png"
                    className="social-icon"
                  />
                </div>
              </Col>
            </Row>
            <Row className="show-grid text-center">
              <Col xs={12} sm={4} className="icons">
                <Image
                  src="/assets/img/logo_place.png"
                  className="social-icon"
                />
                <div className="info-footer">
                  <h4> ADDRESSE</h4>
                  <p> 100, rue Mouleke, Croisement Av. des Chars</p>
                  <p>Ouenze, Brazzaville, Congo</p>
                </div>
              </Col>
              <Col xs={12} sm={4} className="icons">
                <Image
                  src="/assets/img/logo_email.png"
                  className="social-icon"
                />
                <div className="info-footer">
                  <h4> EMAIL</h4>
                  <p> christparchardb@gmail.com</p>
                </div>
              </Col>

              <Col xs={12} sm={4} className="icons">
                <Image
                  src="/assets/img/logo_phone.png"
                  className="social-icon"
                />
                <div className="info-footer">
                  <h4> PHONE</h4>
                  <p> +242 06 612 25 65</p>
                  <p> +242 05 523 23 00</p>

                  <Image
                    src="/assets/img/logo_whatsapp.png"
                    className="social-icon"
                  />
                  <p>+242 06 863 78 68</p>
                </div>
              </Col>
            </Row>
          </Grid>
        </footer>
      </div>
    );
  }
}
