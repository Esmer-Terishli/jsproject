// let wrapperinput = document.querySelector(".wrapper-input");
// let addnew = document.querySelector(".add-new");
// let todolist = document.querySelector(".todo-list");

// addnew.addEventListener('click', addtodo);

// function addtodo(event){
//     event.preventDefault();
// }

// let tododiv = document.createElement("div");
// tododiv.classList.add("todo");

// let newtodo= document.createElement('li');
// newtodo.innerText='hello';
// newtodo.classList.add('todo-item');
// tododiv.appendChild(newtodo);



let addnew = document.querySelector(".add-new");
addnew.addEventListener('click', function(event){
    let newlist = document.createElement('li');
    // let newbutton = document.querySelector('.wrapper-delete');
    let button = document.createElement('i');
    button.classList.add('fa-solid fa-circle-xmark');
    button.style.backgroundColor='black'
    button.style.width = '20px'
    button.style.height = '20px'
    let ul  = document.querySelector('ul')
    ul.style.justifyContent = 'space-between'

    let wrapperinput= document.querySelector(".wrapper-input");

    if(wrapperinput.value==""){
        alert("error");
    }
    else{
    newlist.innerText=wrapperinput.value;
    let todolist=document.querySelector(".todo-list");
    newlist.append(button);
    todolist.append(newlist);

 
   

    wrapperinput.value="";
    }
    
})




let remove = document.querySelector(".wrapper-delete");
remove.addEventListener('click', function(e){
    e.currentTarget.parentElement.remove();

})






// function removeTask() {
//     event.currentTarget.parentElement.remove();
//   }


// let remove = document.querySelector("wrapper-delete");
// remove.addEventListener('click', function(e){

// })







// let wrapperinput = document.querySelector(".wrapper-input");
// let addnew = document.querySelector(".add-new");
// let todolist = document.querySelector(".todo-list");

// addnew.addEventListener('click', addtodo);

// function addtodo(event){
//     event.preventDefault();
// }

// let tododiv = document.createElement("div");
// tododiv.classList.add("todo");

// let newtodo= document.createElement('li');
// newtodo.innerText='hello';
// newtodo.classList.add('todo-item');
// tododiv.appendChild(newtodo);



let addnew = document.querySelector(".add-new");
addnew.addEventListener('click', function(event){
    let newlist = document.createElement('li');
    // let newbutton = document.querySelector('.wrapper-delete');
    let button = document.createElement('i');
    button.className='fa-solid fa-circle-xmark delname';
    // button.className='delname';
    button.style.color  ='black';
    button.style.width = '20px';
    button.style.height = '20px';
    let ul  = document.querySelector('ul');
    ul.style.justifyContent = 'space-between';

    let wrapperinput= document.querySelector(".wrapper-input");

    if(wrapperinput.value==""){
        alert("error");
    }
    else{
    newlist.innerText=wrapperinput.value;
    let todolist=document.querySelector(".todo-list");
    newlist.append(button);
    todolist.append(newlist);

    button.addEventListener('click', function(e){
        e.target.parentElement.remove();
    
    })

    wrapperinput.value="";
    }
    

    // let remove = document.querySelector(".delname");

})











// function removeTask() {
//     event.currentTarget.parentElement.remove();
//   }


// let remove = document.querySelector("wrapper-delete");
// remove.addEventListener('click', function(e){

// })





var btn = document.querySelector('.add-new');
var remove = document.querySelector('.draggable');

function dragStart(e) {
  this.style.opacity = '0.4';
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
};

function dragEnter(e) {
  this.classList.add('over');
}

function dragLeave(e) {
  e.stopPropagation();
  this.classList.remove('over');
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function dragDrop(e) {
  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
}

function dragEnd(e) {
  var listItens = document.querySelectorAll('.draggable');
  [].forEach.call(listItens, function(item) {
    item.classList.remove('over');
  });
  this.style.opacity = '1';
}

function addEventsDragAndDrop(el) {
  el.addEventListener('dragstart', dragStart, false);
  el.addEventListener('dragenter', dragEnter, false);
  el.addEventListener('dragover', dragOver, false);
  el.addEventListener('dragleave', dragLeave, false);
  el.addEventListener('drop', dragDrop, false);
  el.addEventListener('dragend', dragEnd, false);
}

var listItens = document.querySelectorAll('.draggable');
[].forEach.call(listItens, function(item) {
  addEventsDragAndDrop(item);
});

function addNewItem() {
  var newItem = document.querySelector('.input').value;
  if (newItem != '') {
    document.querySelector('.input').value = '';
    var li = document.createElement('li');
    var attr = document.createAttribute('draggable');
    var ul = document.querySelector('ul');
    li.className = 'draggable';
    attr.value = 'true';
    li.setAttributeNode(attr);
    li.appendChild(document.createTextNode(newItem));
    ul.appendChild(li);
    addEventsDragAndDrop(li);
  }
}

btn.addEventListener('click', addNewItem);















// let wrapperinput = document.querySelector(".wrapper-input");
// let addnew = document.querySelector(".add-new");
// let todolist = document.querySelector(".todo-list");

// addnew.addEventListener('click', addtodo);

// function addtodo(event){
//     event.preventDefault();
// }

// let tododiv = document.createElement("div");
// tododiv.classList.add("todo");

// let newtodo= document.createElement('li');
// newtodo.innerText='hello';
// newtodo.classList.add('todo-item');
// tododiv.appendChild(newtodo);



let addnew = document.querySelector(".add-new");
addnew.addEventListener('click', function(event){
    let newlist = document.createElement('li');
    // let newbutton = document.querySelector('.wrapper-delete');
    let button = document.createElement('i');
    button.className='fa-solid fa-circle-xmark delname';
    // button.className='delname';
    button.style.color  ='black';
    button.style.width = '20px';
    button.style.height = '20px';
    button.style.position = 'absolute';
    button.style.right = '2%';
    // button.style.top = '30%';

    let ul  = document.querySelector('ul');
    ul.style.justifyContent = 'space-between';

    let wrapperinput= document.querySelector(".wrapper-input");


    if(wrapperinput.value==""){
        alert("error");
    }
    else{
    newlist.innerText=wrapperinput.value;
    let todolist=document.querySelector(".todo-list");
    newlist.append(button);
    todolist.append(newlist);

    button.addEventListener('click', function(e){
        e.target.parentElement.remove();
    
    })

    wrapperinput.value="";
    }
    

    // let remove = document.querySelector(".delname");

})


let sortlist = document.querySelector(".sort-list");

sortlist.addEventListener('click', function(a){
    let list = document.querySelector(".todo-list").children; 
    let tosort = [];

    for (let i = 0; i < list.length; i++) {
        tosort[i] = list[i].innerText; 
    } 
    tosort.sort() 

    for(let i= 0; i< list.length; i++){
        list[i].innerText = tosort[i]
    }


    let counter;
    if(sortlist %2 != 0){
        
    }
})




















// function removeTask() {
//     event.currentTarget.parentElement.remove();
//   }


// let remove = document.querySelector("wrapper-delete");
// remove.addEventListener('click', function(e){

// })



////////////////////////////////



// let wrapperinput = document.querySelector(".wrapper-input");
// let addnew = document.querySelector(".add-new");
// let todolist = document.querySelector(".todo-list");

// addnew.addEventListener('click', addtodo);

// function addtodo(event){
//     event.preventDefault();
// }

// let tododiv = document.createElement("div");
// tododiv.classList.add("todo");

// let newtodo= document.createElement('li');
// newtodo.innerText='hello';
// newtodo.classList.add('todo-item');
// tododiv.appendChild(newtodo);



let addnew = document.querySelector(".add-new");
addnew.addEventListener('click', function (event) {
    let newlist = document.createElement('li');
    newlist.className ='list-li'
    newlist.style.position="relative"
    // let newbutton = document.querySelector('.wrapper-delete');
    let button = document.createElement('i');
    button.className = 'fa-solid fa-circle-xmark delname';
    // button.className='delname';
    button.style.color = 'black';
    button.style.width = '20px';
    button.style.height = '20px';
    button.style.position = 'absolute';
    button.style.right = '2%';
    // button.style.top = '30%';

    let ul = document.querySelector('ul');
    ul.style.justifyContent = 'space-between';

    let wrapperinput = document.querySelector(".wrapper-input");


    if (wrapperinput.value == "") {
        alert("error");
    }
    else {
        newlist.innerText = wrapperinput.value;
        let todolist = document.querySelector(".todo-list");
        newlist.append(button);
        todolist.append(newlist);

        button.addEventListener('click', function (e) {
            e.target.parentElement.remove();

        })

        wrapperinput.value = "";
    }


    // let remove = document.querySelector(".delname");

})


let sortlist = document.querySelector(".sort-list");
let counter = 1;

sortlist.addEventListener('click', function (a) {
    let list = document.querySelector(".todo-list").children;
    let tosort = [];

    for (let i = 0; i < list.length; i++) {
        tosort[i] = list[i].innerText;
    }

    if (counter%2 != 0) {
        tosort.sort() 
        counter++; 
    } else {
        tosort.sort().reverse();    
        counter++;

    }

    for (let i = 0; i < list.length; i++) {
        list[i].innerHTML = `${tosort[i]}   <button class="wrapper-delete" type="submit"><i class="fa-solid fa-circle-xmark"></i></button>`
          console.log(list[i]);
    }




})




















// function removeTask() {
//     event.currentTarget.parentElement.remove();
//   }


// let remove = document.querySelector("wrapper-delete");
// remove.addEventListener('click', function(e){

// })






/////////////vacibbbbb
for (let i = 0; i < list.length; i++) {
    // let abc= list[i].innerHTML;
    
    list[i].innerHTML = `${tosort[i]}   <button class="wrapper-delete" type="submit"><i class="fa-solid fa-circle-xmark"></i></button>`;


    let btn = document.createElement('i');
    btn.className = 'fa-solid fa-circle-xmark';

    list[i].addEventListener('click', function (c) {
        c.target.remove();

    })