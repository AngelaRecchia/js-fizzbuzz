/* Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi anche "Fizz" di fianco al numero e per i multipli di 5 stampi "Buzz". Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".  */
for (var i = 1; i <= 100; i++) {
    document.getElementById("text").innerHTML += i;

    // soluzione  1
    if ( i % 3 == 0 && i % 5 == 0) {
        document.getElementById("text").innerHTML += " FizzBuzz";
    } else if ( i % 3 == 0) {
        document.getElementById("text").innerHTML += " Fizz";
    } else if ( i % 5 == 0) {
        document.getElementById("text").innerHTML += " Buzz";
    } 

    // soluzione 2
    /* if ( i % 3 == 0) {
        document.getElementById("text").innerHTML += "Fizz";
    }
    if ( i % 5 == 0) {
        document.getElementById("text").innerHTML += "Buzz";
    }
 */
    document.getElementById("text").innerHTML += "</br>";
}