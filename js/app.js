import { createCard, createCardContainer, cE, qS } from "./fn.js";
// let currentUser = "";
//Inizio login
function renderPage(user) {
  const picture1 = document.querySelector(".hero_img1");
  const picture2 = document.querySelector(".hero_img2");
  const picture3 = document.querySelector(".hero_img3");
  const picture4 = document.querySelector(".hero_img4");
  const picture5 = document.querySelector(".hero_img5");
  const caption1 = document.querySelector(".text1");
  const caption2 = document.querySelector(".text2");
  const caption3 = document.querySelector(".text3");
  const caption4 = document.querySelector(".text4");
  const caption5 = document.querySelector(".text5");
  const headerName = document.querySelector(".headerName");
  const headerPic = document.querySelector(".headerPic");

  if (user === "papa") {
    picture1.src = `https://image.tmdb.org/t/p/original${topRated[0].backdrop_path}`;
    picture2.src = `https://image.tmdb.org/t/p/original${topRated[1].backdrop_path}`;
    picture3.src = `https://image.tmdb.org/t/p/original${topRated[2].backdrop_path}`;
    picture4.src = `https://image.tmdb.org/t/p/original${topRated[3].backdrop_path}`;
    picture5.src = `https://image.tmdb.org/t/p/original${topRated[4].backdrop_path}`;

    caption1.textContent = topRated[0].name;
    caption2.textContent = topRated[1].name;
    caption3.textContent = topRated[2].name;
    caption4.textContent = topRated[3].name;
    caption5.textContent = topRated[4].name;

    headerName.textContent = "Dad";
    headerPic.src = "../images/papa.jpg";

    document.body.appendChild(createCardContainer(topRated, "Popular"));
    document.body.appendChild(
      createCardContainer(action, "Action & Adventure")
    );
    document.body.appendChild(createCardContainer(crime, "Crime"));
    document.body.appendChild(createCardContainer(war, "War & politics"));
  } else if (user === "mamma") {
    picture1.src = `https://image.tmdb.org/t/p/original${soap[0].backdrop_path}`;
    picture2.src = `https://image.tmdb.org/t/p/original${soap[1].backdrop_path}`;
    picture3.src = `https://image.tmdb.org/t/p/original${soap[2].backdrop_path}`;
    picture4.src = `https://image.tmdb.org/t/p/original${soap[3].backdrop_path}`;
    picture5.src = `https://image.tmdb.org/t/p/original${soap[4].backdrop_path}`;

    caption1.textContent = soap[0].name;
    caption2.textContent = soap[1].name;
    caption3.textContent = soap[2].name;
    caption4.textContent = soap[3].name;
    caption5.textContent = soap[4].name;

    headerName.textContent = "Mom";
    headerPic.src = "../images/mamma.jpg";

    document.body.appendChild(createCardContainer(topRated, "Popular"));
    document.body.appendChild(createCardContainer(soap, "Soap"));
    document.body.appendChild(createCardContainer(documentary, "Documentary"));
    document.body.appendChild(createCardContainer(reality, "Reality"));
  } else if (user === "luca") {
    picture1.src = `https://image.tmdb.org/t/p/original${kids[0].backdrop_path}`;
    picture2.src = `https://image.tmdb.org/t/p/original${kids[1].backdrop_path}`;
    picture3.src = `https://image.tmdb.org/t/p/original${kids[2].backdrop_path}`;
    picture4.src = `https://image.tmdb.org/t/p/original${kids[3].backdrop_path}`;
    picture5.src = `https://image.tmdb.org/t/p/original${kids[4].backdrop_path}`;

    caption1.textContent = kids[0].name;
    caption2.textContent = kids[1].name;
    caption3.textContent = kids[2].name;
    caption4.textContent = kids[3].name;
    caption5.textContent = kids[4].name;

    headerName.textContent = "Timmy";
    headerPic.src = "../images/luca.jpg";

    document.body.appendChild(createCardContainer(kids, "Kids"));
    document.body.appendChild(createCardContainer(animation, "Animation"));
    document.body.appendChild(createCardContainer(family, "Family"));
  }
}

function createLogin() {
  const loginWrapperEl = cE("div");
  const loginEl = cE("div");
  const loginTitleEl = cE("h2");
  const loginUserContainer = cE("div");
  const loginUser1El = cE("div");
  const loginUser2El = cE("div");
  const loginUser3El = cE("div");
  const loginUser1PicEl = cE("img");
  const loginUser2PicEl = cE("img");
  const loginUser3PicEl = cE("img");
  const loginUsername1El = cE("p");
  const loginUsername2El = cE("p");
  const loginUsername3El = cE("p");
  loginTitleEl.textContent = "Who's watching?";
  loginUser1PicEl.src = "../images/papa.jpg";
  loginUser2PicEl.src = "../images/mamma.jpg";
  loginUser3PicEl.src = "../images/luca.jpg";
  loginUsername1El.textContent = "Dad";
  loginUsername2El.textContent = "Mom";
  loginUsername3El.textContent = "Luca";

  loginWrapperEl.className = "login_wrapper";
  loginEl.className = "login_container";
  loginUserContainer.className = "login_userContainer";
  loginUser1El.className = "login_user";
  loginUser2El.className = "login_user";
  loginUser3El.className = "login_user";

  loginUser1El.addEventListener("click", (e) => {
    loginWrapperEl.style.display = "none";
    renderPage("papa");
  });
  loginUser2El.addEventListener("click", (e) => {
    loginWrapperEl.style.display = "none";
    renderPage("mamma");
  });
  loginUser3El.addEventListener("click", (e) => {
    loginWrapperEl.style.display = "none";
    renderPage("luca");
  });

  loginUser1El.append(loginUser1PicEl, loginUsername1El);
  loginUser2El.append(loginUser2PicEl, loginUsername2El);
  loginUser3El.append(loginUser3PicEl, loginUsername3El);
  loginUserContainer.append(loginUser1El, loginUser2El, loginUser3El);
  loginEl.append(loginTitleEl, loginUserContainer);
  loginWrapperEl.append(loginEl);
  return loginWrapperEl;
}

document.body.append(createLogin());

//Fine login

// Sfondo Header che si scurisce allo scroll
const headerEl = document.querySelector("header");

window.addEventListener(
  "scroll",
  () => {
    const scrolled = window.scrollY;
    if (scrolled === 0) {
      headerEl.className = "";
    } else {
      headerEl.className = "background_black";
    }
  },
  { passive: true }
);

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2NmZTRjMjAzZTVmMjJlMTBlOGM2NTNjYWZjMDEwOSIsInN1YiI6IjY0N2Q5Y2I0Y2Y0YjhiMDEwMzFmM2RhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WUxs_Jrd0D3NAcPwDdj1N3w3nLTgw9dOvodJFwImSK4",
  },
};

let topRated = [];
let action = [];
let crime = [];
let war = [];
let soap = [];
let documentary = [];
let reality = [];
let animation = [];
let family = [];
let kids = [];

// document.body.addEventListener("click", (e) =>
//   console.log(
//     topRated,
//     action,
//     crime,
//     war,
//     soap,
//     documentary,
//     reality,
//     animation,
//     kids,
//     family
//   )
// );

//async
//toprated
fetch(
  "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => (topRated = response.results))
  .catch((err) => console.error(err));
//action
fetch(
  "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10759&with_original_language=en",
  options
)
  .then((response) => response.json())
  .then((response) => (action = response.results))
  .catch((err) => console.error(err));
//crime
fetch(
  "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=80&with_original_language=en",
  options
)
  .then((response) => response.json())
  .then((response) => (crime = response.results))
  .catch((err) => console.error(err));
//war
fetch(
  "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10768&with_original_language=en",
  options
)
  .then((response) => response.json())
  .then((response) => (war = response.results))
  .catch((err) => console.error(err));
//soap
fetch(
  "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10766&with_original_language=en",
  options
)
  .then((response) => response.json())
  .then((response) => (soap = response.results))
  .catch((err) => console.error(err));
//documentary
fetch(
  "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=99&with_original_language=en",
  options
)
  .then((response) => response.json())
  .then((response) => (documentary = response.results))
  .catch((err) => console.error(err));
//reality
fetch(
  "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10764&with_original_language=en",
  options
)
  .then((response) => response.json())
  .then((response) => (reality = response.results))
  .catch((err) => console.error(err));
//animation
fetch(
  "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16&with_original_language=en",
  options
)
  .then((response) => response.json())
  .then((response) => (animation = response.results))
  .catch((err) => console.error(err));
//family
fetch(
  "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10751&with_original_language=en",
  options
)
  .then((response) => response.json())
  .then((response) => (family = response.results))
  .catch((err) => console.error(err));
//kids
fetch(
  "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10762&with_original_language=en",
  options
)
  .then((response) => response.json())
  .then((response) => (kids = response.results))
  .catch((err) => console.error(err));

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const prevEl = document.querySelector(".prev");
const nextEl = document.querySelector(".next");
const dot1El = document.querySelector(".dot1");
const dot2El = document.querySelector(".dot2");
const dot3El = document.querySelector(".dot3");
const dot4El = document.querySelector(".dot4");
const dot5El = document.querySelector(".dot5");
prevEl.addEventListener("click", (e) => plusSlides(-1));
nextEl.addEventListener("click", (e) => plusSlides(1));
dot1El.addEventListener("click", (e) => currentSlide(1));
dot2El.addEventListener("click", (e) => currentSlide(2));
dot3El.addEventListener("click", (e) => currentSlide(3));
dot4El.addEventListener("click", (e) => currentSlide(4));
dot5El.addEventListener("click", (e) => currentSlide(5));

setInterval(plusSlides, 5000, 1);
