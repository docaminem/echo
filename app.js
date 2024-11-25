const diagnosticValvulopathie = (valve, parametres) => {
  const resultats = {};

  switch (valve) {
    case "Insuffisance aortique":
      resultats.severite = calculerSeveriteInsuffisanceAortique(parametres);
      break;

    case "Rétrécissement aortique":
      resultats.severite = calculerSeveriteRetrecissementAortique(parametres);
      break;

    // Ajouter d'autres valvulopathies ici
    default:
      resultats.erreur = "Valvulopathie non reconnue.";
  }

  return resultats;
};

const calculerSeveriteInsuffisanceAortique = ({ SOR, volumeRegurgite, venaContracta, PHT }) => {
  if (SOR > 30 || volumeRegurgite > 60 || venaContracta > 6 || PHT < 200) {
    return "IA sévère";
  } else if (
    (SOR >= 10 && SOR <= 30) ||
    (volumeRegurgite >= 30 && volumeRegurgite <= 60) ||
    (venaContracta >= 3 && venaContracta <= 6) ||
    (PHT >= 200 && PHT <= 500)
  ) {
    return "IA modérée";
  } else {
    return "IA légère";
  }
};

const calculerSeveriteRetrecissementAortique = ({ vitesseTransvalvulaire, gradientPression, surfaceValvulaire, surfaceAortiqueIndexee }) => {
  if (vitesseTransvalvulaire > 4 || gradientPression > 40 || surfaceValvulaire < 1 || surfaceAortiqueIndexee < 0.6) {
    return "RA sévère";
  } else if (
    (vitesseTransvalvulaire >= 3 && vitesseTransvalvulaire <= 4) ||
    (gradientPression >= 25 && gradientPression <= 40) ||
    (surfaceValvulaire >= 1 && surfaceValvulaire <= 1.5) ||
    (surfaceAortiqueIndexee >= 0.6 && surfaceAortiqueIndexee <= 0.8)
  ) {
    return "RA modérée";
  } else {
    return "RA légère";
  }
};

// Exemple d'utilisation
const valvulopathie = "Insuffisance aortique";
const parametres = {
  SOR: 15,
  volumeRegurgite: 40,
  venaContracta: 4,
  PHT: 300,
};

const resultat = diagnosticValvulopathie(valvulopathie, parametres);
console.log(resultat);
