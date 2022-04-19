let addnew = document.querySelector(".add-new");
addnew.addEventListener('click', function (event) {
    let newlist = document.createElement('li');
    newlist.className ='list-li'
    newlist.style.position="relative"
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
        
        list[i].innerHTML = `${tosort[i]}   <button class="wrapper-delete" type="submit"><i class="fa-solid fa-circle-xmark tt"></i></button>`;

        list[i].children[0].addEventListener('click', function (c) {
            c.target.parentElement.parentElement.remove();
        })
    
    }

})










