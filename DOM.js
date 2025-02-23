function iAmClicked(me){
    me.innerHTML = "I am clicked";
}
/*   append 
window.onload = ()=> {
    document.querySelector("#test").append("world");
} */
/* change the text fully
  window.onload = ()=> {
    document.querySelector("#test").innerHTML=("Hello world");
}
my_button= document.querySelector("#myButton");
my_button.addEventListener("click",()=>{
  document.querySelector("#test").innerHTML=("Hello world");
}) */
/* propagation

document.getElementById("myDiv").addEventListener("click",()=>{
  console.log("this");
})
document.querySelector("#test").addEventListener("click",()=>{
  console.log("test clicked");
})
*/
/*  why not just use onClick
it overwrites the previous onclick
document.getElementById("myButton").onclick = ()=>{
  console.log("clicked");
}
document.getElementById("myButton").onclick = ()=>{
  console.log("clicked again");
}
*/ 
/* Project time
*/
