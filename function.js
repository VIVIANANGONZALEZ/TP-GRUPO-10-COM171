window.jsPDF = window.jspdf.jsPDF;

//funcion slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



function bookTravel(){
  let travel = {
    departureDate: $("#departure-date").val(),
    returnDate: $("#return-date").val(),
    destination: $("#destination").val(),
    multidestination: $("#multidestination").val(),
    passengers: $("#passengers").val()
  };

  exportToPDF(travel);
}

//jspdf del buscador de viajes

function exportToPDF(form){
  let doc = new jsPDF();

//To do this right a function to format as string must be done
let content = 'Travel Booking: \n' +
 'Departure Date: ' + form.departureDate + 
 '\n Return Date: ' + form.returnDate + 
 '\n Destination: ' + form.destination +
 '\n Multidestination:' + form.multidestination +
 '\n Passengers: ' + form.passengers;

  doc.text(content, 10, 10);

  doc.save("booking.pdf");
}

