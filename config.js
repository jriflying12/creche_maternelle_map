const config = {
  style: "mapbox://styles/julienrichard/cjrvpus351myv1fp3vgedmvzf",
  accessToken:
    "pk.eyJ1IjoianVsaWVucmljaGFyZCIsImEiOiJjaXBpYWVjcGcwMDNmdmJrd3NmOW5yc2IxIn0.B6a6wxJn_XYYLP8j23nyrg",
  CSV: "./liste__Reference_Revue.csv",
  center: [48.88,2.32],
  zoom: 12,
  title: "Creches et maternelles a Paris",
  description:
    "Creches et maternelles a Paris",
  sideBarInfo: ["nom_etablissement","statut_public_prive","section", "adresse_1", "code_postal"],
  popupInfo: ["popup"],
  filters: [
    {
      type: "checkbox",
      title: "public/prive: ",
      columnHeader: "Languages",
      listItems: [
        "Public",
        "Privé",
        "Association",
        "Municipal"
      ],
    } 
  ],
};
