

const user={
}
for (let i = 0; i<10; i++) {
  let name =prompt('Ismingizni kiriting', 'name')
  let age =+prompt('Yoshingizni kiriting',20)
const person={
  name:name,
  age:age
}
user[i+1] = person;

}
console.log(user)
  


 Object()

  const obj = cartObj();
let str = '';
let total = 0;
let i=0;
for (const key in obj) {
  i++;
  str+=key+' '+obj[key].info;
  if (i!=Object.keys(obj).length) {
    str+=', '
  }
  total+=obj[key].price;
 
  }


console.log(str+'. Total price (including delivery): '+(total+9000));