let ran = parseInt(Math.random() * 50 + 1);

    const submit = document.querySelector('#subt')
    const userinput = document.querySelector('#guessfield')
    const guesslot = document.querySelector('#guesses')
    const attempt = document.querySelector('#attempts')
    const hint = document.querySelector('.hint')

    const restart = document.querySelector('.resultpara')
    
    const p = document.createElement('p')

    let prevguess = [];
    let numguess = 1;

    let playGame = true;
    if(playGame){
        submit.addEventListener('click', function(e){
            e.preventDefault()
            const enteredvalue = parseInt(userinput.value)
            validate(enteredvalue)
        })
    }

    const validate = (enteredvalue) => {
        //to check whether the number is valid or it is a number not a string of words
        if (isNaN(enteredvalue) || enteredvalue < 1 || enteredvalue > 50) {
            alert("Please enter a valid input which follows the rule of the game.")
        }
        else {
            prevguess.push(enteredvalue);
            if (numguess >= 10){
                displayguess(enteredvalue)
                displaymessage(`Game Over, Random number was ${ran}`)
                endGame();
            }
            else {
                displayguess(enteredvalue);
                checkguess(enteredvalue)
            }
        }
    }

    const checkguess = (enteredvalue)=>{
        if(enteredvalue === ran){
            displaymessage('GREAT, You guessed it right...')
            endGame()
        }
        else if (ran > enteredvalue){
            displaymessage('Number is tooo Low.... Try again')
        }
        
        else if (ran < enteredvalue){
            displaymessage('Number is tooo high.... Try again')
        }
    }

    const displayguess = (enteredvalue)=>{
        userinput.value = ''
        guesslot.innerHTML += `${enteredvalue} ,`
        numguess++;
        attempt.innerHTML = `${11 - numguess}`
    }

    const displaymessage = (message)=>{
        hint.innerHTML = `<h6>${message}</h6>`
    }

    const endGame = ()=>{
        userinput.value = " "
        userinput.setAttribute('default', '')
        p.classList.add('button')
        p.innerHTML = '<h6 id="newGame">Play Again </h6>'
        restart.appendChild(p)
        playGame = false;
        newGame();
    }

    const newGame = () => {
        const newgamebutton = document.querySelector('#newGame')
        newgamebutton.addEventListener('click', function(e){
            ran = parseInt(Math.random() * 100 + 1);
            prevguess=[]
            numguess=1
            guesslot.innerHTML = ''
            attempt.innerHTML = `${11 - numguess}`
            userinput.removeAttribute('disabled')
            restart.removeChild(p)
            playgame = true;
        })
    }
