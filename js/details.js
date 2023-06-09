import { cE } from "./fn.js";

const tvId = window.location.search.substring(4);

function renderDetailsPage(data) {
  const detailsPageWrapperEl = cE("div");
  const detailsPageEl = cE("div");
  const posterEl = cE("img");
  const detailsTextEl = cE("div");
  const titleEl = cE("h1");
  const authorEl = cE("p");
  const overviewEl = cE("p");
  const seasonsEl = cE("p");
  const episodesEl = cE("p");
  const voteEl = cE("p");
  const buttonEl = cE("a");
  const videoEl = cE("iframe");

  posterEl.src = `https://image.tmdb.org/t/p/original${data.poster_path}`;
  titleEl.textContent = data.name;
  if (!!data.created_by[0]) {
    authorEl.textContent = "Created by: " + data.created_by[0].name;
  }
  overviewEl.textContent = data.overview;
  seasonsEl.textContent = "Seasons: " + data.number_of_seasons;
  episodesEl.textContent = "Total episodes: " + data.number_of_episodes;
  voteEl.textContent = data.vote_average + " ⭐";
  buttonEl.textContent = "Learn more";
  buttonEl.href = data.homepage;
  buttonEl.className = "buttonEl";
  detailsPageWrapperEl.className = "detailsWrapper";
  detailsPageEl.className = "detailsPage";
  detailsTextEl.className = "detailsText";

  detailsTextEl.append(
    titleEl,
    authorEl,
    overviewEl,
    seasonsEl,
    episodesEl,
    voteEl,
    buttonEl
  );
  detailsPageEl.append(posterEl, detailsTextEl);
  detailsPageWrapperEl.append(detailsPageEl);
  if (!!data.videos.results[0]) {
    videoEl.src = `https://www.youtube.com/embed/${data.videos.results[0].key}`;
    detailsPageWrapperEl.append(videoEl);
  }
  return detailsPageWrapperEl;
}

document.body.append();

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2NmZTRjMjAzZTVmMjJlMTBlOGM2NTNjYWZjMDEwOSIsInN1YiI6IjY0N2Q5Y2I0Y2Y0YjhiMDEwMzFmM2RhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WUxs_Jrd0D3NAcPwDdj1N3w3nLTgw9dOvodJFwImSK4",
  },
};

fetch(
  `https://api.themoviedb.org/3/tv/${tvId}?append_to_response=videos&language=en-US`,
  options
)
  .then((response) => response.json())
  .then((response) => document.body.append(renderDetailsPage(response)))
  .catch((err) => console.error(err));

const backButtonEl = document.querySelector(".header_left");
backButtonEl.addEventListener("click", (e) => history.back());
