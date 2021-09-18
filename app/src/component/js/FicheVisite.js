import React, {useState} from "react";


/* Ce component s'occupe de l'affichage des différentes partie du formulaire

  Les vérifications des champs sont effectuées dans les parties respectives mais les informations 
  sont gardées dans le component FicheVisite.
*/
export default function FicheVisite() {
  //dictionnaire contenant les informations du formulaire au complet
  const [info, setInfo] = useState({

  })


//Il faudrait avoir une façon de se déplacer entre les différentes parties du formulaire. Peut-être un bouton
//'suivant' et 'précédent' ainsi qu'un "menu" indiquant la progression dans le formulaire et avec lequel l'utilisateur
//pourrait se déplacer aux différentes pages du formulaire.
  return (
    <div className="main-fiche">
      <h3>Fiche de Visite</h3>
    </div>
  );
}
