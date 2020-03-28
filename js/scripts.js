// Function for formatting a value to 2 digits.
const forceTwoDigit = num => ( ( '0' + num ).slice( -2 ) );

const timerStart = document.querySelector( 'button' );
const timerStop = document.querySelector( 'button:nth-of-type(2)' );
const timerReset = document.querySelector( 'button:nth-of-type(3)' );
const minutes = document.querySelector( 'dd span' );
const seconds = document.querySelector( 'dd span ~ span' );

let timerTime = 0;

timerStart.addEventListener( 'click', event => {
  countdownInterval = setInterval( () => {
    // Decrease remaining time by one second.
    timerTime = Number( timerTime ) + 1000;
    // Update minutes.
    minutes.textContent = forceTwoDigit( parseInt( timerTime / 60000 ) );
    // Update seconds.
    seconds.textContent = forceTwoDigit( parseInt( timerTime % 60000 ) / 1000 );
  }, 1000 ); // "Tick" per second.
} );

timerStop.addEventListener( 'click', event => {
  clearInterval( countdownInterval );
} );

timerReset.addEventListener( 'click', event => {
  timerTime = 0;
  minutes.textContent = '00';
  seconds.textContent = '00';
} );