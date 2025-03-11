var number = 3;//number
document.writeln("Число: "+number+" "+typeof number);
number = "3";//Строка
document.writeln("Строка: "+number+" "+typeof number);
number = 3n
document.writeln("Большое число: "+number+" "+typeof number);
document.writeln(`Интерполяция: ${number}`);

document.body.style.backgroundColor = 'red';
setTimeout(() => document.body.style.backgroundColor = '', 3000);