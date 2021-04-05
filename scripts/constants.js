const LOCAL_HOST = "http://localhost:5500";

const API_URL = "http://localhost:5000/api";

export const LOCAL_INDEX = `${LOCAL_HOST}/index.html`;

export const LOCAL_SEARCH = `${LOCAL_HOST}/search.html`;

export const API_AUTH_URL = `${API_URL}/auth/login`;

export const SEARCH_ROUTES = {
  searchTerm: `${API_URL}/orders/search`,
  date: `${API_URL}/orders/dates`,
  shipping: `${API_URL}/orders/shipping`,
  orderId: `${API_URL}/order`,
  orderIdList: `${API_URL}/orders`,
  userOrders: `${API_URL}/users`,
};
