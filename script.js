$(document).ready(function () {
  //NAVBAR SCROLL
  $(window).scroll(function () {
    const isCollapsed = document.querySelector(".navbar-collapse.show");
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      if (!isCollapsed) {
        $(".navbar").removeClass("sticky");
      }
    }
  });
});
//END NAVBAR SCROLL

//ANDERE NAVBAR SHIT
const toggler = document.querySelector(".navbar-toggler");
const collapse = document.querySelector(".navbar-collapse");
const navbar = document.querySelector(".navbar");

toggler.addEventListener("click", function () {
  if (navbar.classList.contains("test")) {
    $(".navbar").removeClass("test");
  } else {
    $(".navbar").addClass("sticky");
    $(".navbar").addClass("test");
  }
});

// close on click
collapse.addEventListener("click", (e) => {
  const isCollapsed = document.querySelector(".navbar-collapse.show");
  const tagName = e.target.tagName;

  if (isCollapsed && (tagName === "A" || tagName === "BUTTON")) {
    toggler.click();
  }
});
