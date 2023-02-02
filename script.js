console.log("ciao");

// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi (quindi multipli di 15) “FizzBuzz”.


 console.log("Scrivo 100 numeri da 1 a 100");

//  for (let i = 1; i <= 100; i++) {
    
//    let number = i;
//    console.log(number)

// }

// console.log("aggiungo la scritta 'fizz' al posto dei multipli di 3");

// for (let i = 1; i <= 100; i++) {

//     let number = i;


//     if (number % 3 == 0) {

//         console.log("fizz");

//     }  else console.log(number);

// }


console.log("aggiungo la scritta 'fizz' al posto dei multipli di 3 e 'buzz' ai multipli di 5, per i numeri multipli sia di 3 che di 5 stampi 'FizzBuzz'");

for (let i = 1; i <= 100; i++) {

    let number = i;

    const fizz = ("Fizz");

    const buzz = ("Buzz");

    let fizzBuzz = ("FizzBuzz");

    if (number % 15 == 0 ) {

        console.log(fizzBuzz);

    } else if (number % 5 == 0){

        console.log(fizz);

    } else if (number % 3 == 0) {

        console.log(buzz);

    } else console.log(number);
    

}
