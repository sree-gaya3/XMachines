let cont = document.getElementById("seeJobsCont");

let result = "";
allJobData.then((elem) => {
  for (var i = 0; i < elem.length; i++) {
    let date = elem[i].created;
    let formattedDate = date
      .toDate()
      .toLocaleString("en-IN", {timeZone: "UTC"});
    let btnID = "btns" + i;


    result += `<div class="card col-3 my-2">
          <div class="card__body">
            <h4>${elem[i].title}</h4>
            <p>${elem[i].description}</p>
          </div>
          <div class="card__footer d-flex flex-row justify-content-between">
            <div class="user">
              <div class="user__info">
                <h5>Jane Doe</h5>
                <small>${formattedDate}</small>
              </div>
            </div>
            <div class="">
              <a id=${btnID} class="readBtn" style="color: black">Know More</a>
            </div>
          </div>
        </div>`;
    console.log("result updated: ");
  }
  cont.innerHTML = result;
});


$(document).on("click", function (event) {
  var clickedClass = event.target.className;

  // Read more button is clicked
  if (clickedClass.indexOf("readBtn") !== -1) {
    var cardIdx = event.target.id.slice(-1);
    console.log(event.target.href);
    console.log("cardidx: ", cardIdx);
    let myEle;
    allJobData.then((elem) => {
      for (var i = 0; i < elem.length; i++) {
        if (i == cardIdx) {
          console.log(elem[i].url);
          myEle = elem[i];
          let date = myEle.created;
          let formattedDate = date
            .toDate()
            .toLocaleString("en-IN", {timeZone: "UTC"});

          var myWindow = window.open("./blog_details.html", "_blank");

          myWindow.document.write(
            `
            <!doctype html>
            <html lang="en">
            
            <head>
              <meta charset="utf-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1">
            
              <link href="../assets/vendor/bootstrap/bootstrap.min.css" rel="stylesheet">
              <!-- <link href="../assets/vendor/font-awesome/font-awesome.min.css" rel="stylesheet" /> -->
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
              <link href="../assets/css/styles.css" rel="stylesheet" />
              <link href="../assets/css/blog_details.css" rel="stylesheet" />
            
            
              <link href="../assets/vendor/slick/slick.css" rel="stylesheet" />
              <link href="../assets/vendor/slick/slick-theme.css" rel="stylesheet" />
            
            
              <title>XMACHINES</title>
            </head>
            
            <body>
            
              <nav id="primary-nav" class="primary-nav navbar navbar-light bg-light sticky-top px-0 px-sm-3 px-md-5">
                <div class="container-fluid d-flex flex-row justify-content-around justify-content-sm-between">
                  <a class="navbar-brand" href="../index.html">XMACHINES</a>
                  <div class="d-flex flex-row">
                    <a class="nav-outside nav-link p-0" href="./robots.html">Robots</a>
                    <a class="nav-outside nav-link py-0" href="./tractor.html">Tractor Implements</a>
                  </div>
                  <button class="navbar-toggler m-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                      <a class="nav-link" href="./about.html">About Us</a>
                      <a class="nav-link" href="./blog.html">Blog</a>
                      <a class="nav-link" href="./careers.html">Careers</a>
                      <a class="nav-link" href="./contact.html">Contact</a>
                    </div>
            
                  </div>
            
                </div>
              </nav>
            
              <section id="section1">
            
                <div class="container d-flex flex-row justify-content-center">
                  <div class="row col-10 my-5 py-5">
            
                    <div class="row">
                      <div class="col-12 small_text">
                        <!-- <h4 id="tag_disp">${myEle.category}</h4> -->
                        <h6 id="date-disp">Date Posted: ${formattedDate}</h6>
                      </div>
                    </div>
            
                    <div class="row my-5">
                      <div class="col-8 content_text">
                        <h1 id="title-disp">${myEle.title}</h1>
                        <p id="content-disp">${myEle.description}</p>
                      
                        <h2>Responsibilities</h2>
                        <p id="content-disp">${myEle.responsibilities}</p>
            
                        <h2>Requirements</h2>
                        <p id="content-disp">${myEle.requirements}</p>
                        
                        <h2>Perks</h2>
                        <p id="content-disp">${myEle.perks}</p>
            
                      
                      </div>
                    </div>
            
                    <!-- <div class="row">
                      <div class="col-10 d-flex flex-row justify-content-around">
                        <div class="col-5"><img src="${myEle.url}" class="blog-img" alt="image1" /></div>
                        <div class="col-5"><img src="${myEle.url}" class="blog-img" alt="image1" /></div>
                      </div>
                    </div> -->
            
            
                  </div>
            
            
            
                </div>
              </section>
            
            
              <footer id="footers">
                <div class="container-fluid px-5 py-5 mt-5 d-flex flex-column justify-content-center">
                  <div class="row d-flex flex-row px-lg-5 py-5">
            
                    <div class="part1 col-sm-6 col-md-4 d-flex flex-row justify-content-center">
                      <div class="">
                        <h3 class="mb-4">XMachines</h3>
                        <h6 class="mb-3">Tagline of XMachines</h6>
                        <p>©2020, XMachines</p>
                      </div>
                    </div>
            
                    <div class="part2 col-sm-6 col-md-4 my-5 my-sm-0 d-flex flex-row justify-content-center">
                      <div>
                        <div class="location">
                          <h6>Head Office</h6>
                          <p>XMachines Research Lab<br>
                            ABI Building, ICRISAT<br>
                            Patancheru - 502324<br>
                            Telangana, India</p>
                        </div>
                        <div class="contact mt-5">
                          <h6>Contact</h6>
                          <p class="contact-link"><a href="mailto:support@xmachines.ai">Customer Support</a></p>
                          <p class="contact-link"><a href="mailto:sales@xmachines.ai">Sales Enquiries</a></p>
                          <p class="contact-link">Phone: <a href="tel:082474 76933" class="cont-phone">+91 82474 76933</a></p>
                        </div>
                      </div>
                    </div>
            
                    <div class="part3 col-md-4 d-flex flex-row justify-content-center">
                      <div class="col-12 d-flex flex-column flex-sm-row flex-md-column justify-content-around">
                        <div class="links">
                          <div class="row">
                            <div class="col-6 d-flex flex-column align-items-center align-items-sm-start">
                              <a class="mb-2" href="#">Home</a>
                              <a class="mb-2" href="#">Robots</a>
                              <a class="mb-2" href="#">Tractor Implements</a>
                            </div>
                            <div class="col-6 d-flex flex-column align-items-center ">
                              <a class="mb-2" href="#">About Us</a>
                              <a class="mb-2" href="#">Our Team</a>
                            </div>
                          </div>
                        </div>
                        <div class="socials mt-5 d-flex flex-row justify-content-center justify-content-md-start">
                          <div>
                            <p>Follow us</p>
                            <div class="wrapper">
                              <a target="_blank" href="https://www.facebook.com/Xmachinesai/"><i
                                  class="fa fa-2x fa-facebook-square"></i></a>
                              <a target="_blank" href="https://twitter.com/xmachinesai?lang=en"><i
                                  class="fa fa-2x fa-twitter-square"></i></a>
                              <a target="_blank" href="https://www.youtube.com/channel/UCsn-Jwn-rnupN8zSSJqzd4Q"><i
                                  class="fa fa-2x fa-youtube-square"></i></a>
                              <a target="_blank" href="https://www.instagram.com/xmachines.ai/?hl=en"><i
                                  class="fa fa-2x fa-instagram"></i></a>
                            </div>
                          </div>
                        </div>
            
                      </div>
            
                    </div>
            
                  </div>
                </div>
              </footer>
            
              <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
              <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"></script>
              <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-storage.js"></script>
              <script src="../assets/vendor/jquery/jquery.min.js"></script>
              <script src="../assets/vendor/bootstrap/bootstrap.bundle.min.js"></script>
              <script src="../assets/vendor/slick/slick.min.js"></script>
            
              <script src="../assets/js/script.js"></script>
              <script src="../assets/js/firebase.js"></script>
              <script src="../assets/js/blog.js"></script>
              <script src="../assets/js/events.js"></script>
              <script src="../assets/js/blog_details.js"></script>
            
            </body>
            
            </html>
          `
          );
        }
      }
    });

  }
});






