import React from "react";
import "../../assets/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "../css/FicheVisite.css";

export default function EnsoleillementFormulaire({ info, setInfo }) {
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
        <Form>
          {/** début ensoleillement intérieur AM */}

          <div className="form-floating">
            <input
              type="texte"
              className="form-control"
              id="interieurAMsoleil"
              name="interieurAMsoleil"
              value={info.interieurAMsoleil}
              onChange={handleChange}
              autofocus
            />
            <label htmlFor="interieurAMsoleil">Pièce ensoleillées : AM</label>
          </div>

          {/** fin ensoleillement intérieur AM */}

          {/**  */}
          {/** début ensoleillement intérieur PM */}

          <div className="form-floating">
            <input
              type="texte"
              className="form-control"
              id="interieurPMsoleil"
              name="interieurPMsoleil"
              value={info.interieurPMsoleil}
              onChange={handleChange}
            />
            <label htmlFor="interieurPMsoleil">Pièce ensoleillées : PM</label>
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
          {/* fin ensoleillement extérieur arrière*/}
        </Form>
      </main>
    </section>
  );
}
