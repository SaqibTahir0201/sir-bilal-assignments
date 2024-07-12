let itemsArray = [
  { name: "juice", price: "50", quantity: "3" },
  { name: "cookie", price: "30", quantity: "9" },
  { name: "shirt", price: "880", quantity: "1" },
  { name: "pen", price: "100", quantity: "2" },
];

// itemsArray.forEach((element) => {
//   console.log(element.price);
// });

// itemsArray[3].discount = "50%";

// console.log(itemsArray[3]);

// itemsArray.splice(3, 1,);

// console.log(itemsArray[3]);
let list = document.getElementById("list");
function renderData() {
  list.innerHTML = "";
  itemsArray.forEach((element, index) => {
    let ele = ` <ul id="list">
    <li index="${index}"><span>${element.name}</span><button onclick="editObj(this)">Edit</button> <button onclick="delObj(this)">Delete</button></li>
  </ul>`;
  list.innerHTML += ele;
  });
}

renderData();

function editObj(ele) {
  console.log(ele.parentElement);
}

