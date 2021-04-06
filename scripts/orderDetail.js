import { SEARCH_ROUTES, LOCAL_INDEX } from "./constants.js";
import { createDetail } from "./utils.js";

const urlParams = new URLSearchParams(window.location.search);
const orderId = urlParams.get("id");

const orderDetailElement = document.getElementById("order_detail");
const userDetailElement = document.getElementById("user_detail");
const shippingDetailElement = document.getElementById("shipping_detail");

const options = {
  mode: "cors",
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
};

const url = `${SEARCH_ROUTES["orderId"]}/${orderId}`;

const response = await fetch(url, options);

if (response.status === 401) location.href = LOCAL_INDEX;

const detail = await response.json();

detail.forEach((order) => {
  createDetail(
    order,
    orderDetailElement,
    userDetailElement,
    shippingDetailElement
  );
});

console.log(detail);
