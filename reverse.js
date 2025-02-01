let str=" Today is monday";
let strrev=str.split('').reverse().join('');
console.log("The reverse of the string is "+strrev);
let rev=[]
for(let i=str.length-1;i>=0;i--){
rev+=str[i];

}
console.log(rev);