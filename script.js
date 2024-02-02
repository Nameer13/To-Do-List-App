const inputbox = document.getElementById("input-box")
const listcontainer = document.getElementById("list-container")

function addtask(){
 if(inputbox.value ===''){
    alert("you must write something")
 }
 else{
    let li =document.createElement("li")
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML ="\u00d7";
    li.appendChild(span);
 }
  inputbox.value = " ";
  saveData();
}

listcontainer.addEventListener("click",function(e){
 if(e.target.tagname === "li"){
 e.target.classlist.toggle("checked")
 }                
 else if(e.target.tagname ==="SPAN"){
    e.target.parentElement.remove();
 }

},false);

function saveData(){
    localStorage.saveData("data", listcontainer.innerHTML);

}
function showtask(){
    listcontainer.innerHTML = localStorage.getItem("data")
}
showtask();