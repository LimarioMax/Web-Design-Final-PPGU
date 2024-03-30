function togglePaymentFormat() {
  var cardRadio = document.getElementById("card-radio");
  var gcashRadio = document.getElementById("gcash-radio");
  var cardFormat = document.getElementById("card-format");
  var gcashFormat = document.getElementById("gcash-format");

  if (cardRadio.checked) {
    cardFormat.style.display = "block";
    gcashFormat.style.display = "none";
  } else if (gcashRadio.checked) {
    gcashFormat.style.display = "block";
    cardFormat.style.display = "none";
  }
}

function openPopup(event) {
  event.preventDefault(); // Prevent default form submission behavior
  var popup = document.getElementById("popup");
  popup.classList.add("open-popup");
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.classList.remove("open-popup");
}
