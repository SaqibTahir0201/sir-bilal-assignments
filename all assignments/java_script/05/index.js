// //? making table with the help of javascript

let container1st = document.querySelector(".container");

container1st.innerHTML = `
${'marks obtained'}
<ul>
<li> ${"10"} </li>
<li>${"20"}</li>
<li>${"30"}</li>
<li>${"40"}</li>
<li>${"50"}</li> 

</ul>`;


let container2nd = document.querySelector(".container2");
container2nd.innerHTML = `
${'total marks'}
<ul>
<li> ${"22"} </li>
<li>${"33"}</li>
<li>${"44"}</li>
<li>${"55"}</li>
<li>${"66"}</li> 

</ul>`;




//@ trying to apply css , but it doesn't work
container1st = document.querySelector(".container");
element.style.color = "blue";
