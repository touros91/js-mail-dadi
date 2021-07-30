// genero un numero casuale tra 1 e 6 per il giocatore  

var giocatore = Math.floor(Math.random() * 6) + 1;

// genero un numero casuale tra 1 e 6 per il computer 

var computer = Math.floor(Math.random() * 6) + 1;

// Stabilisco il vincitore, in base a chi fa il punteggio più alto 

if (giocatore > computer) {
    document.getElementById("giocatore").innerHTML += giocatore + " HAI VINTO!";
    document.getElementById("giocatore").style.color = "green";
    document.getElementById("computer").innerHTML += computer;
} else if (computer > giocatore) {
    document.getElementById("computer").innerHTML += computer;
    document.getElementById("giocatore").innerHTML += giocatore + " Hai perso! Oh nooo il computer ha vinto! Ritenta sarai più fortunato";
    document.getElementById("giocatore").style.color = "red";  
} else {
    document.getElementById("giocatore").innerHTML += giocatore;
    document.getElementById("computer").innerHTML += computer;
    document.getElementById("pareggio").innerHTML += "Pareggio! Ripetere il lancio!";
    // alert("Pareggio! Ripetere il lancio!");
}
