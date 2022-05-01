let submitBtn = document.getElementById("submit");

// On submitting
submitBtn.addEventListener("click", (e) => {
  // preventing default form submitting behaviour
  e.preventDefault();


  // getting form values
  let title = document.getElementById("title").value;
  let subtitle = document.getElementById("subtitle").value;
  let category = document.getElementById("category").value;
  let content = document.getElementById("content").value;
  var files = document.getElementById("myfile").files[0];

  var imageURL = "https://picsum.photos/200";
  function uploadImage() {
    var storageRef = storage.ref();
    var thisref = storageRef.child("public/" + files.name).put(files);
    thisref.on(
      "state_changed",
      function (snapshot) {},
      function (error) {
        console.log("error in file uploading");
      },
      function () {
        // upload success
        thisref.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          imageURL = downloadURL;
          console.log(downloadURL);
          // alert("Uploaded Success");
          storeDetails();
        });
      }
    );
  }

  uploadImage();

  function storeDetails() {
    const date = new Date();
    // saving data to firebase
    db.doc()
      .set({
        title: title,
        subtitle: subtitle,
        category: category,
        content: content,
        created: date,
        url: imageURL,
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

  document.getElementById("title").value = "";
  document.getElementById("subtitle").value = "";
  document.getElementById("category").value = "";
  document.getElementById("content").value = "";
});
