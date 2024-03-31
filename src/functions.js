/**
 * FOnction permettant de définir un cookie
 *
 * @param valeur
 * @param jours
 * @param nom
 */
function setCookie(valeur, jours, nom = "chimpokomon") {
    const date = new Date();
    date.setTime(date.getTime() + (jours * 24 * 60 * 60 * 1000));
    const expiration = "expires=" + date.toUTCString();
    const valeurCookie = typeof valeur === "object" ? JSON.stringify(valeur) : valeur;

    document.cookie = nom + "=" + valeurCookie + ";" + expiration + ";path=/";
}

/**
 * Fonction permettant de récupérer un cookie
 *
 * @param nom
 * @returns {any|boolean}
 */
function getCookie(nom = "chimpokomon") {
    const nomCookie = nom + "=";
    const cookies = decodeURIComponent(document.cookie).split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.indexOf(nomCookie) === 0) {
            try {
                return cookie.substring(nomCookie.length, cookie.length);
            } catch (error) {
                console.log(error)
                return false;
            }
        }
    }
    return false;
}

/**
 * Fonction de suppression du cookie
 *
 * @param name
 */
function deleteCookie(name = "chimpokomon") {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

export default {setCookie, getCookie, deleteCookie}