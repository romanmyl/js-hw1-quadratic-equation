//alert('hallow!');
//console.log('hallow2');
//document.write('hallow3');

var a = Number(prompt('The formula of quadratic equation is: A*X^2 + B*X + C = 0. Input argument A'));
var b = Number(prompt('The formula of quadratic equation is: A*X^2 + B*X + C = 0. Input argument B'));
var c = Number(prompt('The formula of quadratic equation is: A*X^2 + B*X + C = 0. Input argument C'));

var d = b*b - 4*a*c;
var result0;
var result1;
var result2;
var resultplus1;
var resultplus2;
var conditions = 'The solution of quadratic equation: A*X^2 + B*X + C = 0, <br \/> <br \/> provided that A=' + a + '; B=' + b + '; C=' + c + ':<br \/> <br \/>';


resultplus1 = 'X1 = ' + (-b + Math.sqrt(d)) / (2 * a);
resultplus2 = 'X2 = ' + (-b - Math.sqrt(d)) / (2 * a);

result0 = conditions + 'Discriminant is less than zero, so the equation has no solutions';
result1 = conditions + 'Discriminant is zero, so the equation has only one solution: <br \/> <br \/>' + resultplus1;
result2 = conditions + resultplus1 + '; <br \/> <br \/>' +resultplus2;

function result (d) {
    if (d < 0) {
        return document.write(result0);
         } else { 
             if (d == 0) {
                 return document.write(result1);
                } 
                return document.write(result2);
            }
         };
         
result(d);