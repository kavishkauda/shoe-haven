
function togglenav() {
    var nav = document.getElementById("nav-l-container");
    var nav_user = document.getElementById("nav-user");
    if (nav.style.display === "none") {
      nav.style.display = "block";
      nav_user.style.display = "none";
    } else {
      nav.style.display = "none";
      nav_user.style.display = "block";
    }
  }