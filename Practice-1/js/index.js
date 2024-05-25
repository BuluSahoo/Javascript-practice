function signup(event) {
  event.preventDefault();
  const form = document.forms.register;
  const user = {
    firstname: form.elements.firstname.value,
    lastname: form.elements.lastname.value,
    email: form.elements.email.value,
    password: form.elements.password.value,
  };
  console.log(user);

  const model = document.getElementById("model");
  const modelBody = document.getElementById("model-body");

  model.style.display = "flex";
  model.className = "animate__animated animate__fadeIn";
  modelBody.className = "animate__animated animate__zoomIn animate__faster";
}

function closeModal() {
  const model = document.getElementById("model");
  const modelBody = document.getElementById("model-body");

  // model.style.display = "none";
  model.className = "animate__animated animate__fadeOut";
  modelBody.className = "animate__animated animate__zoomOut animate__faster";
}
