console.log("team: ", teamData);
console.log("company: ", companyData);

function sliderSettings() {
  return {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
}

$("#carousel1").slick(sliderSettings());
$("#carousel2").slick(sliderSettings());
$("#carousel3").slick(sliderSettings());

document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.getElementById("wrapper1");
  const carouselContainer2 = document.getElementById("wrapper2");
  const carouselContainer3 = document.getElementById("wrapper3");

  const itemsContainer = document.getElementById("carousel");
  const itemsContainer2 = document.getElementById("carousel2");
  const itemsContainer3 = document.getElementById("carousel3");

  function getCompany(itemscont) {
    let result = "";
    companyData.then((elem) => {
      for (var i = 0; i < elem.length; i++) {
        let date = elem[i].created;
        let formattedDate = date
          .toDate()
          .toLocaleString("en-IN", { timeZone: "UTC" });
        let btnID = "btn" + i;

        let cate;
        if (elem[i].category == "company") cate = "tag-blue";
        else if (elem[i].category == "press") cate = "tag-brown";
        else cate = "tag-red";

        result += `<div class="card">
            <div class="card__header">
              <img src=${elem[i].url} alt="card__image" class="card__image">
            </div>
            <div class="card__body">
              <span class="tag ${cate}">${elem[i].category}</span>
              <h4>${elem[i].title}</h4>
              <p>${elem[i].subtitle}</p>
            </div>
            <div class="card__footer d-flex flex-row justify-content-between">
              <div class="user">
                <div class="user__info">
                  <h5>Jane Doe</h5>
                  <small>${formattedDate}</small>
                </div>
              </div>
              <div class="">
                <a id=${btnID} class="readBtn" style="color: black">Read More</a>
              </div>
            </div>
          </div>`;
      }
      $("#carousel1").slick("slickAdd", result);
    });
  }

  function getPress(itemscont) {
    // console.log("press: ", pressData);
    let result = "";
    pressData.then((elem) => {
      for (var i = 0; i < elem.length; i++) {
        let date = elem[i].created;
        let formattedDate = date
          .toDate()
          .toLocaleString("en-IN", { timeZone: "UTC" });
        let btnID = "btn" + i;

        let cate;
        if (elem[i].category == "company") cate = "tag-blue";
        else if (elem[i].category == "press") cate = "tag-brown";
        else cate = "tag-red";

        result += `
                  
          <div class="pressCard card">
          <div class="imgBx">
              <img src=${elem[i].url} alt="images">
          </div>
          <div class="details">
              <h2>${elem[i].title}<br><span>${elem[i].subtitle}</span></h2>
          </div>
          </div>

        
        `;
      }
      $("#carousel2").slick("slickAdd", result);
    });
  }

  function getTeam(itemscont) {
    console.log("cont3: ", itemscont);
    let result = "";
    teamData.then((elem) => {
      for (var i = 0; i < elem.length; i++) {
        // console.log("cat: ", elem[i].category)
        let date = elem[i].created;
        let formattedDate = date
          .toDate()
          .toLocaleString("en-IN", { timeZone: "UTC" });
        let btnID = "btn" + i;

        let cate;
        if (elem[i].category == "company") cate = "tag-blue";
        else if (elem[i].category == "press") cate = "tag-brown";
        else cate = "tag-red";

        // console.log("color: ", cate)

        result += `<div class="card">
            <div class="card__header">
              <img src=${elem[i].url} alt="card__image" class="card__image">
            </div>
            <div class="card__body">
              <span class="tag ${cate}">${elem[i].category}</span>
              <h4>${elem[i].title}</h4>
              <p>${elem[i].subtitle}</p>
            </div>
            <div class="card__footer d-flex flex-row justify-content-between">
              <div class="user">
                <div class="user__info">
                  <h5>Jane Doe</h5>
                  <small>${formattedDate}</small>
                </div>
              </div>
              <div class="">
                <a id=${btnID} class="readBtn" style="color: black">Read More</a>
              </div>
            </div>
          </div>`;
      }
      $("#carousel3").slick("slickAdd", result);
    });
  }

  const getItemsContainer = () => {
    return itemsContainer;
  };

  const getItemsContainer2 = () => {
    return itemsContainer2;
  };

  const getItemsContainer3 = () => {
    return itemsContainer3;
  };

  getCompany(getItemsContainer());

  getPress(getItemsContainer2());

  getTeam(getItemsContainer3());

  const cardsCol = document.getElementsByClassName("card");
  console.log(cardsCol);

  var domDataLength = cardsCol.length; //Better performance, no need to calculate every iteration the domArray length
  var allCards = new Array(domDataLength); // Since we know the length its improves the performance to declare the result array from the beginning.

  for (var i = 0; i < domDataLength; i++) {
    console.log("x: ", cardsCol[i]);
    allCards[i] = cardsCol[i]; //Since we already declared the resultArray we can not make use of the more expensive push method.
  }

  console.log(allCards);
  console.log(cardsCol);

  allCards.forEach((card) => {
    card.addEventListener("click", (event) => onCardClick(event));
  });
});
