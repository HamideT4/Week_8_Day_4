// On recupère le nombre dont on veut calculer la factorielle
number = prompt("De quel nombre veux-tu calculer la factorielle ?");

// On initialise la factorielle à 1
factorial = 1

for(let index = 1; index <= number; index++){

    //On calcule la factorielle par récursivité
    factorial = factorial*index

} 

// On affiche le résultat
console.log(`Le resultat est : ${factorial}`)

