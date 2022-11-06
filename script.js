var add = document.querySelector('.plus')
var minus = document.querySelector('.minus')
var number = document.querySelector('.number')
var submit = document.querySelector('.submit')
var result = document.querySelector('.result')

thing = 0;
number.textContent = thing;


add.addEventListener('click', addNumber)
// number = 0;
minus.addEventListener('click', gay )

function addNumber() {
    thing = thing+ 1
    number.textContent = thing
}

function gay() {
    thing = thing - 1
    number.textContent = thing
}

submit.addEventListener('click', function() {
    result.textContent = `${"You have purchased " + thing + " number of things"}`
    if(thing < 0 ) {
        result.textContent = `${"bruh"}`

    }
})