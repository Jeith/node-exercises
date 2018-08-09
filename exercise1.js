function add(x, y, callback) {
    var result = x + y; 
    callback(result);
 } 
 function subtract(x, y, callback) { 
    var result = x - y; 
    callback(result);
 } 
 add(5, 5, function(result){
    subtract(result, 2, function(final_result){
    console.log(final_result);
    });
});



 function greeting(person, callback) { 
    var spanishGreeting = 'Hola, ' + person + '!'; 
    callback(spanishGreeting);
 }
 greeting("Keith", function(spanishGreeting){
     console.log(spanishGreeting);
 })
 
 
 function product(a, b, callback) { 
    var numbers = [a, b]; 
    callback(numbers);
 }
 function reduceIt(array, callback){
    var reducedNum = array.reduce(numbers, 1);
    callback(reducedNum);
 }
 product(2, 2, function(numbers){
    reduceIt(numbers, function(reducedNum){
        console.log(reducedNum);
    });
 });
 
