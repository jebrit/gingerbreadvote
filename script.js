function update_countdown(end_date_str) {
  const end_date = new Date(end_date_str)
  const current_date = new Date();

  difference_seconds = Math.max(Math.floor((end_date - current_date) / 1000), 0);

  const seconds = Math.floor(difference_seconds) % 60;
  const minutes = Math.floor(difference_seconds / 60) % 60;
  const hours = Math.floor(difference_seconds / (60*60)) % 24;
  const days = Math.floor(difference_seconds / (60*60*24));

  document.getElementById("days").innerHTML = String(days).padStart(2, '0');
  document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
  document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
  document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');
}

function start_countdown(end_date_str) {
  update_countdown(end_date_str);
  setInterval(function () {
    update_countdown(end_date_str);
  }, 1000);
}

function randomize_entries() {
  const entry_cards = document.getElementById("entries").children;
  for (let i = 0; i < entry_cards.length; i++) {
    entry_cards[i].style.order = Math.floor(Math.random() * 100);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  start_countdown("2025-12-26T05:00:00.000+00:00");
  randomize_entries();
});

function move_slideshow(label, direction=null, target=null) {

  const card_element = document.getElementById(label);
  const main_image_div = card_element.getElementsByClassName("main-image")[0];
  const previous_image_index = parseInt(main_image_div.dataset.index);
  let new_image_index = previous_image_index;

  if (direction != null) {
    new_image_index = previous_image_index + direction;
  } else if (target != null) {
    new_image_index = target;
  } else {
    return;
  }

  const main_image_elements = card_element.getElementsByClassName("image-lg");
  const image_list_elements = card_element.getElementsByClassName("image-sm");
  if (image_list_elements.length < 2)
    return;
  if (new_image_index < 0) {
    new_image_index = image_list_elements.length - 1;
  } else if (new_image_index >= image_list_elements.length) {
    new_image_index = 0;
  }
  let matching_src = "";
  for (let i = 0; i < image_list_elements.length; i++) {
    if (i == new_image_index) {
      image_list_elements[i].classList.add("selected-image");
      matching_src = image_list_elements[i].src;
    } else {
      image_list_elements[i].classList.remove("selected-image");
    }
  }
  for (let i = 0; i < main_image_elements.length; i++) {
    if (main_image_elements[i].src == matching_src) {
      main_image_elements[i].classList.add("shown");
    } else {
      main_image_elements[i].classList.remove("shown");
    }
  }
  main_image_div.dataset.index = new_image_index;
}

function scroll_to_id(id) {
  document.getElementById(id).scrollIntoView();
}
