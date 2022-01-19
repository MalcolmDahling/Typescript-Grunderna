let firstName:string = 'Malcolm';
let age:number = 28;

console.log('Name: ' + firstName + ', Age: ' + age);




let numArr: number[] = [1, 2, 3, 4, 5];

for(let i = 0; i < numArr.length; i++){
    console.log(numArr[i]);

    let p = document.createElement('p');
    p.innerText = numArr[i].toString();
    document.body.appendChild(p);
}



let bool:boolean = true;
console.log(bool);


let strArr:string[] = ['a', 'b', 'c'];
for (let i = 0; i < strArr.length; i++) {
    console.log(strArr[i]);
}




