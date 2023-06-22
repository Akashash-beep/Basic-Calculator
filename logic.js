let input = document.getElementById('field');
const button = document.querySelectorAll('button');
const on = document.getElementById('poweron');
const off = document.getElementById('poweroff');
off.style.backgroundColor = 'rgb(255, 58, 71)';
off.style.color = 'white';
button.disabled = true;

if (off.style.backgroundColor == 'rgb(255, 58, 71)') {
    button.forEach(check => {
        check.disabled = true;
    })
    alert("Please Turn on the calc to use it");
}



off.addEventListener('click', () => {
    button.forEach(check => {
        check.disabled = true;

    })
    off.style.backgroundColor = 'rgb(255, 58, 71)';
    off.style.color = 'white';
    on.style.backgroundColor = 'rgb(255, 255, 71)';
    on.style.color = 'black';
    input.value = "";


})
on.addEventListener('click', () => {
    button.forEach(check => {
        check.disabled = false;
    })
    on.style.backgroundColor = 'rgb(255, 58, 71)';
    on.style.color = 'white';
    off.style.backgroundColor = 'rgb(255, 255, 71)';
    off.style.color = 'black';
})

// pow.addEventListener('click', () => {
//     button.forEach(check => {
//         check.disabled = true;
//         pow.disabled = false;
//         pow.style.backgroundColor = 'red';
//         if (check.disabled == true) {
//             pow.addEventListener('click', () => {
//                 check.disabled = false;
//                 pow.style.backgroundColor = 'rgb(58, 255, 58)';


//             })
//         }
//     })
// })

function display(num) {
    input.value += num;
}
function del() {

    input.value = input.value.slice(0, -1);
}
function calc() {

    input.value = eval(input.value);
}
function clean() {
    input.value = "";
}
