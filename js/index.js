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

  model.style.display = "flex";
}

function closeModal() {
    const model = document.getElementById("model");
    model.style.display = "none";
}
