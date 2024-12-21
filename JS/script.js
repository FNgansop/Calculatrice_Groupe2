let ecran1 = '';
let  ecran2 = '';

/**
 * Fonction qui affiche un nombre à l'écran1
 * @param {number} valeur 
 */
function afficherEcran1(valeur) {
    ecran1+=valeur;
    document.getElementById('ecran1').value = ecran1;
    if(estUnNombre(valeur)){
        mettreAJourResultat();
    }
}

/**
 * Fonction qui ajoute l'opérateur qu'on souhaite utliser
 * @param {operator} op 
 */
function afficherOperateur(op) {
    afficherEcran1(' '+ op+ ' ');
}

/**
 * Fonction qui verifie si une expression est un nombre
 * @param {number} valeur 
 * @returns {boolean}
 */
function estUnNombre(valeur){
    return !isNaN(parseFloat(valeur))
}

/**
 * Fonction qui efface complètement le contenu des deux écrans
 */
function effacer(){
    ecran1 = '';
    ecran2 = '';
    document.getElementById('ecran1').value = '0';
    document.getElementById('ecran2').value = '0';
}

/**
 * Fonction qui efface le dernier caractère de l'écran 1
 */
function effacerDernier(){
    ecran1 = ecran1.slice(0, -1);
    document.getElementById('ecran1').value = ecran1;
    mettreAJourResultat()
}

/**
 * Fonction qui calcule le résultat
 */
function calculerResultat() {
    try {
        const result = eval(ecran1);
        ecran2 = result;
        document.getElementById('ecran2').value = ecran2;
        ajouterHistorique(ecran1 + ' = '  + ecran2)
    } catch{
        document.getElementById('ecran2').value = 'ERROR';
    }
}

/**
 * Fonction qui permet de mettre à jour le résultat
 */
function mettreAJourResultat() {
    try {
        const result = eval(ecran1);
        document.getElementById('ecran2').value = result;
    } catch{
        document.getElementById('ecran2').value = 'ERROR';
    }
}

/**
 * Fonction qui ajoute une valeur à l'historique
 */
function ajouterHistorique(valeur) {
    const listeHistorique = document.getElementById('listeHistorique');
    const li = document.createElement('li');
    li.textContent = valeur;
    listeHistorique.appendChild(li);
}

/**
 * Fonction qui calcule la racine carrée d'un nombre positif
 * @returns 
 */
function racineCarree(){
    try {
        const valeurCourante =  eval(ecran1);
        if(parseFloat(valeurCourante)<0){
            document.getElementById('ecran2').value = 'ERROR'
            return
        }
        const resultat = Math.sqrt(valeurCourante);
        ecran1 = resultat.toString();
        document.getElementById('ecran1').value = ecran1;
        document.getElementById('ecran2').value = resultat;
        ajouterHistorique('√('+valeurCourante+')='+resultat);
    } catch (error) {
        document.getElementById('ecran2').value = 'ERROR'
    }
}

function inverse(){
    try {
        const valeurCourante =  eval(ecran1);
        const resultat = 1/valeurCourante;
        if(isNaN(resultat)){
            document.getElementById('ecran2').value = 'ERROR'
            return
        }
        ecran1 = resultat.toString();
        document.getElementById('ecran1').value = ecran1;
        document.getElementById('ecran2').value = resultat;
        ajouterHistorique('(1/'+valeurCourante+')='+resultat);
    } catch (error) {
        document.getElementById('ecran2').value = 'ERROR'
    }
}

function log(){
    try {
        const valeurCourante =  eval(ecran1);
        if(parseFloat(valeurCourante)<=0){
            document.getElementById('ecran2').value = 'ERROR'
            return
        }
        const resultat = Math.log10(valeurCourante);
        ecran1 = resultat.toString();
        document.getElementById('ecran1').value = ecran1;
        document.getElementById('ecran2').value = resultat;
        ajouterHistorique('log('+valeurCourante+')='+resultat);
    } catch (error) {
        document.getElementById('ecran2').value = 'ERROR'
    }
}

function ln(){
    try {
        const valeurCourante =  eval(ecran1);
        if(parseFloat(valeurCourante)<=0){
            document.getElementById('ecran2').value = 'ERROR'
            return
        }
        const resultat = Math.log(valeurCourante);
        ecran1 = resultat.toString();
        document.getElementById('ecran1').value = ecran1;
        document.getElementById('ecran2').value = resultat;
        ajouterHistorique('ln('+valeurCourante+')='+resultat);
    } catch (error) {
        document.getElementById('ecran2').value = 'ERROR'
    }
}

function exp(){
    try {
        const valeurCourante =  eval(ecran1);
        const resultat = Math.exp(valeurCourante);
        ecran1 = resultat.toString();
        document.getElementById('ecran1').value = ecran1;
        document.getElementById('ecran2').value = resultat;
        ajouterHistorique('exp('+valeurCourante+')='+resultat);
    } catch (error) {
        document.getElementById('ecran2').value = 'ERROR'
    }
}

function carre(){
    try {
        const valeurCourante =  eval(ecran1);
        const resultat = Math.pow(valeurCourante, 2);
        ecran1 = resultat.toString();
        document.getElementById('ecran1').value = ecran1;
        document.getElementById('ecran2').value = resultat;
        ajouterHistorique('('+valeurCourante+')^2 = '+resultat);
    } catch (error) {
        document.getElementById('ecran2').value = 'ERROR'
    }
}

function PuissanceDe10(){
    try {
        const valeurCourante =  eval(ecran1);
        const resultat = Math.pow(10, valeurCourante);
        ecran1 = resultat.toString();
        document.getElementById('ecran1').value = ecran1;
        document.getElementById('ecran2').value = resultat;
        ajouterHistorique('10^('+valeurCourante+') = '+resultat);
    } catch (error) {
        document.getElementById('ecran2').value = 'ERROR'
    }
}

function factorielle() {
    const valeurCourante =  eval(ecran1);
    alert(valeurCourante)
    const n = parseInt(eval(ecran1));
    const m = parseFloat(eval(ecran1));
    if (parseFloat(valeurCourante) < 0 || m != n) {
        document.getElementById('ecran2').value = 'ERROR';
    }
    const resultat = facto(valeurCourante);
    ecran1 = resultat.toString();
    document.getElementById('ecran1').value = ecran1;
    document.getElementById('ecran2').value = resultat;
    ajouterHistorique(valeurCourante+'! = '+resultat);
}

function facto(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    if(n<0){
        return 'Error'
    }
    let resultat = 1;
    for (let i = 2; i <= n; i++) {
        resultat *= i;
    }
    return resultat;
}





