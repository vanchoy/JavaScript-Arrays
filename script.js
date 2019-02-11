var names = ['Ivan', 'Lily', 'Peter'];
var years = new Array(1990, 1969, 1948);

console.log(names[1]);

names[1] = 'Gosho';
console.log(names);

var ivan = ['Ivan', 'Smith', 1990, 'designer', false];

ivan.push('blue');
ivan.unshift('Mr.');
ivan.pop();
ivan.shift();

console.log(ivan);

console.log(ivan.indexOf('Smith')); //alert(ivan.indexOf('Smith'));

if (ivan.indexOf('teacher') === -1) {
    console.log('Ivan is NOT a teacher.');
}
