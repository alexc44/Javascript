/**Alexandre Cornette LP SIL
 * Exercice 1 javascript
 */

function mult(v){
  return function(e){
    return v*e;
  }
}


function sub(s){
    return function(e){
        return s-e;
    };
}

/**
 * adder est une fonction qui prend des arguments en paramètres
 * On retourne alors une fonction qui est l'addition de chaque arguments
 */
function adder(){
    var args = Array.prototype.slice.call(arguments);
    var add = 0; 
    return function(v){
             args.forEach(function(val, i){
				add += val(v);
             });
        return add;
   };
}


// Quelques tests

console.log(mult(3)(5)); // 15
console.log(mult(5)(4)); // 20
console.log(mult(-3)(5)); // -15


console.log(sub(0)(0)); // 0
console.log(sub(2)(2)); // 4
console.log(sub(3)(5)); // -2

console.log(adder()(0)); // 0
console.log(adder(mult(2))(1)); // 2
console.log(adder(mult(2), mult(2), mult(2))(1)); // 6
console.log(adder(mult(2), mult(2), sub(2))(1)); // 5