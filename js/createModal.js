// on click of element with class timeline-item-more-info
import { dates } from "./data.js";
export default function createModal() {
  if (
    document.body.contains(document.getElementById("modal-container")) === false
  ) {
    const modal_info = `<div class="center" id = "modal-container"><h2 id="modal-title"></h2><p id ="modal-date"></p><img id="modal-image" width = 75%; height = auto;><p id ="modal-full-description"></p><button id="modal-close-button">Click to close</button></div>`;
    const modalContainer = document.createElement("div");
    modalContainer.innerHTML = modal_info;
    document.body.appendChild(modalContainer);

    //get and populate modal with correct info
    const index = parseInt(this.id);
    const date = dates[index].date;
    const title = dates[index].title;
    const image = document.getElementById("modal-image");
    const description = dates[index].fullDescription;

    document.getElementById("modal-date").textContent = date;
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-full-description").textContent = description;
    image.src = dates[index].image;
  }
  //moved so the query selector runs after the modal appears and the button has been created
  document.querySelectorAll("#modal-close-button").forEach((subject) => {
    subject.addEventListener("click", closeModal);
  });
}

// removes the modal div with the id modal-container
export function closeModal() {
  const remove_button = document.querySelector("#modal-container");
  remove_button.remove();
}