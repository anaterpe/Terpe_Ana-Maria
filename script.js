var i = 0;
var images = [];
var time = 3000;
	 
images[0] = 'imagini/CPU.jpg';
images[1] = 'imagini/Disk.jpg';
images[2] = 'imagini/GPU.jpg';
images[3] = 'imagini/Memory.jpg';
images[4] = 'imagini/Procese.jpg';

var slideshowRunning = false;

function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    if (slideshowRunning) {
        setTimeout(changeImg, time);
    }
}

function slideshow() {
    document.querySelector('.imagini').style.display = 'none';
    document.slide.style.display = 'block';
    slideshowRunning = true;
    changeImg();
}