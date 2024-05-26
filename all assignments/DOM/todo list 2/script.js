let subject1 = document.getElementById("subject1");
let subject2 = document.getElementById("subject2");
let subject3 = document.getElementById("subject3");
let subject4 = document.getElementById("subject4");
let subject5 = document.getElementById("subject5");
let studentName = document.getElementById("student-name");
let studentPercentage = document.getElementById("student_percentage");
let add_but = document.getElementById("add_but");
let del_all_but = document.getElementById("del_all_but");
let todo_list = document.getElementById("todo_list").getElementsByTagName("tbody")[0];
let averageElement = document.getElementById("average");
let calculateAverageButton = document.querySelector(".results button[type='submit']");

let grades = [];

add_but.addEventListener("click", () => {

  if (
    !studentName.value.trim() ||
    !subject1.value.trim() ||
    !subject2.value.trim() ||
    !subject3.value.trim() ||
    !subject4.value.trim() ||
    !subject5.value.trim() ||
    !studentPercentage.value.trim()
  ) {
    return alert("Please fill all inputs");
  }
  let grade = {
    name: studentName.value,
    subject1: subject1.value,
    subject2: subject2.value,
    subject3: subject3.value,
    subject4: subject4.value,
    subject5: subject5.value,
    percentage: studentPercentage.value,
  };
  grades.push(grade);
  let list_item = `
  <tr>
      <td>${grades.length}</td>
      <td>${studentName.value}</td>
      <td>${subject1.value}</td>
      <td>${subject2.value}</td>
      <td>${subject3.value}</td>
      <td>${subject4.value}</td>
      <td>${subject5.value}</td>
      <td>${studentPercentage.value}</td>
      <td>
          <button class="editBtn" onclick="edit(this)">edit</button>
          <button class="delBtn" onclick="deleteFun(this)">del</button>
      </td>
  </tr>`;
  todo_list.innerHTML += list_item;
  studentName.value = "";
  subject1.value = "";
  subject2.value = "";
  subject3.value = "";
  subject4.value = "";
  subject5.value = "";
  studentPercentage.value = "";
});

del_all_but.addEventListener("click", () => {
  todo_list.innerHTML = "";
  grades = [];
  averageElement.textContent = "Average: 0%";
});

calculateAverageButton.addEventListener("click", () => {
  let total = 0;
  grades.forEach((grade) => {
    total += parseInt(grade.percentage);
  });
  let average = total / grades.length;
  averageElement.textContent = `Average: ${average}%`;
});

function edit(element) {
  let row = element.parentNode.parentNode;
  let columns = row.cells;
  let grade = grades[columns[0].textContent - 1];
  studentName.value = grade.name;
  subject1.value = grade.subject1;
  subject2.value = grade.subject2;
  subject3.value = grade.subject3;
  subject4.value = grade.subject4;
  subject5.value = grade.subject5;
  studentPercentage.value = grade.percentage;
  row.remove();
  grades.splice(columns[0].textContent - 1, 1);
}

function deleteFun(element) {
  let row = element.parentNode.parentNode;
  let columns = row.cells;
  grades.splice(columns[0].textContent - 1, 1);
  row.remove();
}