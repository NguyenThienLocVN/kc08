function ToggleMobileTextBanner() {
    var x = document.getElementById("text-banner-item");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}