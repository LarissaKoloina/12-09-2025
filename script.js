/* GetElementById() : pour sélectionner un élément grâce à son ID unique.

- Exemple HTML : <button id="monBouton">Cliquez-moi</button>
- Exemple JS : const bouton = document.getElementById("monBouton");

querySelector() : c'est une méthode plus moderne et puissante. Elle sélectionne le premier élément qui correspond à un sélecteur CSS.

- Exemple HTML : <p class="texte">Mon paragraphe</p>
- Exemple JS : const paragraphe = document.querySelector(".texte");

querySelectorAll() : pour sélectionner tous les éléments qui correspondent à un sélecteur CSS. Elle renvoie une liste d'éléments.

- Exemple HTML : <li class="item">Item 1</li> <li class="item">Item 2</li>
- Exemple JS : const items = document.querySelectorAll(".item");  */

//Exemple :

// 1. Sélectionner l'élément
const monBouton = document.getElementById("monBouton");

// 2. Ajouter l'écouteur d'événement
monBouton.addEventListener("click", () => {
  alert("Le bouton a été cliqué !");
});

//Modifier le texte :
element.textContent = "Nouveau texte";

//Modifier le HTML :
element.innerHTML = "<strong>Texte en gras</strong>";

//Modifier les styles CSS :
element.style.color = "blue";

//Ajouter ou supprimer des classes CSS :
element.classList.add("ma-classe-css");
element.classList.remove("ma-classe-css");

/* Pour manipuler le contenu :
.textContent : Pour lire ou modifier le texte contenu dans un élément. Utile pour afficher du texte simple sans balises HTML.

.innerHTML : Pour lire ou modifier le contenu HTML d'un élément. Utile si tu veux ajouter des balises (comme <strong> ou <em>) à l'intérieur de l'élément.

.value : Pour accéder ou modifier la valeur d'un champ de formulaire (input, textarea, select).

Pour manipuler les styles et les classes :
.style : Te permet d'accéder aux propriétés CSS de l'élément. Par exemple, monElement.style.color = "red";.

.classList : Un objet qui contient des méthodes pour ajouter, enlever ou vérifier des classes CSS sur l'élément.

.classList.add('ma-classe') : Ajoute une classe.

.classList.remove('ma-classe') : Retire une classe.

.classList.toggle('ma-classe') : Active/désactive une classe (si elle est là, elle l'enlève ; sinon, elle l'ajoute).

Pour écouter les événements :
.addEventListener('evenement', fonction) : La méthode essentielle pour rendre ton site interactif. Elle "écoute" un événement sur l'élément (comme un 'click' ou un 'mouseover') et exécute une fonction en réponse.

Pour créer et gérer des éléments :
.appendChild(elementEnfant) : Ajoute un nouvel élément enfant à l'intérieur de l'élément parent.

.removeChild(elementEnfant) : Supprime un élément enfant. */

//RESUME :


// Sélection d'éléments : 
document.getElementById('id') : Sélectionne le premier élément avec l'ID spécifié. L'ID doit être unique.

document.querySelector('sélecteur CSS') : Sélectionne le premier élément qui correspond au sélecteur CSS. 

document.querySelectorAll('sélecteur CSS') : Sélectionne tous les éléments qui correspondent au sélecteur CSS et les retourne sous forme de liste (appelée NodeList).

// Manipulation du contenu
élément.textContent : Gère le texte à l'intérieur d'un élément, en ignorant les balises HTML. Idéal pour du texte simple.

élément.innerHTML : Gère le contenu HTML d'un élément, ce qui inclut le texte et les balises.

élément.value : Accède ou modifie la valeur d'un champ de formulaire, comme <input>, <textarea> ou <select>.

// Manipulation des classes et des styles
élément.style.propriétéCSS : Modifie une propriété CSS spécifique directement sur l'élément. Par exemple, élément.style.backgroundColor = 'blue'.

élément.classList.add('classe') : Ajoute une ou plusieurs classes CSS à l'élément.

élément.classList.remove('classe') : Retire une ou plusieurs classes CSS à l'élément.

élément.classList.toggle('classe') : Bascule la classe : elle l'ajoute si elle n'est pas présente et la retire si elle l'est déjà.

// Gestion des événements
élément.addEventListener('événement', fonction) : Écoute un événement (comme un clic, un survol de la souris, ou une frappe de clavier) et exécute une fonction lorsque cet événement se produit. C'est la base de l'interactivité.

Exemples d'événements courants : 'click', 'mouseover', 'submit'.

// Création et suppression d'éléments
document.createElement('balise') : Crée un nouvel élément HTML en mémoire, par exemple document.createElement('div').

parent.appendChild(enfant) : Ajoute un élément enfant à la fin de l'élément parent.

parent.removeChild(enfant) : Supprime un élément enfant de son parent.



console.log("Bienvenue sur mon site !");

// Changement de couleur au clic sur le header
document.querySelector('header').addEventListener('click', function() {
    this.style.color = this.style.color === 'cyan' ? 'white' : 'cyan';
});

// Animation sur les sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.addEventListener('mouseover', () => {
        section.style.transform = 'scale(1.02)';
        section.style.transition = 'transform 0.3s ease';
    });
    section.addEventListener('mouseout', () => {
        section.style.transform = 'scale(1)';
    });
});