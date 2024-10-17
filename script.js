

function update_countdown() {
  const start_date_str = "2024-11-23T12:00:00.000+00:00"
  const start_date = new Date(start_date_str)
  const current_date = new Date();
  console.log(start_date.toUTCString())
  console.log(current_date.toUTCString())
  
  difference_seconds = Math.max(Math.floor((start_date - current_date) / 1000), 0);
  
  const seconds = Math.floor(difference_seconds) % 60;
  const minutes = Math.floor(difference_seconds / 60) % 60;
  const hours = Math.floor(difference_seconds / (60*60)) % 24;
  const days = Math.floor(difference_seconds / (60*60*24));

  document.getElementById("days").innerHTML = String(days).padStart(2, '0');
  document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
  document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
  document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');
}

window.onload = function () {
  update_countdown()
  setInterval(function () {
    update_countdown()
  }, 1000);
};