function playSound(e) {
    // console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop func from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
    setTimeout(() => {
        key.classList.remove('playing');
    }, 2000);
}

let num = 0;

function loop(e) {
    num++;
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const three = document.getElementById('num');
    let jjj = num;
    three.textContent = jjj;
    if (!audio) return; //stop func from running all together
    // audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');

    // removing the shadow of buttons
    setTimeout(() => {
        key.classList.remove('playing');
    }, 2000);

    // if loop play equall to 3 end it
    // else stop
    if (num == 3) {
        console.log(num);
        console.log('end');
        three.textContent = jjj;
        num = 0;
        setTimeout(() => {
            three.textContent = 0;
        }, 7000);
    } else {
        setTimeout(() => {
            console.log("");
            loop(e);
        }, 7300);
    }
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip it if it's not a transform
    this.classList.remove('playing');
}

function whichOne(e) {
    let L = e.keyCode;
    if (L == 90 || L == 88 || L == 67 || L == 86) {
        loop(e)
    } else {
        playSound(e);
    }
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', whichOne);