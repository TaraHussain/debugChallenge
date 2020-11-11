const result = document.getElementById("result");
const btn = document.querySelector("button");
btn.addEventListener("click", getQuote);

function getQuote() {
  fetch("http://localhost:3000/quotes/random")
    .then((r) => r.text())
    .then(renderQuote)
    .catch(console.warn);
}

function renderQuote(quoteText) {
  const data = document.createElement("div");
  result.append(data);
  const quote = document.createElement("p");
  quote.textContent = quoteText;
  data.append(quote);
}
