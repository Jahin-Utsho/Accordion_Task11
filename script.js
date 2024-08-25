let acc_boxE1 = document.querySelectorAll(".acc_box");
let symbol = document.querySelectorAll(".symbol");

acc_boxE1.forEach((item, index) => {
  item.addEventListener("click", () => {
    acc_boxE1.forEach((eachItem) => {
      eachItem.classList.remove("active");
    });
    item.classList.add("active");
    symbol.forEach((symbol) => {
      symbol.textContent = "+";
    });
    symbol[index].textContent = "-";
  });
});
