const btn = document.querySelector('.final');
const showImageButton = document.getElementById("show-image-button");

const myImage = document.getElementById("my-image");
const myImage2 = document.getElementById("my-image2");
const myImage3 = document.getElementById("my-image3");
const myImage4 = document.getElementById("my-image4");
const myImage5 = document.getElementById("my-image5");

const Outerbox = document.querySelector(".Outer-Box");

btn.addEventListener('click', () => {
    // var displayAge = document.getElementById("myAgedisplay").value;
    var displayWeight = document.getElementById("myWeightdisplay").value;
    var displayHeight = document.getElementById("myHeightdisplay").value;

    const Myresult = (displayWeight / displayHeight / displayHeight) * 10000;

    let Valll = Math.round(Myresult);
    console.log(Valll)

    const BMIDisplayBlock = document.querySelector(".BMIDisplay-Block");

    //  var myImage = img.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dfree%2Bdownload&psig=AOvVaw0RXaM0SOZKZ5Nhc1JQZH_k&ust=1695878746677000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIDnjOSGyoEDFQAAAAAdAAAAABAE";

    if (Valll <= 18.5) {
        // alert('my bmi is lower than 18');

        BMIDisplayBlock.innerText = `${Valll}`, myImage.classList.toggle("visible");
        //console.log(Myresult)
        // console.log(ourfinalresult);

    } else if (Valll > 18.5 && Valll <= 25) {
        BMIDisplayBlock.innerText = `${Valll}`, myImage2.classList.toggle("visible");
        console.log(Valll)
    }

    else if (Valll > 25 && Valll <= 29) {
        BMIDisplayBlock.innerText = `${Valll}`, myImage3.classList.toggle("visible");
        console.log(Valll)
    }

    else if (Valll > 29 && Valll <= 35) {
        BMIDisplayBlock.innerText = `${Valll}`, myImage4.classList.toggle("visible");
        console.log(Valll)
    }

    else if (Valll > 35 && Valll <= 999) {
        BMIDisplayBlock.innerText = `${Valll}`, myImage5.classList.toggle("visible");
        console.log(Valll)
    }

})



var resetButton = document.getElementById("resetButton");

        // Add a click event listener to the button
        resetButton.addEventListener("click", function() {
            // Use the location.reload method to refresh the page
            location.reload();
        });


// let Valll = Math.round(5.6);
// console.log(Valll);


