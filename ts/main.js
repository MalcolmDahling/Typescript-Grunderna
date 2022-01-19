var firstName = 'Malcolm';
var age = 28;
console.log('Name: ' + firstName + ', Age: ' + age);
var numArr = [1, 2, 3, 4, 5];
for (var i = 0; i < numArr.length; i++) {
    console.log(numArr[i]);
    var p = document.createElement('p');
    p.innerText = numArr[i].toString();
    document.body.appendChild(p);
}
var bool = true;
console.log(bool);
var strArr = ['a', 'b', 'c'];
for (var i = 0; i < strArr.length; i++) {
    console.log(strArr[i]);
}
