import React from "react";
import "../../assets/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "../css/FicheVisite.css";

export default function SpecExterieurPartie2Formulaire({ info, setInfo }) {
  const regNbrPositif = /^\d+$/;
  const regPasVide = /^.+$/;

  const validateWholeForm = () => {
    let valid = [
      validateDesTaille(false),
      validatePiscine(false),
      validateChauffePiscine(false),
      validateTypeStationnement(false),
      validateNombreStationnement(false),
      validateEntree(false),
    ].every(Boolean);
    if (valid) {
      setInfo({ ...info, validated: true, validatedSpecEx2: true });
    } else {
      setInfo({ ...info, validated: false, validatedSpecEx2: false });
    }
  };

  const validateInput = (element) => {
    const elem_id = element.target.id;

    switch (elem_id) {
      case "desTaille":
        validateDesTaille(true);
        break;
      case "tailleTerrain":
        validateDesTaille(true);
        break;
      case "piscine":
        validatePiscine(true);
        break;
      case "chauffePiscine":
        validateChauffePiscine(true);
        break;
      case "typeStationnement":
        validateTypeStationnement(true);
        break;
      case "nombreStationnement":
        validateNombreStationnement(true);
        break;
      case "entree":
        validateEntree(true);
        break;
    }
    validateWholeForm();
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInfo({ ...info, [name]: value });
  };

  const handleChangeAmenagements = (event) => {
    const name = event.target.name;
    const value = !info[name];
    setInfo({ ...info, [name]: value });
  };

  const validateDesTaille = (updtMsg) => {
    let input = document.querySelector("#desTaille");
    let err = document.querySelector("#desTaille-error");
    let inputIn = document.querySelector("#tailleTerrain");
    if (regPasVide.test(input.value) && regNbrPositif.test(inputIn.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };

  const validatePiscine = (updtMsg) => {
    let input = document.querySelector("#piscine");
    let err = document.querySelector("#piscine-error");
    if (regPasVide.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };
  const validateChauffePiscine = (updtMsg) => {
    let input = document.querySelector("#chauffePiscine");
    let err = document.querySelector("#chauffePiscine-error");
    if (regPasVide.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };

  const validateTypeStationnement = (updtMsg) => {
    let input = document.querySelector("#typeStationnement");
    let err = document.querySelector("#typeStationnement-error");
    if (regPasVide.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };

  const validateNombreStationnement = (updtMsg) => {
    let input = document.querySelector("#nombreStationnement");
    let err = document.querySelector("#nombreStationnement-error");
    if (regPasVide.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };

  const validateEntree = (updtMsg) => {
    let input = document.querySelector("#entree");
    let err = document.querySelector("#entree-error");
    if (regPasVide.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };

  return (
    <section className="text-center">
      <main className="form-signin">
        <Form noValidate validated={info.validatedSpecEx2}>
          {/* début taille terrain */}
          <div className="proRev">
            <div className="label-texte taille-terrain">
              <label htmlFor="tailleTerrain" className="label noselect">
                Taille du terrain
              </label>
            </div>
            <select
              className="form-select sm"
              size="sm"
              name="descriptTaille"
              id="desTaille"
              aria-label="Selection de la description de la taille du terrain"
              onChange={handleChange}
              onBlur={validateInput}
            >
              <option value="">
                Sélectionnez la taille relative du terrain
              </option>
              <option value="petit">Petit</option>
              <option value="moyen">Moyen</option>
              <option value="grand">Grand</option>
            </select>

            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="tailleTerrain"
                name="tailleTerrain"
                value={info.tailleTerrain}
                placeholder="Entrez la taille du terrain en mètre carré"
                disabled={info.descriptTaille === ""}
                onChange={handleChange}
                onBlur={validateInput}
              />
              <label
                htmlFor="tailleTerrain"
                className="input-group-text noselect"
              >
                &#13217;
              </label>
            </div>
          </div>
          <span id="desTaille-error" className="error-field">
            Vous devez faire une sélection et entrer un entier positif
          </span>
          {/* fin taille terrain */}

          {/* début aménagements extérieurs */}
          <div className="proRev">
            <div className="label-texte">
              <label htmlFor="amenagementTerrain" className="label noselect">
                Aménagement(s) extérieurs
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="pelouse"
                id="pelouse"
                onChange={handleChangeAmenagements}
                checked={info.pelouse}
              />
              <label htmlFor="pelouse" className="form-check-label">
                Pelouse
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="boise"
                id="boise"
                onChange={handleChangeAmenagements}
                checked={info.aboise}
              />
              <label htmlFor="boise" className="form-check-label">
                Boisé
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="terrasseCouverte"
                id="terrasseCouverte"
                onChange={handleChangeAmenagements}
                checked={info.terrasseCouverte}
              />
              <label htmlFor="terrasseCouverte" className="form-check-label">
                Terrasse(patio) couverte
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="terrasseNonCouverte"
                id="terrasseNonCouverte"
                onChange={handleChangeAmenagements}
                checked={info.terrasseNonCouverte}
              />
              <label htmlFor="terrasseNonCouverte" className="form-check-label">
                Terrasse(patio) non couverte
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="gazebo"
                id="gazebo"
                onChange={handleChangeAmenagements}
                checked={info.gazebo}
              />
              <label htmlFor="gazebo" className="form-check-label">
                Gloriette(Gazebo)
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="cabanon"
                id="cabanon"
                onChange={handleChangeAmenagements}
                checked={info.cabanon}
              />
              <label htmlFor="cabanon" className="form-check-label">
                Cabanon
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="cloture"
                id="cloture"
                onChange={handleChangeAmenagements}
                checked={info.cloture}
              />
              <label htmlFor="cloture" className="form-check-label">
                Clôture
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="haie"
                id="haie"
                onChange={handleChangeAmenagements}
                checked={info.haie}
              />
              <label htmlFor="haie" className="form-check-label">
                Haie
              </label>
            </div>
          </div>
          {/* fin aménagements extérieurs */}

          {/* début type piscine */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection de la piscine"
              name="piscine"
              id="piscine"
              value={info.piscine}
              onChange={handleChange}
              onBlur={validateInput}
            >
              <option value="">Sélectionnez le type de piscine</option>
              <option value="aucune">Aucune</option>
              <option value="creuse">Creusée</option>
              <option value="semi-creuse">Semi-creusée</option>
              <option value="de surface">De surface</option>
            </select>
            <span id="piscine-error" className="error-field">
              Vous devez faire une sélection
            </span>
            <label htmlFor="amenagementTerrain">Piscine </label>
          </div>
          {/* fin type piscine */}

          {/* début type chauffe-piscine */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du chauffe-piscine"
              name="chauffePiscine"
              id="chauffePiscine"
              value={info.chauffePiscine}
              disabled={info.piscine === "aucune" || info.piscine === ""}
              onChange={handleChange}
              onBlur={validateInput}
            >
              <option value="">Sélectionnez le type de chauffe-piscine</option>
              <option value="aucun">Aucun</option>
              <option value="electrique">Électrique</option>
              <option value="gazNaturel">Gaz naturel</option>
            </select>
            <span id="chauffePiscine-error" className="error-field">
              Vous devez faire une sélection
            </span>
            <label htmlFor="amenagementTerrain">Chauffe-piscine </label>
          </div>
          {/* fin type chauffe-piscine */}
          <p className="mb-3"></p>
          {/* début type stationnement */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du type de stationnement"
              name="typeStationnement"
              id="typeStationnement"
              value={info.typeStationnement}
              onChange={handleChange}
              onBlur={validateInput}
            >
              <option value="">Sélectionnez le type de stationnement</option>
              <option value="aucun">Aucun</option>
              <option value="couvert">Couvert</option>
              <option value="nonCouvert">Non-couvert</option>
              <option value="garage">Garage</option>
            </select>
            <span id="typeStationnement-error" className="error-field">
              Vous devez faire une sélection{" "}
            </span>
            <label htmlFor="typeStationnement">Type de stationnement </label>
          </div>
          {/* fin type stationnement */}

          {/* début nombre stationnement */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du nombre de place de stationnement"
              name="nombreStationnement"
              id="nombreStationnement"
              value={info.nombreStationnement}
              disabled={
                info.typeStationnement === "aucun" ||
                info.typeStationnement === ""
              }
              onChange={handleChange}
              onBlur={validateInput}
            >
              <option value="">
                Sélectionnez le nombre de place de stationnement
              </option>
              <option value="1">1 voiture</option>
              <option value="2">2 voitures</option>
            </select>
            <span id="nombreStationnement-error" className="error-field">
              Vous devez faire une sélection
            </span>
            <label htmlFor="nombreStationnement">
              Nombre de place de stationnement{" "}
            </label>
          </div>
          {/* fin nombre stationnement */}
          <p className="mb-3"></p>

          {/* début entrée */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du type d'entree"
              name="entree"
              id="entree"
              value={info.entree}
              onChange={handleChange}
              onBlur={validateInput}
            >
              <option value="">Sélectionnez le type d'entrée</option>
              <option value="asphalte">Asphalte</option>
              <option value="paveBeton">Pavé de béton</option>
              <option value="gravier">Gravier</option>
              <option value="terre">Terre</option>
            </select>
            <span id="entree-error" className="error-field">
              Vous devez faire une sélection
            </span>
            <label htmlFor="entree">Type d'entrée </label>
          </div>
          {/* fin entrée */}
        </Form>
      </main>
    </section>
  );
}
