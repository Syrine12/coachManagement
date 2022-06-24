* 3-write a function called (multipleEvenIndexes) that takes an array of numbers, as an argument and returns an array of numbers, multiplied by two for even indexes.
 *
 * @param {Array<number>} array
 * @return {Array<number>}
 */
function multipleEvenIndexes(array) {
    for (var i= 0; i<array.length;i++) {
        if (i % 2 === 0) {
            array[i] *= 2
        }
    }
return array
}

Map will be like :
function each(coll, f) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            f(coll[i], i);
        }
    } else {
        for (var key in coll) {
            f(coll[key], key);
        }
    }
}
function map(array, f) {
    var acc = [];
    each(array, function (element, i) {
        acc.push(f(element, i));
    });
    return acc;
}

//____1___ We can rewrite the ages function from the warmup using map like this:
var people = [
    { name: { first: 'Grace', middle: 'B.', last: 'Hopper' }, age: 85 },
    { name: { first: 'Adele', last: 'Goldstine' }, age: 43 },
    { name: { first: 'Ada', last: 'Lovelace' }, age: 36 },
    { name: { first: 'Hedy', middle: 'E.', last: 'Lamarr' }, age: 85 },
    { name: { first: 'Ruchi', last: 'Sanghvi' }, age: 34 }
];
function ages(people) {
    return map(people, function (person) {
        if (person.age<50) {
                    return person.age;
        }
        else {return null}
    });
}
//Rewrite the functions firstNames, lastNames and fullNames using map as shown above.
function firstName (array) {
    return map(array,function (person){
return person.name.first
    })
}
function lastName(array) {
return map(array, function(person){
    return person.name.last
})
}
function fullNames (array){
return map(array, function(person){
    return person.name.first + person.name.last
})
}

2 éme méthode : 
function fullNames (array){
    var x = firstName(array)
    var y = lastName(array)

    for (var i=0; i<array.length;i++){
    x[i] += y[i]
  }
return x
}
//___2___Given the function abs that computes the absolute value, finish the invocation of map  that should compute the absolute value of each number in its array argument.
function abs(x) {
    if (x >= 0) {
        return x;
    }
    return -x;
}
map([1, -2, 37, -100, -8, 5], function(element){
    return abs(element)
});
// => [1, 2, 37, 100, 8, 5]
//HINT: To test this, it may be easiest to paste all of the above into a console.


//___3___We're going to write a function maximums that, given an array of arrays of numbers as an  argument, returns a new array containing the maximum number of each inner array. 
//That's a bit of a mouthful, so let's break it down:
// our argument would look like this: 
var sampleInput = [ // it's an array 
    [1, 3, 2], // of arrays of numbers 
    [4, 23, 100],
    [7, 6, 3, -2]
];
and we want to be able to use maximums to do this: 
maximums(sampleInput); // => [3, 100, 7] 
//Part One: Let's start by writing a function max that, when given an array of numbers computes the maximum number in that array. 
//You will want to use each for this. 
function max(numbers) {
var big = numbers[0]
each(numbers, function(x){
    if (big < x) {
        big = x
    }
})
return big
}
max([1, 3, 2]); // => 3 
max([4, 23, 100]); // => 100 

//Part Two: Now that you have a function that computes the the maximum number in an array of numbers, 
//use map to transform each array in the sampleInput into its maximum by completing the maximums function: 
function maximums(arrays) {
return map (arrays, function(element){
return max(element)
})
}