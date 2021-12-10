import React, { useEffect } from "react";
import "../../assets/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "../css/FicheVisite.css";
import ReactTooltip from 'react-tooltip';

export default function EnsoleillementFormulaire({ info, setInfo }) {
  const regNbrPositif = /^\d+$/;
  const regTexteNorm = /^\D+$/;
  const regPasVide = /^.+$/;

  useEffect(() => {
    validateWholeForm();
  }, []);

  const validateWholeForm = () => {};

  const validateForm = (element) => {
    const elem_id = element.target.id;
    const error_text = element.target.nextSibling;
    switch (elem_id) {
    }
    validateWholeForm();
  };

  const resetError = (element) => {
    element.target.nextSibling.classList.remove("show-error");
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInfo({ ...info, [name]: value });
  };
  const handleChangeSoleil = (event) => {
    const name = event.target.name;
    const value = !info[name];
    setInfo({ ...info, [name]: value });
  };

  return (
    <section className="text-center">
      <main className="form-signin">
        <Form noValidate validated={info.validatedSoleil}>
          {/** début ensoleillement intérieur AM */}

          <div className="form-floating" data-tip data-for='ensoleillementAM'>
            <input
              type="texte"
              className="form-control"
              id="interieurAMsoleil"
              name="interieurAMsoleil"
              value={info.interieurAMsoleil}
              onChange={handleChange}
              autofocus
            />
            <span className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="interieurAMsoleil">Pièce ensoleillées : AM</label>
            <ReactTooltip id='ensoleillementAM' type='error'>
              <span>Le nombre de pièce ensoleillées en AM</span>
              </ReactTooltip>
          </div>

          {/** fin ensoleillement intérieur AM */}

          {/**  */}
          {/** début ensoleillement intérieur PM */}

          <div className="form-floating" data-tip data-for='ensoleillementPM'>
            <input
              type="texte"
              className="form-control"
              id="interieurPMsoleil"
              name="interieurPMsoleil"
              value={info.interieurPMsoleil}
              onChange={handleChange}
            />
            <span className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="interieurPMsoleil">Pièce ensoleillées : PM</label>
            <ReactTooltip id='ensoleillementPM' type='error'>
              <span>Le nombre de pièce ensoleillées en PM</span>
              </ReactTooltip>
          </div>
          {/** fin ensoleillement intérieur PM */}

          {/* début ensoleillement extérieur devant*/}

          <div className="proRev">
            <div className="label-texte">
              <label
                htmlFor="exterieurDevantSoleilAM"
                className="label noselect"
              >
                Période(s) d'ensoleillement du terrain avant
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="exterieurDevantSoleilAM"
                id="exterieurDevantSoleilAM"
                onChange={handleChangeSoleil}
                checked={info.exterieurDevantSoleilAM}
              />
              <label
                htmlFor="exterieurDevantSoleilAM"
                className="form-check-label"
              >
                AM
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="exterieurDevantSoleilPM"
                id="exterieurDevantSoleilPM"
                onChange={handleChangeSoleil}
                checked={info.exterieurDevantSoleilPM}
              />
              <label
                htmlFor="exterieurDevantSoleilPM"
                className="form-check-label"
              >
                PM
              </label>
            </div>
          </div>
          <span className="error-field">Le champ Adresse doit être rempli</span>
          {/* fin ensoleillement extérieur devant*/}

          {/* début ensoleillement extérieur arrière */}

          <div className="proRev">
            <div className="label-texte">
              <label
                htmlFor="exterieurArriereSoleilAM"
                className="label noselect"
              >
                Période(s) d'ensoleillement du terrain arrière
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="exterieurArriereSoleilAM"
                id="exterieurArriereSoleilAM"
                onChange={handleChangeSoleil}
                checked={info.exterieurArriereSoleilAM}
              />
              <label
                htmlFor="exterieurArriereSoleilAM"
                className="form-check-label"
              >
                AM
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="exterieurArriereSoleilPM"
                id="exterieurArriereSoleilPM"
                onChange={handleChangeSoleil}
                checked={info.exterieurArriereSoleilPM}
              />
              <label
                htmlFor="exterieurArriereSoleilPM"
                className="form-check-label"
              >
                PM
              </label>
            </div>
          </div>
          <span className="error-field">Le champ Adresse doit être rempli</span>
          {/* fin ensoleillement extérieur arrière*/}
        </Form>
      </main>
    </section>
  );
}
