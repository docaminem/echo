// Fonction pour calculer la surface corporelle du patient en utilisant la formule de Mosteller
function calculateBodySurfaceArea(weight, height) {
    return Math.sqrt((weight * height) / 3600).toFixed(2); // Surface corporelle en m²
}

// Fonction pour afficher les champs nécessaires en fonction de la valvulopathie sélectionnée
function showMeasures() {
    const valvulopathy = document.getElementById('valvulopathy-selection').value;
    let inputsHTML = '';

    // Afficher les champs en fonction de la valvulopathie sélectionnée
    if (valvulopathy === 'aortic-insufficiency') {
        inputsHTML = `
            <label for="aortic-measure">Surface de la valve aortique (en mm²) :</label>
            <input type="number" id="aortic-measure" placeholder="Entrer la surface de la valve aortique">
            <label for="aortic-gradient">Gradient aortique (en mmHg) :</label>
            <input type="number" id="aortic-gradient" placeholder="Entrer le gradient aortique">
            <label for="aortic-velocity">Vitesse du flux aortique (en m/s) :</label>
            <input type="number" id="aortic-velocity" placeholder="Entrer la vitesse du flux aortique">
            <label for="aortic-root">Diamètre de la racine aortique (en mm) :</label>
            <input type="number" id="aortic-root" placeholder="Entrer le diamètre de la racine aortique">
            <button onclick="saveData()">بِسْمِ اللَّهِ</button>
        `;
    } else if (valvulopathy === 'aortic-stenosis') {
        inputsHTML = `
            <label for="aortic-stenosis-measure">Surface de la valve aortique (en mm²) :</label>
            <input type="number" id="aortic-stenosis-measure" placeholder="Entrer la surface de la valve aortique">
            <label for="aortic-stenosis-gradient">Gradient aortique (en mmHg) :</label>
            <input type="number" id="aortic-stenosis-gradient" placeholder="Entrer le gradient aortique">
            <label for="aortic-stenosis-velocity">Vitesse du flux aortique (en m/s) :</label>
            <input type="number" id="aortic-stenosis-velocity" placeholder="Entrer la vitesse du flux aortique">
            <label for="aortic-stenosis-root">Diamètre de la racine aortique (en mm) :</label>
            <input type="number" id="aortic-stenosis-root" placeholder="Entrer le diamètre de la racine aortique">
            <button onclick="saveData()">بِسْمِ اللَّهِ</button>
        `;
    } else if (valvulopathy === 'mitral-insufficiency') {
        inputsHTML = `
            <label for="mitral-measure">Surface de la valve mitrale (en mm²) :</label>
            <input type="number" id="mitral-measure" placeholder="Entrer la surface de la valve mitrale">
            <label for="mitral-gradient">Gradient mitral (en mmHg) :</label>
            <input type="number" id="mitral-gradient" placeholder="Entrer le gradient mitral">
            <label for="lv-ejection">Fraction d’éjection du ventricule gauche (en %) :</label>
            <input type="number" id="lv-ejection" placeholder="Entrer la fraction d’éjection">
            <label for="paps">Pression artérielle pulmonaire systolique (en mmHg) :</label>
            <input type="number" id="paps" placeholder="Entrer la pression pulmonaire systolique">
            <button onclick="saveData()">بِسْمِ اللَّهِ</button>
        `;
    } else if (valvulopathy === 'mitral-stenosis') {
        inputsHTML = `
            <label for="mitral-stenosis-measure">Surface de la valve mitrale (en mm²) :</label>
            <input type="number" id="mitral-stenosis-measure" placeholder="Entrer la surface de la valve mitrale">
            <label for="mitral-stenosis-gradient">Gradient mitral (en mmHg) :</label>
            <input type="number" id="mitral-stenosis-gradient" placeholder="Entrer le gradient mitral">
            <label for="lv-ejection-stenosis">Fraction d’éjection du ventricule gauche (en %) :</label>
            <input type="number" id="lv-ejection-stenosis" placeholder="Entrer la fraction d’éjection">
            <label for="paps-stenosis">Pression artérielle pulmonaire systolique (en mmHg) :</label>
            <input type="number" id="paps-stenosis" placeholder="Entrer la pression pulmonaire systolique">
            <button onclick="saveData()">بِسْمِ اللَّهِ</button>
        `;
    } else if (valvulopathy === 'tricuspid-insufficiency') {
        inputsHTML = `
            <label for="tricuspid-measure">Surface de la valve tricuspide (en mm²) :</label>
            <input type="number" id="tricuspid-measure" placeholder="Entrer la surface de la valve tricuspide">
            <label for="tricuspid-gradient">Gradient tricuspide (en mmHg) :</label>
            <input type="number" id="tricuspid-gradient" placeholder="Entrer le gradient tricuspide">
            <button onclick="saveData()">بِسْمِ اللَّهِ</button>
        `;
    } else if (valvulopathy === 'pulmonary-stenosis') {
        inputsHTML = `
            <label for="pulmonary-measure">Surface de la valve pulmonaire (en mm²) :</label>
            <input type="number" id="pulmonary-measure" placeholder="Entrer la surface de la valve pulmonaire">
            <label for="pulmonary-gradient">Gradient pulmonaire (en mmHg) :</label>
            <input type="number" id="pulmonary-gradient" placeholder="Entrer le gradient pulmonaire">
            <label for="pulmonary-velocity">Vitesse du flux pulmonaire (en m/s) :</label>
            <input type="number" id="pulmonary-velocity" placeholder="Entrer la vitesse du flux pulmonaire">
            <button onclick="saveData()">بِسْمِ اللَّهِ</button>
        `;
    }

    document.getElementById('measurements-inputs').innerHTML = inputsHTML;
}

// Fonction pour sauvegarder les données et afficher le diagnostic
function saveData() {
    const valvulopathy = document.getElementById('valvulopathy-selection').value;
    let values = {};

    // Récupérer les valeurs en fonction de la valvulopathie sélectionnée
    if (valvulopathy === 'aortic-insufficiency') {
        values = {
            valveMeasure: document.getElementById('aortic-measure').value,
            gradient: document.getElementById('aortic-gradient').value,
            velocity: document.getElementById('aortic-velocity').value,
            aorticRoot: document.getElementById('aortic-root').value
        };
    } else if (valvulopathy === 'aortic-stenosis') {
        values = {
            valveMeasure: document.getElementById('aortic-stenosis-measure').value,
            gradient: document.getElementById('aortic-stenosis-gradient').value,
                        velocity: document.getElementById('aortic-stenosis-velocity').value,
            aorticRoot: document.getElementById('aortic-stenosis-root').value
        };
    } else if (valvulopathy === 'mitral-insufficiency') {
        values = {
            valveMeasure: document.getElementById('mitral-measure').value,
            gradient: document.getElementById('mitral-gradient').value,
            lvEjection: document.getElementById('lv-ejection').value,
            paps: document.getElementById('paps').value
        };
    } else if (valvulopathy === 'mitral-stenosis') {
        values = {
            valveMeasure: document.getElementById('mitral-stenosis-measure').value,
            gradient: document.getElementById('mitral-stenosis-gradient').value,
            lvEjection: document.getElementById('lv-ejection-stenosis').value,
            paps: document.getElementById('paps-stenosis').value
        };
    } else if (valvulopathy === 'tricuspid-insufficiency') {
        values = {
            valveMeasure: document.getElementById('tricuspid-measure').value,
            gradient: document.getElementById('tricuspid-gradient').value
        };
    } else if (valvulopathy === 'pulmonary-stenosis') {
        values = {
            valveMeasure: document.getElementById('pulmonary-measure').value,
            gradient: document.getElementById('pulmonary-gradient').value,
            velocity: document.getElementById('pulmonary-velocity').value
        };
    }

    // Calcul de la surface corporelle (SC)
    const weight = parseFloat(document.getElementById('patient-weight').value);
    const height = parseFloat(document.getElementById('patient-height').value);
    const bodySurfaceArea = calculateBodySurfaceArea(weight, height);
    document.getElementById('body-surface-area').value = bodySurfaceArea;

    // Sauvegarder les données dans sessionStorage
    sessionStorage.setItem('valveData', JSON.stringify(values));

    // Afficher le diagnostic basé sur les valeurs saisies
    displayDiagnostic(values, bodySurfaceArea);
}

// Fonction pour afficher le diagnostic basé sur les mesures saisies
function displayDiagnostic(values, bodySurfaceArea) {
    let diagnosis = "Aucune donnée enregistrée";
    let conduct = "";
    let echocardiographyReport = "";

    // Diagnostic pour la Valve Aortique
    if (values.valveMeasure && values.gradient) {
        if (values.valveMeasure >= 30 && values.gradient >= 40) {
            diagnosis = "Insuffisance Aortique sévère (valve aortique avec régurgitation importante)";
            conduct = "Prise en charge médicale immédiate, envisager une intervention chirurgicale.";
            echocardiographyReport = `La surface de la valve aortique est de ${values.valveMeasure} mm² avec un gradient de ${values.gradient} mmHg. Insuffisance aortique sévère observée.`;
        } else if (values.valveMeasure < 30 && values.gradient >= 40) {
            diagnosis = "Rétrécissement Aortique sévère (rétrécissement de la valve aortique)";
            conduct = "Évaluation pour une intervention chirurgicale, surveillance rapprochée.";
            echocardiographyReport = `La surface de la valve aortique est de ${values.valveMeasure} mm² avec un gradient de ${values.gradient} mmHg. Rétrécissement aortique sévère observé.`;
        } else {
            diagnosis = "Régurgitation ou rétrécissement aortique modéré.";
            conduct = "Surveillance régulière et gestion médicale.";
            echocardiographyReport = `La surface de la valve aortique est de ${values.valveMeasure} mm² avec un gradient de ${values.gradient} mmHg. Suivi recommandé.`;
        }
    }

    // Diagnostic pour la Valve Mitrale
    else if (values.lvEjection && values.paps) {
        if (values.lvEjection < 50 && values.paps > 50) {
            diagnosis = "Insuffisance Mitrale sévère (régurgitation mitrale avec faible fraction d’éjection)";
            conduct = "Suivi médical rapproché, traitement possible pour réduire la régurgitation.";
            echocardiographyReport = `La fraction d’éjection du ventricule gauche est de ${values.lvEjection}% avec une pression artérielle pulmonaire systolique de ${values.paps} mmHg.`;
        } else if (values.valveMeasure < 30 && values.paps > 50) {
            diagnosis = "Rétrécissement Mitral sévère (rétrécissement de la valve mitrale avec hypertension pulmonaire)";
            conduct = "Évaluation pour intervention chirurgicale.";
            echocardiographyReport = `La surface de la valve mitrale est de ${values.valveMeasure} mm² avec un gradient de ${values.gradient} mmHg.`;
        } else {
            diagnosis = "Régurgitation ou rétrécissement mitral modéré.";
            conduct = "Surveillance régulière et gestion médicale.";
            echocardiographyReport = `La surface de la valve mitrale est de ${values.valveMeasure} mm² avec un gradient de ${values.gradient} mmHg.`;
        }
    }

    // Diagnostic pour la Valve Tricuspide
    else if (values.valveMeasure && values.gradient) {
        if (values.valveMeasure < 20 && values.gradient > 20) {
            diagnosis = "Insuffisance Tricuspide sévère (régurgitation de la valve tricuspide avec hypertension pulmonaire)";
            conduct = "Suivi médical et traitement pour réduire l'hypertension pulmonaire.";
            echocardiographyReport = `La surface de la valve tricuspide est de ${values.valveMeasure} mm² avec un gradient de ${values.gradient} mmHg.`;
        } else {
            diagnosis = "Régurgitation tricuspide modérée.";
            conduct = "Suivi médical régulier et gestion des symptômes.";
            echocardiographyReport = `La surface de la valve tricuspide est de ${values.valveMeasure} mm² avec un gradient de ${values.gradient} mmHg.`;
        }
    }

    // Diagnostic pour la Valve Pulmonaire
    else if (values.valveMeasure && values.gradient && values.velocity) {
        if (values.valveMeasure < 20 && values.gradient >= 40) {
            diagnosis = "Rétrécissement Pulmonaire sévère (rétrécissement de la valve pulmonaire avec hypertension pulmonaire)";
            conduct = "Évaluation pour une intervention chirurgicale.";
            echocardiographyReport = `La surface de la valve pulmonaire est de ${values.valveMeasure} mm² avec un gradient de ${values.gradient} mmHg et une vitesse de flux de ${values.velocity} m/s.`;
        } else {
            diagnosis = "Régurgitation pulmonaire modérée.";
            conduct = "Surveillance et gestion médicale.";
            echocardiographyReport = `La surface de la valve pulmonaire est de ${values.valveMeasure} mm² avec un gradient de ${values.gradient} mmHg et une vitesse de flux de ${values.velocity} m/s.`;
        }
    }

    // Mise à jour de l'affichage du diagnostic
    document.getElementById('diagnostic-text').innerText = diagnosis;
    document.getElementById('conduct-text').innerText = conduct;
    document.getElementById('echocardiography-report').innerText = echocardiographyReport;
}

// Fonction pour réinitialiser les données et démarrer une nouvelle session
function newSession() {
    // Effacer les données de la session
    sessionStorage.clear();

    // Réinitialiser l'interface
    document.getElementById('valvulopathy-selection').value = '';
    document.getElementById('measurements-inputs').innerHTML = '';
    document.getElementById('diagnostic-text').innerText = 'Aucune donnée enregistrée';
    document.getElementById('conduct-text').innerText = '';
    document.getElementById('echocardiography-report').innerText = '';
    document.getElementById('patient-name').value = '';
    document.getElementById('patient-age').value = '';
    document.getElementById('patient-weight').value = '';
    document.getElementById('patient-height').value = '';
    document.getElementById('body-surface-area').value = '';

    alert("La session a été réinitialisée. Commencez un nouvel examen.");
}

// Vérifier si des données existent déjà en session au chargement de la page
window.onload = function() {
    const storedData = sessionStorage.getItem('valveData');
    if (storedData) {
        const values = JSON.parse(storedData);
        const weight = parseFloat(document.getElementById('patient-weight').value);
        const height = parseFloat(document.getElementById('patient-height').value);
        const bodySurfaceArea = calculateBodySurfaceArea(weight, height);
        displayDiagnostic(values, bodySurfaceArea);
    }
};
           
