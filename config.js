const config = {
  style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    "pk.eyJ1IjoianVsaWVucmljaGFyZCIsImEiOiJja3ZzZXdieDM0bm51MnZxNXNwczN3OW05In0.J724SPwmyb2jRD7ehdmp8g",
  CSV: "./liste__Reference_Revue.csv",
  center: [48.88,2.32],
  zoom: 12,
  title: "Creches et maternelles a Paris",
  description:
    "Creches et maternelles a Paris",
  sideBarInfo: ["nom_etablissement","statut_public_prive","section", "adresse_1", "code_postal"],
  popupInfo: ["web"],
  filters: [
    {
      type: "checkbox",
      title: "public/prive: ",
      columnHeader: "statut_public_prive",
      listItems: [
        "Public",
        "Privé",
        "Association",
        "Municipal"
      ],
    } 
  ],
};
