import React from "react";

export default function Test({ info, setInfo }) {
  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.id);
    let uptItems = [...info.tab];
    uptItems[e.target.id].valeur = e.target.value;
    setInfo({ ...info, tab: uptItems });
  };

    const handleChangeDesc = (e) => {
    console.log(e.target.value);
    console.log(e.target.id);
    let uptItems = [...info.tab];
    uptItems[e.target.id].description = e.target.value;
    setInfo({ ...info, tab: uptItems });
  };

  const addItem = () => {
    let item = {
      id: info.tab.length,
      valeur: "",
      description: "",
    };
    setInfo({ ...info, tab: [...info.tab, item] });
    console.log(item);
  };
  console.log(info);

  return (
    <div>
      {info.tab.map((elem) => {
        return (
          <div key={elem.id}>
                <div className="form-floating" >
                    <select
                        className="form-select"
                        aria-label="Selection inclus"
                        name="inclus"
                        id={elem.id}
                        value={elem.valeur}
                        onChange={handleChange}
                        >
                            <option value="">Sélectionnez</option>
                            <option value="stores">Stores</option>
                            <option value="luminaires">Luminaires</option>
                            <option value="equipements">Équipements</option>
                            <option value="entretienExterieur">Entretien extérieur</option>
                            <option value="autres">Autres</option>
                    </select>
                    <label htmlFor="proximite">Inclus dans la vente </label>
                </div>
            <div className="form-floating">
                <input
                    type="text"
                    className="form-control"
                    id={elem.id}
                    name="descriptionInclus"
                    value={elem.description}
                    placeholder="Description"
                    onChange={handleChangeDesc}
                />
                <label htmlFor="km">Description des inclus</label>
            </div>
          </div>
        );
      })}
      <button className="btn btn-outline-primary" onClick={addItem}>
        Ajouter un item
      </button>{" "}
    </div>
  );
}
