let formSubmitBtn = document.getElementById("formSubmit");
console.log(formSubmitBtn);

// On submitting
formSubmitBtn.addEventListener("click", (e) => {
  // preventing default form submitting behaviour
  e.preventDefault();
  console.log("Entered click event");

  // getting form values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let company = document.getElementById("company").value;
  let message = document.getElementById("message").value;

  function storeDetails() {
    const date = new Date();
    // saving data to firebase
    formdata
      .doc()
      .set({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        console.log("Data Saved");
      })
      .catch((error) => {
        console.log(error);
      });

    alert("Submitted !!");
  }

  storeDetails();

  window.location.href = "mailto:mail@example.org?subject="+name+"&body="+message;



  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("company").value = "";
  document.getElementById("message").value = "";
});
