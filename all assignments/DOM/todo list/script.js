let input_value = document.getElementById("input_value");
let add_but = document.getElementById("add_but");
let del_all_but = document.getElementById("del_all_but");
let ul = document.getElementById("ul");

add_but.addEventListener("click", () => {
  if (!input_value.value.trim()) return alert("please add something");
  let list_item = document.createElement("li");
  let span = document.createElement("span");
  let edit_btn = document.createElement("button");
  edit_btn.innerText = "Edit";
  let del_btn = document.createElement("button");
  del_btn.innerText = "Delete";

  span.textContent = input_value.value;
  list_item.appendChild(span);
  list_item.appendChild(edit_btn);
  list_item.appendChild(del_btn);
  ul.appendChild(list_item);

  // Add event listeners to edit_btn and del_btn
  edit_btn.addEventListener("click", () => {
    // Edit button clicked, get the current text content of the span
    let currentValue = span.textContent;
    // Create a new input field to edit the text
    let edit_input = document.createElement("input");
    edit_input.value = currentValue;
    list_item.replaceChild(edit_input, span);
    // Add a save button to save the changes
    let save_btn = document.createElement("button");
    save_btn.innerText = "Save";
    list_item.appendChild(save_btn);
    save_btn.addEventListener("click", () => {
      // Save button clicked, get the new text value from the input field
      let newValue = edit_input.value;
      // Replace the input field with the new text content
      span.textContent = newValue;
      list_item.replaceChild(span, edit_input);
      list_item.removeChild(save_btn);
    });
  });

  del_btn.addEventListener("click", () => {
    // Delete button clicked, remove the list item from the ul
    ul.removeChild(list_item);
  });

  input_value.value = "";
});

del_all_but.addEventListener("click", () => {
  // Delete all button clicked, remove all list items from the ul
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});
