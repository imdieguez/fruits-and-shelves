let appleShelf = document.querySelector('#apple-shelf');
let orangeShelf = document.querySelector('#orange-shelf');
let organizeBtn = document.querySelector('#organize-btn');
let fruitsEl = document.querySelector('#fruits-el');
let messageEl = document.querySelector('#message-el')

let fruits = ['🍎', '🍊', '🍎', '🍎', '🍊', '🍊', '🍎', '🍊', '🍎', '🍊']

organizeBtn.addEventListener('click', function() {
    for(let i = 0; i < fruits.length; i++) {
        if(fruits[i] === '🍎') {
            appleShelf.textContent += '🍎';
            fruitsEl.textContent = ' '
        }else {
            orangeShelf.textContent += '🍊';
        }
    }
    messageEl.textContent = 'Well done!';
})
