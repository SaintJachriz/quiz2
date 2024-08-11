function Show() {
    const hide = document.getElementById('hide');
    hide.style.display = 'flex';
}

function Hide() {
    const hide = document.getElementById('hide');
    hide.style.display = 'none';
}

const header = document.getElementById('header');
const span = document.getElementById('Span');

setTimeout(() => {
    header.style.color = 'lightblue';
}, 2000)


setTimeout(() => {
    header.style.color = 'darkgoldenrod';
}, 5000)

setTimeout(() => {
    span.style.fontSize = '25px';
}, 3000)

setTimeout(() => {
    span.style.fontSize = '30px';
}, 5000)

setTimeout(() => {
    span.style.fontSize = '20px';
}, 7000)

function Btn() {
    alert('Pick A Card');
}