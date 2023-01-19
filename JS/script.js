const hulk = document.querySelector('.hulk');
const pipe = document.querySelector('.pipe');

const jump = () =>{
    hulk.classList.add('jump');

    setTimeout(() => {
        hulk.classList.remove('jump');
    },500);
}

const loop = setInterval(() => {

    console.log('loop');

    const pipePosition = pipe.offsetLeft;

    const hulkPosition = +window.getComputedStyle(hulk).bottom.replace('px','');
    console.log(hulkPosition);

    if(pipePosition <= 120 && pipePosition > 0 && hulkPosition < 80) {
       
        pipe.style.animation = 'none';
        pipe.style.left = '${pipePosition}px';

        hulk.style.animation = 'none';
        hulk.style.botton = '${hulkPosition}px';

        hulk.src = 'image/ezgif.com-gif-maker.webp';
        hulk.style.width = '100px'
        hulk.style.marginleft = '50px'
        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);
