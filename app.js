let input = document.querySelector('.input'),
    btn   = document.querySelector('.btn'),
    timeOut = document.querySelector('.time'),
    gameBlock = document.querySelector('.game__block'),
    score = 0,
    gameTime = 0,
    interval = 0;
    
    
btn.addEventListener('click', () => {
    if(input.value > 4) {
        gameTime = input.value
        input.value = ''
        let result = document.querySelector('.result')
        if(result) {
            result.style.display = 'none'
        }
        clearInterval(interval)
        score = 0
        start()
    }
})

gameBlock.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        createBall()
    }
})


function start() {
    timeOut.innerHTML = gameTime
    interval = setInterval(() => decrease(), 1000)
    createBall()
}

function decrease() {
    if(gameTime == 0) {
        end()
    }else {
        timeOut.innerHTML = --gameTime
    }
}

function end() {
    gameBlock.innerHTML = `<h2 class="result">Вы набрали ${score} баллов</h2>`
}

function createBall() {
    let ball = document.createElement('div')
    ball.classList.add('ball')
    
    let size = random(20, 100)
    
    let { width, height } = gameBlock.getBoundingClientRect()
    
    let leftValue = random(0, width - size)
    let topValue  = random(0, height - size)
    
    ball.style.width = size + 'px'
    ball.style.height = size + 'px'
    ball.style.left = leftValue + 'px'
    ball.style.top = topValue + 'px'
    setRandomSize(ball)
    setRandomColor(ball)
    
   gameBlock.append(ball)
    
}

function random(min,max) {
    return Math.floor( Math.random() * (max + 1 - min) + min )
}

function setRandomSize(element) {
    element.style.borderRadius = ''
    element.style.clipPath = ''
    switch (random(1,3)) {
        case 1:
            element.style.borderRadius = 50 + '%'
            break;
        case 2:
            element.style.borderRadius = 0 + '%'
            break;
        case 3: 
            element.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)'
            break;
    }
}


function setRandomColor(el) {
    switch (random(1,8)) {
        case 1:
            el.style.background = 'red'
            break;
        case 2:
            el.style.background = 'grey'
            break;
        case 3: 
            el.style.background = 'blue'
            break;
        case 4: 
            el.style.background = 'pink'
            break; 
        case 5: 
            el.style.background = 'purple'
            break; 
        case 6: 
            el.style.background = 'yellow'
            break;       
        case 7: 
            el.style.background = 'green'
            break;       
        case 8: 
            el.style.background = 'orange'
            break;       
    }
}