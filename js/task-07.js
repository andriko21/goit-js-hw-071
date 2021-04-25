const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", onSpanInput);
span.style.fontSize = `${input.value}px`;

function onSpanInput(event) {
  span.style.fontSize = `${event.currentTarget.value}px`;
}
