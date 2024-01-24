// Обработка кликов на пункты навигации
const navbarItemList = document.querySelectorAll(".navbar-item");
navbarItemList.forEach((navbarItem) => {
  navbarItem.addEventListener("click", function (event) {
    event.preventDefault();
    const navbarItemActive = document.querySelector(".navbar-item.active");
    if (navbarItemActive) {
      navbarItemActive.classList.remove("active");
    }
    navbarItem.classList.add("active");
  });
});

// Обработка кликов на кнопку отображения корзины
const showActionList = document.querySelectorAll(".show-action");
const sidebarMenu = document.querySelector(".sidebar-menu");
showActionList.forEach((showAction) => {
  showAction.addEventListener("click", function (event) {
    event.preventDefault();
    sidebarMenu.classList.toggle("show");
  });
});

// Обработка кликов на кнопки "Buy"
const btnBuyList = document.querySelectorAll(".card-body .btn");
btnBuyList.forEach((btnBuy) => {
  btnBuy.addEventListener("click", function (event) {
    event.preventDefault();
    const card = btnBuy.closest(".card");
    const price = card.querySelector(".price").innerText;
    const title = card.querySelector("h3").innerText;
    const imgSrc = card.querySelector("img").src;

    // Создаем элемент корзины
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <img src="${imgSrc}" alt="${title}" style="width: 50px; height: auto;">
      <span>${title} - ${price}</span>
      <button class="remove-item">Remove</button>
    `;

    // Добавляем обработчик событий для кнопки удаления из корзины
    cartItem
      .querySelector(".remove-item")
      .addEventListener("click", removeFromCart);

    // Добавляем элемент в корзину
    const sidebarMenuBody = document.querySelector(".sidebar-menu-body");
    sidebarMenuBody.appendChild(cartItem);

    // Показываем корзину
    sidebarMenu.classList.add("show");
  });
});

// Функция для удаления товара из корзины
function removeFromCart(event) {
  event.preventDefault();
  const cartItem = event.target.closest(".cart-item");
  cartItem.remove();
}
