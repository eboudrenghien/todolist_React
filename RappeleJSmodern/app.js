// Fonctions fléchées et fonctions classiques

// fonction classique:
function foo() {
    console.log("a");
}
foo();

// fonction fléchée
const foo_1 = () => {
    console.log("a");
}
foo_1();

// ou alors
const foo_2 = (a,b) =>{
    return a + b;
}
console.log(foo_2(5,9));

// avec la fonction fléchée on peut retirer les accolades et également return ce qui donne:
const foo_3 = (a,b) => a + b;
console.log(foo_3(5,9))

// 
const myObj = {
    foo_4: function (){
        console.log('Bonjour')
    }
}
myObj.foo_4()

// fonction raccourci
const myObjet = {
    foo_5(){
        console.log('Bonjour')
    }
}
myObjet.foo_5()

// Spread & Rest

//SPREAD OPERATOR, l'utiliser pour utiliser les éléments d'un tableau avec une méthode,
const array = [4,5,6];
console.log(...array);
// mais également pour copié un tableau dans un autre tableau.
const array_1 = [... array, 7]
console.log(array_1)
// et pour les objets ?
const myObj_1 = {
    a: 1,
    b: 2,
    c: 3
}
const myObj_2 = {
    ...myObj_1,
    d: 4
}
console.log(myObj_2)

// REST OPERATOR
function add(a,b){
    return a + b;
}
console.log(add(4,4));

// utilisation du rest opérator
function add_1(...args){
    console.log (args);
    let result = 0;
    for (const arg of args){
        result += arg;
    }
    return result;
}

console.log(add_1(2,2))
// l'exemple au-dessus, montre qu'on a additionné tous les arguments dont 2, 2 = 4

// LES FONCTIONS PURES : Une fonction pure c'est une fonction qui retourne tout le temps la même chose.
let x = 2;

// Avec cette fonction, si tu fais à chaque fois console log, y sera additionné au résultat précédent, par exemple 2,2 = 4; 4,2= 6; 6,2=8 et ainsi de suite.
const add1 = y => x += y;
// description
console.log(add1(2))

// fonction pure
// alors qu'avec cette fonction, le résultat sera toujours 2 
const add2= (a,b) => a + b;
// description
console.log(add2(2,2))

// LES FONCTIONS D'ORDRE SUPÉRIEUR

const rawArr = [8, 898, 588, 96242, 2014, 65, 87, 6]
// const newArr = []

// // si i est inférieur à 100, 
// // alors je veux qu'elle m'affiche les nombres supérieur à 100 dans le tableau NewArr.
// for (let i = 0; i < rawArr.length; i++){
//     if (rawArr[i] > 100){
//         newArr.push(rawArr[i]);
//     }
// }
// console.log(newArr)
// fn = fonction
function suppArr(arr, fn) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
 const arrSup100 = suppArr(rawArr, (item) =>{
    if (item > 100) {
    return item;
    }  
 })
 console.log(arrSup100);

 // FONCTION D'ORDRE SUPÉRIEUR DES TABLEAUX
 const arr = [1, 2, 3, 4, 5, 6]
 const mapedArr = arr.map (x => x +10);
 // 1 + 10 = 11; 2 + 10 = 12 et ainsi de suite
 console.log(mapedArr)
 
 const filteredArr = arr.filter(num => num > 3)
 // filtre le tableau supérieur à 3
 console.log(filteredArr)

 arr.forEach (val => {
     // affiche les nombres à partir de 20, en retirant à chaque fois un nombre du tableau
     console.log(val - 20);
 })

 // DESTRUCTURING

 const pays = {
     nom : "Italie",
     pop : 60
 }

 const {nom, pop} = pays;
//  console.log(nom, pop);
 // onn peut également faire:
 const data = ({nom}) => nom;
 console.log(data(pays));

 // fonction avec des tableaux
 const arr3 = [1, 2, 3]
 const [a, b, c] = arr;
 console.log(a, b, c);