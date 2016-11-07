//alert('hallow!');
//console.log('hallow2');
//document.write('hallow3');

var a = Number(prompt('Fonmula quadratic equation: A*х^2 + B*x + C = 0; input argument A'));
var b = Number(prompt('Fonmula quadratic equation: A*х^2 + B*x + C = 0; input argument B'));
var c = Number(prompt('Fonmula quadratic equation: A*х^2 + B*x + C = 0; input argument C'));

var d = b*b - 4*a*c;
var result0;
var result1;
var result2;
var resultplus1;
var resultplus2;

resultplus1 = 'x1 = ' + (-b + Math.sqrt(d)) / (2 * a);
resultplus2 = 'x2 = ' + (-b - Math.sqrt(d)) / (2 * a);
var conditions = 'The solution of quadratic equation: A*х^2 + B*x + C = 0, <br \/> <br \/> provided that A=' + a + '; B=' + b + '; C=' + c + ':<br \/> <br \/>';
var result0 = conditions + 'Equation has no solutions';
var result1 = conditions + 'Discriminant is zero, so the equation has only one solution: ' + resultplus1;
var result2 = conditions + resultplus1 + '; ' +resultplus2;

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