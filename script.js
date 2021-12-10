/*
QUAND je clique sur le bouton dans .spoiler
ALORS 
  J'ajoute la classe .visible à l'élément suivant 
*/


let button = document.querySelector(".spoiler button") // Je seléctionne tous les éléments button dans la classe spoiler
button.addEventListener('click', function() {
    this.nextElementSibling.classList.add('visible') // J'ajoute la classe visible à l'élément suivant
    this.parentNode.removeChild(this)
})