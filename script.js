
document.addEventListener("DOMContentLoaded", function(){
 
  let container = document.querySelector("#container");
  let images = document.getElementsByTagName('img');
  let slideIndex = 0;
  /**
   * Funkcja do animacji zdjec
   *
   */
  function animuj(){
    for(let i = 0; i < images.length; i++){
      images[i].style.display = "none";
    }
    slideIndex++;

    if(slideIndex === images.length) { slideIndex = 0}
    images[slideIndex].style.display = "block";

    timer = setTimeout(animuj, 2000);
  }

  let timer = setTimeout(animuj, 2000);

  // Przerwanie animacji zdjec
  container.addEventListener('mouseover', () => {
    clearTimeout(timer);
  });

  // Wznowienie animacji zdjec
  container.addEventListener('mouseleave', () => {
   timer = setTimeout(animuj, 2000);
  });

});