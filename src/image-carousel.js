const displayImages = () => {
  // counter keeps track of which image is shown to the user
  let counter = 0;

  const initialiseSlider = (() => {
    const images = document.querySelectorAll(".slide-image");
    const dots = document.querySelectorAll(".dot");
    images[0].style.display = "block";
    dots[0].id = "active";
  })();

  const changeImageWithArrows = (() => {
    const images = document.querySelectorAll(".slide-image");
    const rightSlider = document.querySelector(".slide-right");
    const leftSlider = document.querySelector(".slide-left");
    const dots = document.querySelectorAll(".dot");

    rightSlider.addEventListener("click", () => {
      switchRight();
    });

    leftSlider.addEventListener("click", () => {
      images[counter].style.display = "none";
      dots[counter].id = "not-active";
      if (counter === 0) {
        counter = images.length - 1;
      } else {
        counter--;
      }
      images[counter].style.display = "block";
      dots[counter].id = "active";
    });
  })();

  const changeImageWithDots = (() => {
    const images = document.querySelectorAll(".slide-image");

    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot) => {
      dot.addEventListener("click", (e) => {
        const { target } = e;

        for (let i = 0; i < dots.length; i++) {
          dots[i].id = "not-active";
          if (dots[i] === target) {
            dots[i].id = "active";
            images[counter].style.display = "none";
            images[i].style.display = "block";
            counter = i;
          }
        }
      });
    });
  })();

  function switchRight() {
    const images = document.querySelectorAll(".slide-image");
    const dots = document.querySelectorAll(".dot");

    images[counter].style.display = "none";
    dots[counter].id = "not-active";
    if (counter === images.length - 1) {
      counter = 0;
    } else {
      counter++;
    }
    images[counter].style.display = "block";
    dots[counter].id = "active";
  }

  const imageSwitchTimer = (() => {
    const imageTimer = setInterval(switchRight, 5000);

    const rightSlider = document.querySelector(".slide-right");
    const leftSlider = document.querySelector(".slide-left");
    const dots = document.querySelectorAll(".dot");

    rightSlider.addEventListener("click", () => {
      clearInterval(imageTimer);
      imageTimer = setInterval(switchRight, 5000);
    });
    leftSlider.addEventListener("click", () => {
      clearInterval(imageTimer);
      imageTimer = setInterval(switchRight, 5000);
    });
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        clearInterval(imageTimer);
        imageTimer = setInterval(switchRight, 5000);
      });
    });
  })();
};

export { displayImages };
