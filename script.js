
document.addEventListener("DOMContentLoaded", function(){
 
  let container = document.querySelector("#container");
  let slider = document.querySelector('#slider');
  let slideIndex = 0;

  /**
   * Funkcja do animacji zdjec
   *
   */
  function animuj(){
    let currentIndex = 0;
    let images = document.getElementsByTagName('img');
    for(let i = 0; i < images.length; i++){
      images[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > images.length) { slideIndex = 1}
    images[slideIndex-1].style.display = "block";

    let timer = setTimeout(animuj, 2000);

    container.addEventListener('mouseover', () =>{
      clearTimeout(timer);
    });
    container.addEventListener('mouseleave', () =>{
      setTimeout(animuj, 2000);
    });
    images[slideIndex-1].addEventListener('click', (e) =>{
      e.target.className="bigImg";
    });
      //requestAnimationFrame(animuj);
}
animuj();

});