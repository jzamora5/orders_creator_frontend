import { SEARCH_ROUTES, LOCAL_DETAIL, LOCAL_INDEX } from "./constants.js";
import { createCard } from "./utils.js";

const body = document.getElementById("body");
const searchForm = document.getElementById("search-form");
const orderCards = document.getElementById("orderCards");

const getURL = (searchValue, searchType, orderBy, orderType) => {
  const API_SEARCH_URL = SEARCH_ROUTES[searchType];
  let sort = "";

  if (orderBy.length > 0) sort = `sort=${orderType}${orderBy}`;

  switch (searchType) {
    case "userOrders":
      return `${API_SEARCH_URL}/${sessionStorage.getItem(
        "userId"
      )}/${searchValue}?${sort}`;
    // case "searchTerm":
    //   return `${API_SEARCH_URL}/${searchValue}`;
    // case "date":
    //   return `${API_SEARCH_URL}/${searchValue}`;
    case "shipping":
      return `${API_SEARCH_URL}/?${searchValue}&${sort}`;
    // case "orderId":
    //   return `${API_SEARCH_URL}/${searchValue}`;
    // case "orderIdList":
    //   return `${API_SEARCH_URL}/${searchValue}`;

    default:
      break;
  }
  return `${API_SEARCH_URL}/${searchValue}?${sort}`;
};

searchForm.onsubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(searchForm);

  const searchValue = formData.get("searchValue");
  const searchType = formData.get("searchType");
  const orderBy = formData.get("orderBy");
  const orderType = formData.get("orderType");

  const URL = getURL(searchValue, searchType, orderBy, orderType);

  const options = {
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(URL, options);

  if (response.status === 401) location.href = LOCAL_INDEX;

  let orders = await response.json();

  orderCards.innerHTML = "";

  if (!Array.isArray(orders) && typeof orders === "object") orders = [orders];

  if (Array.isArray(orders)) {
    orders.forEach((order) => {
      const card = createCard(order);
      orderCards.append(card);
    });
  }
};
