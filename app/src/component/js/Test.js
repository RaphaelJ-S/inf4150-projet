import React from "react";

export default function Test({ info, setInfo }) {
  const handleChange = (e) => {
    let uptItems = [...info.tab];
    uptItems[e.target.id].valeur = e.target.value;
    setInfo({ ...info, tab: uptItems });
  };

  const addItem = () => {
    let item = {
      id: info.tab.length,
      valeur: "",
    };
    setInfo({ ...info, tab: [...info.tab, item] });
  };
  console.log(info);

  return (
    <>
      {info.tab.map((elem) => {
        return (
          <div className="form-floatin" key={elem.id}>
            <label htmlFor={elem.id}>item {elem.id}</label>
            <select
              className="form-select"
              id={elem.id}
              value={elem.valeur}
              onChange={handleChange}
            >
              <option value="un">Un</option>
              <option value="deux">Deux</option>
              <option value="trois">Trois</option>
            </select>
          </div>
        );
      })}
      <button className="btn btn-outline-primary" onClick={addItem}>
        Ajouter un item
      </button>{" "}
    </>
  );
}
