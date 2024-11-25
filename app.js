// Fonction pour afficher les champs nécessaires en fonction de la valve sélectionnée
function showValveInputs() {
    const valve = document.getElementById('valve-selection').value;
    let inputsHTML = '';

    // Selon la valve choisie, afficher les champs spécifiques
    if (valve === 'aortic') {
        inputsHTML = `
            <label for="valve-measure">Surface de la valve (en mm²) :</label>
            <input type="number" id="valve-measure" placeholder="Entrer la surface de la valve">
            <label for="gradient">Gradient (en mmHg) :</label>
            <input type="number" id="gradient" placeholder="Entrer le gradient">
            <label for="aortic-root">Diamètre de la racine aortique (en mm) :</label>
            <input type="number" id="aortic-root" placeholder="Entrer le diamètre de la racine aortique">
            <label for="aortic-velocity">Vitesse du flux aortique (en m/s) :</label>
            <input type="number" id="aortic-velocity" placeholder="Entrer la vitesse du flux">
            <button onclick="saveData()">Sauvegarder</button>
        `;
    } else if (valve === 'mitral') {
        inputsHTML = `
            <label for="mitral-measure">Surface de la valve mitrale (en mm²) :</label>
            <input type="number" id="mitral-measure" placeholder="Entrer la surface de la valve mitrale">
            <label for="mitral-gradient">Gradient mitral (en mmHg) :</label>
            <input type="number" id="mitral-gradient" placeholder="Entrer le gradient mitral">
            <label for="lv-ejection">Fraction d’éjection du ventricule gauche (en %) :</label>
            <input type="number" id="lv-ejection" placeholder="Entrer la fraction d’éjection">
            <label for="paps">Pression artérielle pulmonaire systolique (en mmHg) :</label>
            <input type="number" id="paps" placeholder="Entrer la pression pulmonaire">
            <button onclick="saveData()">Sauvegarder</button>
        `;
    } else if (valve === 'tricuspid') {
        inputsHTML = `
            <label for="tricuspid-measure">Surface de la valve tricuspide (en mm²) :</label>
            <input type="number" id="tricuspid-measure" placeholder="Entrer la surface de la valve tricuspide">
            <label for="tricuspid-gradient">Gradient tricuspide (en mmHg) :</label>
            <input type="number" id="tricuspid-gradient" placeholder="Entrer le gradient tricuspide">
            <button onclick="saveData()">Sauvegarder</button>
        `;
    } else if (valve === 'pulmonary') {
        inputsHTML = `
            <label for="pulmonary-measure">Surface de la valve pulmonaire (en mm²) :</label>
            <input type="number" id="pulmonary-measure" placeholder="Entrer la surface de la valve pulmonaire">
            <label for="pulmonary-gradient">Gradient pulmonaire (en mmHg) :</label>
            <input type="number" id="pulmonary-gradient" placeholder="Entrer le gradient pulmonaire">
            <label for="pulmonary-velocity">Vitesse du flux pulmonaire (en m/s) :</label>
            <input type="number" id="pulmonary-velocity" placeholder="Entrer la vitesse du flux pulmonaire">
            <button onclick="saveData()">Sauvegarder</button>
        `;
    }

    document.getElementById('valve-inputs').innerHTML = inputsHTML;
}

// Fonction pour sauvegarder les données de la valve sélectionnée
function saveData() {
    const valve = document.getElementById('valve-selection').value;
    let values = {};

    // Récupérer les valeurs en fonction de la valve sélectionnée
    if (valve === 'aortic') {
        values = {
            valveMeasure: document.getElementById('valve-measure').value,
            gradient: document.getElementById('gradient').value,
            aorticRoot: document.getElementById('aortic-root').value,
            aorticVelocity: document.getElementById('aortic-velocity').value
        };
    } else if (valve === 'mitral') {
        values = {
            mitralMeasure: document.getElementById('mitral-measure').value,
            mitralGradient: document.getElementById('mitral-gradient').value,
            lvEjection: document.getElementById('lv-ejection').value,
            paps: document.getElementById('paps').value
        };
    } else if (valve === 'tricuspid') {
        values = {
            tricuspidMeasure: document.getElementById('tricuspid-measure').value,
            tricuspidGradient: document.getElementById('tricuspid-gradient').value
        };
    } else if (valve === 'pulmonary') {
        values = {
            pulmonaryMeasure: document.getElementById('pulmonary-measure').value,
            pulmonaryGradient: document.getElementById('pulmonary-gradient').value,
            pulmonaryVelocity: document.getElementById('pulmonary-velocity').value
        };
    }

    // Stocker les données dans sessionStorage
    sessionStorage.setItem('valveData', JSON.stringify(values));

    // Afficher le diagnostic basé sur les valeurs saisies
    displayDiagnostic(values);
}

// Fonction pour afficher le diagnostic basé sur les mesures saisies
function displayDiagnostic(values) {
    let diagnosis = "Aucune donnée enregistrée";

    // Vérification des valeurs et calculs pour chaque valve

    // Diagnostic pour la Valve Aortique
    if (values.valveMeasure && values.gradient && values.aorticRoot && values.aorticVelocity) {
        if (values.valveMeasure >= 30 && values.gradient >= 40) {
            diagnosis = "Insuffisance Aortique sévère (valve aortique avec régurgitation importante)";
        } else if (values.valveMeasure < 30 && values.gradient >= 40) {
            diagnosis = "Rétrécissement Aortique sévère (rétrécissement de la valve aortique)";
        } else {
            diagnosis = "Régurgitation ou rétrécissement aortique modéré.";
        }
    }

    // Diagnostic pour la Valve Mitrale
    else if (values.mitralMeasure && values.mitralGradient && values.lvEjection && values.paps) {
        if (values.mitralMeasure >= 30 && values.mitralGradient > 10 && values.lvEjection < 50) {
            diagnosis = "Insuffisance Mitrale sévère (régurgitation mitrale avec faible fraction d’éjection)";
        } else if (values.mitralMeasure < 30 && values.mitralGradient > 20) {
            diagnosis = "Rétrécissement Mitral sévère (rétrécissement de la valve mitrale avec hypertension pulmonaire)";
        } else {
            diagnosis = "Régurgitation ou rétrécissement mitral modéré.";
        }
    }

    // Diagnostic pour la Valve Tricuspide
    else if (values.tricuspidMeasure && values.tricuspidGradient) {
        if (values.tricuspidMeasure < 20 && values.tricuspidGradient > 20) {
            diagnosis = "Insuffisance Tricuspide sévère (régurgitation de la valve tricuspide avec hypertension pulmonaire)";
        } else {
            diagnosis = "Régurgitation tricuspide modérée.";
        }
    }

    // Diagnostic pour la Valve Pulmonaire
    else if (values.pulmonaryMeasure && values.pulmonaryGradient && values.pulmonaryVelocity) {
        if (values.pulmonaryMeasure < 20 && values.pulmonaryGradient >= 40) {
            diagnosis = "Rétrécissement Pulmonaire sévère (rétrécissement de la valve pulmonaire avec hypertension pulmonaire)";
        } else {
            diagnosis = "Régurgitation pulmonaire modérée.";
        }
    }

    document.getElementById('diagnostic-text').innerText = diagnosis;
}

// Fonction pour réinitialiser les données et démarrer une nouvelle session
function newSession() {
    // Effacer les données de la session
    sessionStorage.clear();

    // Réinitialiser l'interface
    document.getElementById('valve-selection').value = '';
    document.getElementById('valve-inputs').innerHTML = '';
    document.getElementById('diagnostic-text').innerText = 'Aucune donnée enregistrée';

    alert("La session a été réinitialisée. Commencez un nouvel examen.");
}

// Vérifier si des données existent déjà en session au chargement de la page
window.onload = function() {
    const storedData = sessionStorage.getItem('valveData');
    if (storedData) {
        const values = JSON.parse(storedData);
        displayDiagnostic(values);
    }
};

// Fonction pour afficher le diagnostic basé sur les mesures saisies, incluant les cas spécifiques
function displayDiagnostic(values) {
    let diagnosis = "Aucune donnée enregistrée";

    // Vérification des valeurs et calculs pour chaque valve

    // Diagnostic pour la Valve Aortique (Rétrécissement Aortique)
    if (values.valveMeasure && values.gradient && values.aorticRoot && values.aorticVelocity) {
        // Cas de bas débit, bas gradient (Low Flow, Low Gradient)
        if (values.gradient < 40 && values.aorticVelocity < 4.0) {
            if (values.valveMeasure < 1) {
                diagnosis = "Rétrécissement Aortique sévère avec bas débit et bas gradient (insuffisance fonctionnelle du ventricule gauche)";
            } else {
                diagnosis = "Rétrécissement Aortique sévère avec bas débit et bas gradient, nécessitant une évaluation approfondie";
            }
        }
        // Cas de haut débit (High Flow, High Gradient) : par exemple, anémie, hyperthyroïdie
        else if (values.gradient >= 40 && values.valveMeasure >= 30) {
            diagnosis = "Rétrécissement Aortique sévère avec haut débit (possible compensation par un flux sanguin élevé)";
        } 
        // Cas normal de rétrécissement
        else if (values.valveMeasure >= 30 && values.gradient >= 40) {
            diagnosis = "Rétrécissement Aortique sévère (rétrécissement important de la valve aortique avec hypertension systémique)";
        } else {
            diagnosis = "Rétrécissement Aortique modéré, nécessitant un suivi";
        }
    }

    // Diagnostic pour la Valve Mitrale (Insuffisance Mitrale)
    else if (values.mitralMeasure && values.mitralGradient && values.lvEjection && values.paps) {
        // Insuffisance Mitrale sévère avec dysfonction du ventricule gauche (FEVG faible)
        if (values.mitralMeasure >= 30 && values.mitralGradient > 10 && values.lvEjection < 50) {
            diagnosis = "Insuffisance Mitrale sévère (régurgitation mitrale avec faible fraction d’éjection)";
        }
        // Insuffisance Mitrale secondaire (dilatation ventriculaire)
        else if (values.mitralMeasure < 30 && values.lvEjection >= 50 && values.paps > 50) {
            diagnosis = "Insuffisance Mitrale secondaire (due à une dilatation du ventricule gauche avec hypertension pulmonaire)";
        } 
        // Cas modéré d'insuffisance mitrale
        else {
            diagnosis = "Régurgitation mitrale modérée, nécessitant un suivi et un traitement médical";
        }
    }

    // Diagnostic pour la Valve Tricuspide (Insuffisance Tricuspide)
    else if (values.tricuspidMeasure && values.tricuspidGradient) {
        // Cas d'insuffisance tricuspide sévère avec hypertension pulmonaire
        if (values.tricuspidMeasure < 20 && values.tricuspidGradient > 20) {
            diagnosis = "Insuffisance Tricuspide sévère (régurgitation de la valve tricuspide avec hypertension pulmonaire)";
        } else {
            diagnosis = "Régurgitation tricuspide modérée";
        }
    }

    // Diagnostic pour la Valve Pulmonaire (Rétrécissement Pulmonaire)
    else if (values.pulmonaryMeasure && values.pulmonaryGradient && values.pulmonaryVelocity) {
        // Cas de rétrécissement pulmonaire sévère
        if (values.pulmonaryMeasure < 20 && values.pulmonaryGradient >= 40) {
            diagnosis = "Rétrécissement Pulmonaire sévère (rétrécissement de la valve pulmonaire avec hypertension pulmonaire)";
        } else {
            diagnosis = "Régurgitation pulmonaire modérée";
        }
    }

    document.getElementById('diagnostic-text').innerText = diagnosis;
}

// Fonction pour réinitialiser les données et démarrer une nouvelle session
function newSession() {
    // Effacer les données de la session
    sessionStorage.clear();

    // Réinitialiser l'interface
    document.getElementById('valve-selection').value = '';
    document.getElementById('valve-inputs').innerHTML = '';
    document.getElementById('diagnostic-text').innerText = 'Aucune donnée enregistrée';

    alert("La session a été réinitialisée. Commencez un nouvel examen.");
}

// Vérifier si des données existent déjà en session au chargement de la page
window.onload = function() {
    const storedData = sessionStorage.getItem('valveData');
    if (storedData) {
        const values = JSON.parse(storedData);
        displayDiagnostic(values);
    }
};
