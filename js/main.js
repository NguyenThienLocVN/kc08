function ToggleMobileTextBanner() {
    var x = document.getElementById("sidebar-left-mobile");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}