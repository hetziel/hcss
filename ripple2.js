//Ripple Event Handler
var drawRipple = function(ev) {
    var x = ev.clientX;
    var y = ev.clientY;
    var node = document.querySelector(".h-ripple-container");
    var newNode = node.cloneNode(true);
    newNode.classList.add("animate");
    newNode.style.left = ev.clientX - 5 + "px";
    newNode.style.top = ev.clientY - 5 + "px";
    node.parentNode.replaceChild(newNode, node);
};

//Ripple Triggers
window.addEventListener("click", drawRipple);


//Control Handler
var controlHandler = function() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        controller.textContent = "Dark Ripple";
    } else {
        controller.textContent = "Bright Ripple";
    }
};

// Control Trigger
var controller = document.querySelector(".controller");
controller.addEventListener("click", controlHandler);

/////////////////////

// const buttons = document.querySelectorAll('.h-rippler-container')

// buttons.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         let ripple = document.createElement('span')
//         let x = e.clientX - e.target.offsetLeft
//         let y = e.clientY - e.target.offsetTop

//         ripple.style.left = x + 'px'
//         ripple.style.top = y + 'px'

//         btn.appendChild(ripple)

//         setTimeout(() => {
//             ripple.remove()
//         }, 700)
//     })
// })