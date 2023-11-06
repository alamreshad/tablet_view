
/* READ MORE BUTTON */
function toggleReadMore(petId, paragraphId) {
    var button = document.querySelector(`#${paragraphId}_button`);
    var par2 = document.querySelector(`#${petId}_par2`);

    if (par2.style.display === "none") {
        par2.style.display = "block";
        button.textContent = "Read Less";
    } else {
        par2.style.display = "none";
        button.textContent = "Read More";
    }
}