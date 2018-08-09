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
 
 
 
 function product(numbers, callback) {
    callback(numbers);
 }
 setTimeout(function() { 
    product([8,7,5], function(numbers){
    console.log(numbers.reduce(function(a, b){
        return a * b;
    }, 1))
    })
}, 1000);