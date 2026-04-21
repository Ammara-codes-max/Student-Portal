function validateForm(){
let n=name.value,e=email.value,p=pass.value,cp=cpass.value,a=age.value,g=gender.value;

if(!n||!e||!p||!cp||!a||!g){
alert("Fill all fields"); return false;
}

if(!e.includes('@')){
alert("Invalid Email"); return false;
}

if(p!==cp){
alert("Passwords not match"); return false;
}

if(isNaN(a)){
alert("Age must be number"); return false;
}

localStorage.setItem("student",n);
window.location="dashboard.html";
return false;
}

let nameStore=localStorage.getItem("student") || "Student";
if(document.getElementById("welcome")){
document.getElementById("welcome").innerText="Welcome " + nameStore;
}

function showTime(){
document.getElementById("time").innerText=new Date();
}

function submitCourses(){
let c=document.querySelectorAll('input[type=checkbox]:checked');
let list=[...c].map(x=>x.value);
alert("Selected: " + list.join(", "));
}

function submitF(){
if(!n.value || !c.value || !r.value){
alert("Fill all fields"); return false;
}
alert("Feedback Submitted Successfully");
return false;
}