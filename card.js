// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
function showImage(folder, imageFIrst, imageSecond, imageThird, imageFourth, imageFifth) {

    document.getElementById("myModal").style.display = "block";

    let gridofFirst = imageFIrst;
    let popupFirst = document.getElementById("myModal");
    let popupImageFirst = popupFirst.querySelector("#gridFirst");
    popupImageFirst.src = folder + "/" + gridofFirst;

    let gridofSecond = imageSecond;
    let popupSecond  = document.getElementById("myModal");
    let popupImageSecond = popupSecond.querySelector("#gridSecond");
    popupImageSecond.src = folder + "/" + gridofSecond;

    let gridofThird = imageThird;
    let popupThird = document.getElementById("myModal");
    let popupImageThird = popupThird.querySelector("#gridThird");
    popupImageThird.src = folder + "/" + gridofThird;

    let gridofFourth = imageFourth;
    let popupFourth = document.getElementById("myModal");
    let popupImageFourth = popupFourth.querySelector("#gridFourth");
    popupImageFourth.src = folder + "/" + gridofFourth;

    let gridofFifth = imageFifth;
    let popupFifth = document.getElementById("myModal");
    let popupImageFifth = popupFifth.querySelector("#gridFifth");
    popupImageFifth.src = folder + "/" + gridofFifth;


    popupFirst.style.display = "block";
    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
      popupFirst.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it 
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        popupFirst.style.display = "none";
      }
    }

}
