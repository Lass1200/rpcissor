function getComputerChoice() {
    const randomNumber = Math.random(); // Génère un nombre entre 0 (inclus) et 1 (exclus)

    if (randomNumber < 0.33) {
        return "pierre";
    } else if (randomNumber < 0.66) {
        return "papier";
    } else {
        return "ciseaux";
    }
}

// Test de la fonction getComputerChoice
console.log(getComputerChoice());
function getHumanChoice() {
    let choix = prompt("Tu choisis quoi ? (pierre, papier ou ciseaux)").toLowerCase(); // Met tout en minuscules

    // Valider l'entrée utilisateur
    if (choix === "pierre" || choix === "papier" || choix === "ciseaux") {
        return choix;
    } else {
        alert("Choix invalide, veuillez entrer 'pierre', 'papier' ou 'ciseaux'.");
        return getHumanChoice(); // Redemander le choix si l'utilisateur fait une erreur
    }
}

// Test de la fonction getHumanChoice
console.log(getHumanChoice());
