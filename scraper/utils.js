const baseUrl = 'https://guide.michelin.com/'

const query = 'de/de/restaurants/page/';

const itemsPerPage = 20;

const ratingsMap = {
  o: 3,
  n: 2,
  m: 1,
};

const selectors = {
  cards: '.card__menu',
  rating: '.card__menu-content--rating>.fa-michelin',
  img: '.card__menu-image>a>noscript',
  name: '.card__menu-content--title>a',
  link: '.card__menu-content--title>a',
  location: '.card__menu-footer--location',
  type: '.card__menu-footer--price',
}

const regEx = {
  img: /(?<=src=").*(?=" alt)/,
  totalItems: /(?<=von ).*(?= Restaurants)/
}

const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = { baseUrl, query, itemsPerPage, ratingsMap, selectors, regEx, timeout };
