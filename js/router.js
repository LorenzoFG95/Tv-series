//pagine dinamiche
// import { _404 } from "./pages/404.js";
// import { Movie } from "./pages/movie.js";
// import { Home } from "./pages/home.js";

// const mock = {
//   adult: false,
//   backdrop_path: "/2I5eBh98Q4aPq8WdQrHdTC8ARhY.jpg",
//   id: 569094,
//   title: "Spider-Man: Across the Spider-Verse",
//   original_language: "en",
//   original_title: "Spider-Man: Across the Spider-Verse",
//   overview:
//     "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
//   poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
//   media_type: "movie",
//   genre_ids: [28, 12, 16, 878],
//   popularity: 2748.522,
//   release_date: "2023-05-31",
//   video: false,
//   vote_average: 8.731,
//   vote_count: 466,
// };

// const home = Home({ title: "SUCAAAAA" });
// const movie = Movie(mock);

export function route(event) {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState(
    {},
    "",
    `tv-series.html?id=${event.target.parentElement.attributes.cardid.value}`
  );
  handleLocation();
}

const routes = {
  "/": "../index.html",
  tv: "../tv-series.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes["tv"];
  const html = await fetch(route).then((data) => data.text());
  document.location.reload();
};

window.onpopstate = (e) => {
  document.location.reload();
};

window.route = route;

// handleLocation();
