function update_countdown() {
  const end_date_str = "2024-12-26T05:00:00.000+00:00"
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

function randomize_entries() {
  const entry_cards = document.getElementById("entries").children;
  for (let i = 0; i < entry_cards.length; i++) {
    entry_cards[i].style.order = Math.floor(Math.random() * 100);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // update_countdown();

  // setInterval(function () {
  //   update_countdown();
  // }, 1000);

  randomize_entries();
});

const image_counters = new Map([
  ["harry-potter", 0],
  ["lord-of-the-rings", 0],
  ["narnia", 0],
  ["shrek", 0],
  ["spongebob", 0],
  ["star-wars", 0],
  ["wonka", 0],
]);

function move_slideshow(label, direction=null, target=null) {
  let current_image = image_counters.get(label);
  if (direction != null) {
    current_image = current_image + direction;
  } else if (target != null) {
    current_image = target;
  } else {
    return;
  }
  const card_element = document.getElementById(label);
  const main_image_elements = card_element.getElementsByClassName("image-lg");
  const image_list_elements = card_element.getElementsByClassName("image-sm");
  if (image_list_elements.length < 2)
    return;
  if (current_image < 0) {
    current_image = image_list_elements.length - 1;
  } else if (current_image >= image_list_elements.length) {
    current_image = 0;
  }
  let matching_src = "";
  for (let i = 0; i < image_list_elements.length; i++) {
    if (i == current_image) {
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
  image_counters.set(label, current_image);
}

function scroll_to_id(id) {
  document.getElementById(id).scrollIntoView();
}