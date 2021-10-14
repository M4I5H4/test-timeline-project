
import { dates } from "./data.js";
import createModal from "./createModal.js";
import { closeModal } from "./createModal.js";

// HTML to generate a summary card for each element in the dates array
dates.forEach((subject, index) => {
  const card = `<div class="timeline-item"><h2 class="timeline-item-title">${subject.title}</h2>
<span class="timeline-item-date">${subject.date}</span> <p class="timeline-item-summary">${subject.summary}</p><button class="timeline-item-more-info" id="${index}">Click for more information!</button></div>`;
  const ele = document.createElement("div");
  ele.innerHTML = card;
  document.body.appendChild(ele);
});

//selecting all instances of elements w/ id .timeline-item-more-info and looping through to add an event listener to each
document.querySelectorAll(".timeline-item-more-info").forEach((subject) => {
  subject.addEventListener("click", createModal);
});

