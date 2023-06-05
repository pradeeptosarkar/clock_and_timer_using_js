// Function to update the clock display
function updateClock() {
    var clock = document.getElementById('clock');
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    clock.innerText = hours + ':' + minutes + ':' + seconds;
  }
  
  // Function to update the timer display
  function updateTimer() {
    var timerDisplay = document.getElementById('timerDisplay');
    var timer = timerDisplay.innerText.split(':');
    var hours = parseInt(timer[0]);
    var minutes = parseInt(timer[1]);
    var seconds = parseInt(timer[2]);
  
    seconds++;
  
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  
    timerDisplay.innerText = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
  }
  
  // Reset the timer to 00:00:00
  function resetTimer() {
    var timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.innerText = '00:00:00';
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Update the timer every second
  var timerInterval = setInterval(updateTimer, 1000);
  
  // Add click event listener to the reset button
  var resetButton = document.getElementById('resetButton');
  resetButton.addEventListener('click', function() {
    clearInterval(timerInterval); // Stop the timer
    resetTimer(); // Reset the timer display
    timerInterval = setInterval(updateTimer, 1000); // Restart the timer
  });  