console.log("Todo List");

const button = document.querySelector('#btn');
const list = document.querySelector('#list');
const button2 = document.querySelector('#btn2');
ls = [];
let val = 0;


button.onclick = function(){
    let item = document.querySelector("#todo").value;
    ls.push(item);
    z = val+1;
    let text = document.createTextNode(item);
    let listItem = document.createElement('li');
    listItem.appendChild(text);
    list.appendChild(listItem);
    document.forms.myForm.reset();
    console.log(ls);


    button2.onclick = ()=>{
      list.removeChild(list.childNodes[z]);
      ls.shift();
     console.log(ls);
    }
  var l = JSON.stringify(ls);
  localStorage.setItem('ls',l);
  console.log(JSON.parse(localStorage['ls']));
}
// localStorage.setItem('ls','JASON.stringify(ls)');
// console.log(localStorage);
