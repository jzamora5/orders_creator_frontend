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
  cardTotal.innerText = `Total: $${order.total}`;
  card.append(cardTotal);

  const cardCreated = document.createElement("p");
  cardCreated.innerText = `Created In: $${order.created_at}`;
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
