export const cE = (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);
import { route } from "./router.js";

export function createCard(data) {
  const cardEl = cE("div");
  const cardImgEl = cE("img");
  const cardTitleEl = cE("p");
  const cardDate = cE("p");
  const cardVote = cE("p");
  const cardOverview = cE("p");
  const cardDetailContainer = cE("div");
  cardEl.className = "card";
  let cardOverviewContent = data.overview;
  if (cardOverviewContent.length > 25) {
    cardOverviewContent = cardOverviewContent.substring(0, 124) + "...";
  }

  if (data.backdrop_path) {
    cardImgEl.src = `https://image.tmdb.org/t/p/original${data.backdrop_path}`;
  } else {
    cardImgEl.src =
      "https://as1.ftcdn.net/v2/jpg/02/99/61/74/1000_F_299617487_fPJ8v9Onthhzwnp4ftILrtSGKs1JCrbh.jpg";
  }
  cardTitleEl.textContent = data.name;
  cardDate.textContent = data.first_air_date.slice(0, 4);
  cardVote.textContent = data.vote_average + " ⭐";
  cardOverview.textContent = cardOverviewContent;
  cardDetailContainer.className = "card_detail_container";

  cardEl.setAttribute("cardID", data.id);
  cardDetailContainer.setAttribute("cardID", data.id);
  /////////////////
  cardEl.addEventListener("click", (event) => {
    route(event);
  });
  cardEl.addEventListener("mouseover", (e) => {
    cardDetailContainer.classList.add("card_container_active");
  });
  cardEl.addEventListener("mouseout", (e) => {
    cardDetailContainer.classList.remove("card_container_active");
  });

  cardDetailContainer.append(cardDate, cardVote, cardOverview);
  cardEl.append(cardImgEl, cardTitleEl, cardDetailContainer);
  return cardEl;
}

export function createCardContainer(data, title) {
  const wrapperEl = cE("div");
  const titleCardEl = cE("h2");
  const cardContainerEl = cE("div");
  titleCardEl.textContent = title;
  wrapperEl.className = "category_wrapper";
  cardContainerEl.className = "card_container";

  data.forEach((tvShow) => {
    cardContainerEl.append(createCard(tvShow));
  });
  wrapperEl.append(titleCardEl, cardContainerEl);
  return wrapperEl;
}
