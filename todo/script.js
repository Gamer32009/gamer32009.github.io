let todos = []
function addToDo(){
    let inpf = document.getElementById("inputfield")
    createToDo(inpf.value);
    inpf.value = "";
}
function createToDo(todot,noalert=false){
    if (todot){
        let outar = document.getElementById("outputarea");
        //console.log(todot);
        outar.innerHTML += `<div id="${todot}">
        <span class="mdl-chip mdl-chip--contact mdl-chip--deletable" >
        <img class="mdl-chip__contact" src="/todo/img/hook-1727484_1280.png"></img>
        <span class="mdl-chip__text">${todot}</span> 
        <button onclick="deleteTODO('${todot}')" class="mdl-chip__action">
            <i class="material-icons">cancel</i>
        </button> 
    </span>
    
    </div>
    <br id="${todot}br">`;
    console.log(outar.innerHTML);
    todos.push(todot);
        
    
        savetodos();
        }
        else if (!noalert){
            alert("You can't create an empty todo.")
        }
}
function deleteTODO(todot){
    let todo = document.getElementById(todot);
    todo.remove();
    console.log(todo+"br");
    todo = document.getElementById(todot+"br");
    console.log(todo+"br");
    todo.remove();
    todos = todos.filter(e => e !== todot)
    savetodos();
}


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function loadToDO(){
    
    
  let apsertd = getCookie("ToDo's").split('|');
  let i = 0;
    //alert(apsertd.length)
    while (i < apsertd.length) {
    //alert(i)
    createToDo(apsertd[i],noalert=true);
    i++;

    if (i >= apsertd.length){
        break;
    }
  } 
}

function savetodos(){
    console.log(typeof todos);
    setCookie(`ToDo's`,todos.join('|'),365);
    console.log('Succestfully saved todos');
}