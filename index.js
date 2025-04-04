const inputadd=document.getElementById("input-box");
const listadd=document.getElementById("list-container");
const comp=document.getElementById("completed-task");
const uncomp=document.getElementById("uncomplete-task");

function addtask(){
  const task=inputadd.value.trim();
  if(!task){
    alert("Please write down the work to add");
    return;
  }

const li = document.createElement("li");
li.innerHTML = `
<label><input type="checkbox">
<span>${task}</span>
</label>
<button class="edit-btn"  onclick="editbtn(this)">    Edit  </button>
<button class="delete-btn" onclick="deletebtn(this)" > 🗑️</button>
`;


listadd.appendChild(li);
inputadd.value="";

const  checkbox=li.querySelector("input");




checkbox.addEventListener("click", function () {
  li.classList.toggle("completed", checkbox.checked);
  updateCounters();
});



updateCounters();

}
function editbtn(button){
const li=button.parentElement;
const taskSpan=li.querySelector("span");
const up=prompt("edit-task",taskSpan.textContent);
if(up!=null){
  taskSpan.textContent=up;
  li.classList.remove("completed");
  li.querySelector("input").checkbox=false;
  updateCounters();

}


}
function deletebtn(button){
  if(confirm("DELETE THIS ONE?")){
  const li=button.parentElement;
  li.remove();
  updateCounters();
  }
}
function updateCounters(){
  const comptask=document.querySelectorAll("li.completed").length;
  const uncomptask=document.querySelectorAll("li:not(.completed)").length;
  comp.textContent=comptask;
  uncomp.textContent=uncomptask;
  


}
function gothere(){
  return window.location.href="web.html";
}
function frontpage(){
  return window.location.href="index.html";
}
