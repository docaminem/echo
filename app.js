// Fonction pour sauvegarder les données dans sessionStorage
function saveData() {
    const valveMeasure = document.getElementById('valve-measure').value;
    const gradient = document.getElementById('gradient').value;
    const paps = document.getElementById('paps').value;

    // Vérification des entrées
    if (valveMeasure && gradient && paps) {
        sessionStorage.setItem('valveMeasure', valveMeasure);
        sessionStorage.setItem('gradient', gradient);
        sessionStorage.setItem('paps', paps);

        // Appel pour afficher le diagnostic basé sur les mesures
        displayDiagnostic(valveMeasure, gradient, paps);
    } else {
        alert("Veuillez entrer toutes les données.");
    }
}

// Fonction pour afficher le diagnostic basé sur les mesures
function displayDiagnostic(valveMeasure, gradient, paps) {
    let diagnosis = "Aucune donnée enregistrée";

    // Diagnostic pour Insuffisance Aortique (IA)
    if (valveMeasure >= 30 && gradient >= 40) {
        diagnosis = "Insuffisance Aortique sévère";
    }
    // Diagnostic pour Rétrécissement Aortique (RA)
    else if (valveMeasure < 30 && gradient >= 40) {
        diagnosis = "Rétrécissement Aortique sévère";
    }
    // Diagnostic pour Insuffisance Mitrale (IM)
    else if (valveMeasure >= 30 && paps >= 50) {
        diagnosis = "Insuffisance Mitrale sévère";
    }
    // Diagnostic pour Insuffisance Tricuspide (IT)
    else if (valveMeasure <= 20 && paps >= 50) {
        diagnosis = "Insuffisance Tricuspide sévère";
    }
    // Diagnostic pour Rétrécissement Mitral (RM)
    else if (valveMeasure <= 1.5) {
        diagnosis = "Rétrécissement Mitral";
    } else {
        diagnosis = "Données insuffisantes pour un diagnostic précis.";
    }

    document.getElementById('diagnostic-text').innerText = diagnosis;
}

// Fonction pour réinitialiser les données et démarrer une nouvelle session
function newSession() {
    // Effacer les données de la session
    sessionStorage.clear();

    // Réinitialiser l'interface
    document.getElementById('valve-measure').value = '';
    document.getElementById('gradient').value = '';
    document.getElementById('paps').value = '';
    document.getElementById('diagnostic-text').innerText = 'Aucune donnée enregistrée';

    alert("La session a été réinitialisée. Commencez un nouvel examen.");
}

// Vérifier si des données existent déjà en session au chargement de la page
window.onload = function() {
    const storedValveMeasure = sessionStorage.getItem('valveMeasure');
    const storedGradient = sessionStorage.getItem('gradient');
    const storedPaps = sessionStorage.getItem('paps');

    if (storedValveMeasure && storedGradient && storedPaps) {
        displayDiagnostic(storedValveMeasure, storedGradient, storedPaps);
    }
};
