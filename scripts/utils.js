function isIterable(value) {
  return Symbol.iterator in Object(value);
}

export function createCard(order) {
  const card = document.createElement("div");
  card.className = "card";

  //   card.addEventListener("click", () => {
  //     console.log(cardData.title);
  //   });

  const cardTitle = document.createElement("h3");
  cardTitle.innerText = `Id: ${order.id}`;
  card.append(cardTitle);

  const cardTotal = document.createElement("p");
  cardTotal.innerText = String.raw`Total: $${order.total}`;
  card.append(cardTotal);

  const cardCreated = document.createElement("p");
  cardCreated.innerText = String.raw`Created In: $${order.created_at}`;
  card.append(cardCreated);

  // const cardList = document.createElement("ul");

  // cardData.list.forEach((item) => {
  //   const cardListItem = document.createElement("li");
  //   cardListItem.innerText = item.type.name;
  //   cardList.append(cardListItem);
  // });

  // card.append(cardList);

  return card;
}

export function createDetail(order, orderParent, userParent, shippingParent) {
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

    if (key === "user_information") {
      userParent.append(div);
    } else if (key === "shipping_info") {
      shippingParent.append(div);
    } else {
      orderParent.append(div);
    }
  }
}
