let students = [];
// updating our reusable data
function calculateTotal(scores) {
  let total = 0;
  for (let score of scores) total += score;
  return total;
}

function getGrade(average) {
  if (average >= 90) return "A";
  else if (average >= 80) return "B";
  else if (average >= 70) return "C";
  else if (average >= 60) return "D";
  else return "F";
}

// updating and assigning function to add student button
function addStudent() {

  // declaring our variables and getting them ready to  be assigned 
  const name = document.getElementById("studentName").value.trim();
  const math = Number(document.getElementById("math").value);
  const english = Number(document.getElementById("english").value);
  const physics = Number(document.getElementById("physics").value);
  const chemistry = Number(document.getElementById("chemistry").value);
  const biology = Number(document.getElementById("biology").value);

  // updating first logic asking the user for only write name first and add only numbers in the subject palce holder
  if (!name || [math, english, physics, chemistry, biology].some(score => isNaN(score))){
    alert("Please enter a valid name and all scores.");
    return;
  }
 
  const scores = [math, english, physics, chemistry, biology];
  const total = calculateTotal(scores);
  const average = total / scores.length;
  const grade = getGrade(average);

// pushing our vairables as an object to an empty students array created earlier
  students.push({ name, scores,total, average, grade });

  alert(`Student ${name} added successfully!`);


  document.getElementById("studentName").value = "";
  document.getElementById("math").value = "";
  document.getElementById("english").value = "";
  document.getElementById("physics").value = "";
  document.getElementById("chemistry").value = "";
  document.getElementById("biology").value = "";
}

// Updating and assigning function to show Result to the ui
function showResults(){
  if (students.length === 0){
    alert("No student added yet!");
    return;
  }

  students.sort((a, b) => b.total - a.total);
 
  // Adding elements and data for the output class in our html file
let output =`
<h2>Student Report Cards</h2>
<table border="1" cellspacing="0" cellpadding="8" style="margin:auto; border-collapse:collapse;">
  <tr>
    <th>Rank</th>
    <th>Name</th>
    <th>Total</th>
    <th>Average</th>
    <th>Grade</th>
    <th>Status</th>
  </tr>`
;

for (let i = 0; i < students.length; i++){
  let s = students[i];
  let status = s.average >= 50 ? "Passed ✅" : "Failed ❌";
  output +=`
  <tr>
    <td>${i + 1}</td>
    <td>${s.name}</td>
    <td>${s.total}</td>
    <td>${s.average.toFixed(2)}</td>
    <td>${s.grade}</td>
    <td>${status}</td>
  </tr>`;
}
output += `</table>`;
document.getElementById("output").innerHTML = output;  //printing output to the html document
}



