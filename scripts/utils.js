import { LOCAL_DETAIL } from "./constants.js";

export function createCard(order) {
  const card = document.createElement("div");
  card.className = "card";

  const cardBody = document.createElement("div");

  //   card.addEventListener("click", () => {
  //     console.log(cardData.title);
  //   });

  const cardTitle = document.createElement("h3");
  cardTitle.innerText = `Id: ${order.id}`;
  cardBody.append(cardTitle);

  const cardTotal = document.createElement("p");
  cardTotal.innerText = String.raw`Total: $${order.total}`;
  cardBody.append(cardTotal);

  const cardCreated = document.createElement("p");
  cardCreated.innerText = String.raw`Created In: $${order.created_at}`;
  cardBody.append(cardCreated);

  // const cardList = document.createElement("ul");

  // cardData.list.forEach((item) => {
  //   const cardListItem = document.createElement("li");
  //   cardListItem.innerText = item.type.name;
  //   cardList.append(cardListItem);
  // });

  // card.append(cardList);

  const cardDetail = document.createElement("button");
  cardDetail.innerText = "Detail";

  cardDetail.addEventListener("click", async (e) => {
    location.href = `${LOCAL_DETAIL}?id=${order.id}`;
  });

  card.append(cardBody);
  card.append(cardDetail);

  return card;
}

export function createDetail(order, orderParent, userParent, shippingParent) {
  const orderTitle = document.createElement("h3");
  orderTitle.innerText = "Order Information";
  const userTitle = document.createElement("h3");
  userTitle.innerText = "User Information";
  const shippingTitle = document.createElement("h3");
  shippingTitle.innerText = "Shipping Information";

  const orderContainer = document.createElement("div");
  orderContainer.className = "container";
  const userContainer = document.createElement("div");
  userContainer.className = "container";
  const shippingContainer = document.createElement("div");
  shippingContainer.className = "container";

  for (const [key, value] of Object.entries(order)) {
    const title = document.createElement("h4");
    title.className = "detail_title";
    title.innerText = key;

    const detailText = document.createElement("p");
    detailText.className = "detail_text";
    detailText.innerText = value;

    const div = document.createElement("div");

    div.append(title);
    div.append(detailText);

    if (key === "user_information" || key === "shipping_info") {
      for (const [keyInner, valueInner] of Object.entries(order[key])) {
        const titleInner = document.createElement("h4");
        titleInner.className = "detail_title";
        titleInner.innerText = keyInner;

        const detailTextInner = document.createElement("p");
        detailTextInner.className = "detail_text";
        detailTextInner.innerText = valueInner;

        const divInner = document.createElement("div");

        divInner.append(titleInner);
        divInner.append(detailTextInner);

        if (key === "user_information") userContainer.append(divInner);
        else if (key === "shipping_info") shippingContainer.append(divInner);
      }
    } else {
      orderContainer.append(div);
    }
  }

  orderParent.append(orderTitle);
  orderParent.append(orderContainer);

  userParent.append(userTitle);
  userParent.append(userContainer);

  shippingParent.append(shippingTitle);
  shippingParent.append(shippingContainer);
}
