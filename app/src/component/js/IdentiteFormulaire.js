import React from "react";
import "../../assets/css/bootstrap.min.css";
import {Form} from "react-bootstrap";
import "../css/FicheVisite.css";

export default function IdentiteFormulaire() {
  return (
      <>
          <section className="text-center">
              <main className="form-signin">
                  <Form>
                      <div className="form-floating">
                          <i className="fa-address-book-o"/>
                          <input type="text"
                                 className="form-control"
                                 id="floatingAdresse"
                                 name="adresse"
                                 autoFocus
                          />
                          <label htmlFor="floatingAdresse">
                              <ion-icon className="text-primary"
                                        name="person-outline"></ion-icon>
                              Adresse
                          </label>
                      </div>
                      <div className="form-floating">
                          <i className ="fa fa-user"/>
                          <input type="text"
                                 className="form-control"
                                 id="floatingCourtier"
                                 name="courtier"
                          />
                          <label htmlFor="floatingCourtier">
                              <ion-icon className="text-primary"
                                        name="person-outline"></ion-icon>
                              Courtier/Vendeur
                          </label>
                      </div>
                      <div className="form-floating">
                          <i className="fa-phone"/>
                          <input type="text"
                                 className="form-control"
                                 id="floatingPhone"
                                 name="Telephone"
                          />
                          <label htmlFor="floatingPhone">
                              <ion-icon className="text-primary"
                                        name="person-outline"></ion-icon>
                              Téléphone
                          </label>
                      </div>
                      <div className="form-floating">
                          <i className="fa-mobile"/>
                          <input type="text"
                                 className="form-control"
                                 id="floatingCell"
                                 name="Cellulaire"
                          />
                          <label htmlFor="floatingCell">
                              <ion-icon className="text-primary"
                                        name="person-outline"></ion-icon>
                              Cellulaire
                          </label>
                      </div>
                      <div className="form-floating">
                          <i className="fa-envelope-o"/>
                          <input type="email"
                                 className="form-control"
                                 id="floatingEmail"
                                 name="Email"
                                 placeholder="name@exemple.com"
                          />
                          <label htmlFor="floatingEmail">
                              <ion-icon className="text-primary"
                                        name="person-outline"></ion-icon>
                              Courriel
                          </label>
                      </div>

                  </Form>
              </main>
          </section>
      </>
  );
}
