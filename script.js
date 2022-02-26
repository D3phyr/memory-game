let items = document.querySelectorAll('.item');
let win = document.querySelector('.win');
let box = document.querySelector('.box');
let timerValue = document.querySelector('.timer-value');
let triesValue = document.querySelector('.tries-value');
let timerWinValue = document.querySelector('.timer-win-value');
let triesWinValue = document.querySelector('.tries-win-value');
let stat = document.querySelector('.stat');
let indexFirstItem = 0;
let indexSecondItem = 0;
let indexTime = 0;
let res = 0
let failedTries = 0;
let secValue = 0;
let prevItem;
let currentItem;

setInterval(() => timer(), 1000);
function timer() {
    if (indexTime == 1) {
        secValue++;
        timerValue.innerHTML = secValue;
    }
}

function indexReset() {
    indexFirstItem = 0;
    indexSecondItem = 0;
}

function tries() {
    failedTries++;
    triesValue.innerHTML = failedTries;
}

function itemReset() {
    prevItem.classList.remove('active');
    currentItem.classList.remove('active');
    indexReset();
}

function result() {
    res += 1;
        if (res == 10) {
            win.style.display='flex';
            box.style.filter = 'blur(4px)';
            timerWinValue.innerHTML = timerValue.innerHTML;
            triesWinValue.innerHTML = triesValue.innerHTML;
            stat.style.display='none';
        }
}

function compare() {
    if (prevItem.style.backgroundImage == currentItem.style.backgroundImage) {
        indexReset();
        result();
    }
    else if (prevItem.style.backgroundImage != currentItem.style.backgroundImage) {
        setTimeout(itemReset, 1200);
        tries();
    }
}

items.forEach(item => {
    item.addEventListener('click', function () {
        indexTime = 1;
        if (indexFirstItem == 0) {
            if (!this.classList.contains('active')) {
                this.classList.add('active');
                indexFirstItem = 1;
                prevItem = this;
            };
        }
        if (indexSecondItem == 0) {
            if (!this.classList.contains('active')) {
                this.classList.add('active');
                indexSecondItem = 1;
                currentItem = this;
                compare();
            };
        }
    });
})

let a = 0;
image = new Array();
image[0] = "assets/Zdarova.png";
image[1] = "assets/Zdarova.png";
image[2] = "assets/Batua.png";
image[3] = "assets/Batua.png";
image[4] = "assets/Content.png";
image[5] = "assets/Content.png";
image[6] = "assets/Dulya.png";
image[7] = "assets/Dulya.png";
image[8] = "assets/Gorit.png";
image[9] = "assets/Gorit.png";
image[10] = "assets/Hmm.png";
image[11] = "assets/Hmm.png";
image[12] = "assets/Oreh.png";
image[13] = "assets/Oreh.png";
image[14] = "assets/Pominki.png";
image[15] = "assets/Pominki.png";
image[16] = "assets/Pride.png";
image[17] = "assets/Pride.png";
image[18] = "assets/Schastliv.png";
image[19] = "assets/Schastliv.png";
image.sort(() => Math.random() - 0.5);
items.forEach(item => {
    item.style.backgroundImage = `url(${image[a]})`;
    a++;
});