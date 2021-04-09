const displayUpdateUI = (id) => {
  const editDiv = document.getElementById('editCourse' + id)
  editDiv.classList.remove('inactive');
  editDiv.classList.add('active');
}

const cancelUpdate = (id) => {
  const editDiv = document.getElementById('editCourse' + id);
  editDiv.classList.remove('active');
  editDiv.classList.add('inactive');
};

const showUpdateConfirmation = (course_id) => {
  const divUpdateConfirm = document.getElementById("update-confirmation");
  divUpdateConfirm.innerText = `Course with ID: ${course_id} was updated!`;
  divUpdateConfirm.classList.remove("inactive");
  divUpdateConfirm.classList.add("active");
  setTimeout(() => {
    divUpdateConfirm.classList.remove("active");
    divUpdateConfirm.classList.add("inactive");
  }, 4000);
};

// check URL for direction to '#courseDiv..'
const idUpdated = window.location.href.split('#')[1];

if (idUpdated) { 
  const divUpdateConfirm = document.getElementById(idUpdated);
  const confirmationSpan = document.createElement('span');
  confirmationSpan.className = 'update-confirmation';
  confirmationSpan.innerText = 'Course was updated  👍';
  divUpdateConfirm.appendChild(confirmationSpan);
  setTimeout(() => {
    confirmationSpan.remove();
  }, 4000);
}