// index.html
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".product button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("Added to cart");
    });
  });

  //banner auto slide
  const carousel = new bootstrap.Carousel(
    document.getElementById("carouselExampleIndicators"),
    {
      interval: 3000,
      pause: "hover",
    }
  );
});

// auth.html
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("register-link")
    .addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("login-form").style.display = "none";
      document.getElementById("register-form").style.display = "block";
    });

  document.getElementById("login-link").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  });
});

//product.html
document.addEventListener("DOMContentLoaded", function () {
  var mainImage = document.querySelector(".main-image img");
  var thumbnailImages = document.querySelectorAll(".thumbnail-images img");

  var minusButton = document.querySelector(".minus");
  var plusButton = document.querySelector(".plus");
  var quantityInput = document.querySelector(".number-of-items input");

  // Changing the product quantity
  minusButton.addEventListener("click", function () {
    var currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  });

  plusButton.addEventListener("click", function () {
    var currentValue = parseInt(quantityInput.value);
    if (currentValue < 100) quantityInput.value = currentValue + 1;
  });

  // Adding event listeners to each thumbnail image
  thumbnailImages.forEach(function (thumbnail) {
    thumbnail.addEventListener("mouseover", function () {
      changeMainImage(thumbnail);
    });

    thumbnail.addEventListener("click", function () {
      changeMainImage(thumbnail);
    });
  });

  // Function to change the main image
  function changeMainImage(thumbnail) {
    var newImageSrc = thumbnail.getAttribute("src");
    console.log(newImageSrc);

    // Updating the main image source with the correct path
    var newImagePath = newImageSrc;
    mainImage.setAttribute("src", newImagePath);
  }
});

// 404.html
document.addEventListener("DOMContentLoaded", function () {
  // Handle unknown pages
  var path = window.location.pathname;
  if (
    path !== "/" &&
    path !== "/index.html" &&
    path !== "/auth.html" &&
    path !== "/product.html" &&
    path !== "/about.html" &&
    path !== "/cart.html" &&
    path !== "/contact.html"
  ) {
    window.location.href = "404.html";
  }
});
