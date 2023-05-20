let users = [];

// Function to render the user list
function renderUserList(users) {
  let count = 0;
  const userList = document.getElementById("userList");
  userList.innerHTML = "";
  users.forEach((user) => {
    count+=1;
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <span>${count}.</span>
      <span style="margin-left:17px">Name: ${user.name}</span>
      <span style="margin-left:17px">Profession: ${user.profession}</span>
      <span style="margin-left:17px">Age: ${user.age}</span>
    `;
    userList.appendChild(card);
  });
}

// Function to filter users based on profession
function filter() {
  const professionSelect = document.getElementById("profession");
  const selectedProfession = professionSelect.value;
  if (!selectedProfession) {
    alert("Please select a profession before clicking the filter button.");
    return;
  }
  const filteredUsers = users.filter((user) => user.profession === selectedProfession);
  renderUserList(filteredUsers);
}

// Function to add a new user
function addUser() {
  const nameInput = document.getElementById("name");
  const professionSelect = document.getElementById("professionInput");
  const ageInput = document.getElementById("age");
  const name = nameInput.value;
  const age = ageInput.value;
  const profession = professionSelect.value;
  if (!name || !age || !profession) {
    alert("Please fill in all fields before clicking the add button.");
    return;
  }
  const newUser = { name, age, profession };
  users.push(newUser);
  renderUserList(users);
}
