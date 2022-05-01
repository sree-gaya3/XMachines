let submitBtn = document.getElementById("submit1");

// On submitting
submitBtn.addEventListener("click", (e) => {
  // preventing default form submitting behaviour
  e.preventDefault();


  // getting form values
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let responsibilities = document.getElementById("responsibilities").value;
  let requirements = document.getElementById("requirements").value;
  var perks = document.getElementById("perks").value;


  function storeDetails() {
    const date = new Date();
    // saving data to firebase
    job_db.doc()
      .set({
        title: title,
        description: description,
        responsibilities: responsibilities,
        requirements: requirements,
        perks: perks, 
        created: date,
      })
      .then(() => {
        console.log("Data Saved");
      })
      .catch((error) => {
        console.log(error);
      });

    alert("Submitted !!");
    console.log("submitted");
  }

  storeDetails();
  
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("responsibilities").value = "";
  document.getElementById("requirements").value = "";
  document.getElementById("perks").value = "";
});


