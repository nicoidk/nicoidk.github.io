var showRoomNum = document.getElementById('showRoomNum');
var isRoomClicked = false;

showRoomNum.addEventListener('click', function() {
    if (!isRoomClicked) {
        showRoomNum.textContent = "Room Number: ";
        const text = "Room #3204 ◀";
        let index = 0;

        function displayText() {
            if (index < text.length) {
                showRoomNum.textContent += text.charAt(index);
                index++;
                setTimeout(displayText, 10);
            }
        }

        displayText();
        isRoomClicked = true;
    } else {
        showRoomNum.textContent = 'Room Number ▶';
        isRoomClicked = false;
    }
});

showRoomNum.addEventListener('mouseenter', function() {
    showRoomNum.classList.add('bolded'); // Add the 'highlighted' class
});
  
  showRoomNum.addEventListener('mouseleave', function() {
    showRoomNum.classList.remove('bolded'); // Remove the 'highlighted' class
});

/* ------------------------------------------------------------------ */

var showClubHeads = document.getElementById('showClubHeads');
var isHeadsClicked = false;

showClubHeads.addEventListener('click', function() {
    if (!isHeadsClicked) {
        showClubHeads.textContent = "Club Heads: ";
        const text = "Akul Arora, Kailash Radhakrishnan, Nicholas Kidston, Triet Duong ◀";
        let index = 0;

        function displayText() {
            if (index < text.length) {
                showClubHeads.textContent += text.charAt(index);
                index++;
                setTimeout(displayText, 10);
            }
        }

        displayText();
        isHeadsClicked = true;
    } else {
        showClubHeads.textContent = 'Club Heads ▶';
        isHeadsClicked = false;
    }
});

showClubHeads.addEventListener('mouseenter', function() {
    showClubHeads.classList.add('bolded'); // Add the 'highlighted' class
});
  
showClubHeads.addEventListener('mouseleave', function() {
    showClubHeads.classList.remove('bolded'); // Remove the 'highlighted' class
});

/* ------------------------------------------------------------------ */

var showContactInfo = document.getElementById("showContactInfo");
var isContactClicked = false;

showContactInfo.addEventListener('click', function() {
    if (!isContactClicked) {
        showContactInfo.textContent = "Mr. Stankovic (Supervisor): jovan.stankovic@ocdsb.ca"
        isContactClicked = true;
    } else {
        showContactInfo.textContent = 'Contact Information! ▲';
        isContactClicked = false;
    }
});

showContactInfo.addEventListener('mouseenter', function() {
    showContactInfo.classList.add('bolded'); // Add the 'highlighted' class
});
  
showContactInfo.addEventListener('mouseleave', function() {
    showContactInfo.classList.remove('bolded'); // Remove the 'highlighted' class
});

/* ------------------------------------------------------------------ */

var showInsta = document.getElementById("showInsta");
var isInstaClicked = false;

showInsta.addEventListener('click', function() {
    if (!isInstaClicked) {
        showInsta.textContent = "@nhscodes ▼"
        isInstaClicked = true;
    } else {
        showInsta.textContent = 'Instagram @ ▲';
        isInstaClicked = false;
    }
});

showInsta.addEventListener('mouseenter', function() {
    showInsta.classList.add('bolded'); // Add the 'highlighted' class
});
  
showInsta.addEventListener('mouseleave', function() {
    showInsta.classList.remove('bolded'); // Remove the 'highlighted' class
});

/* ------------------------------------------------------------------ */

var showClassroom = document.getElementById("showClassroom");
var isClasroomClicked = false;

showClassroom.addEventListener('click', function() {
    if (!isClasroomClicked) {
        showClassroom.textContent = "CODE: gw56rq6 ▼"
        isClasroomClicked = true;
    } else {
        showClassroom.textContent = 'Google Classroom # ▲';
        isClasroomClicked = false;
    }
});

showClassroom.addEventListener('mouseenter', function() {
    showClassroom.classList.add('bolded'); // Add the 'highlighted' class
});
  
showClassroom.addEventListener('mouseleave', function() {
    showClassroom.classList.remove('bolded'); // Remove the 'highlighted' class
});

/* ------------------------------------------------------------------ */

var main = document.getElementById("main");
var listMain_clickable = true;
let listMain = [
    'Create', 'Innovate', 'Experiment', 'Develop', 'Explore',
    'Analyze', 'Adapt', 'Improve', 'Strategize', 'Solve',
    'Achieve', 'Excel', 'Interpret', 'Enhance', 'Progress',
    'Design', 'Collab', 'Inspire', 'Transform', 'Create', 
    'Innovate', 'Experiment', 'Develop', 'Explore',
    'Analyze', 'Adapt', 'Improve', 'Strategize', 'Solve',
    'Achieve', 'Excel', 'Interpret', 'Enhance', 'Progress',
    'Design', 'Collab', 'Inspire', 'Transform', 'Code']; 

  var index = 0;

  main.addEventListener('click', function() {
    if (listMain_clickable == true){
        listMain_clickable = false;
        index = 0;
        displayText();
    }
  })

function displayText() {
    main.textContent = "Learn to... " + listMain[index];
    index++;
    if(index <= 38){
        setTimeout(displayText, 70);
    }else{
        listMain_clickable = true;
    }
}

/* ------------------------------------------------------------------ */

const dvdSquare = document.getElementById('dvdSquare');

let x = Math.floor(Math.random() * 1000);
let y = Math.floor(Math.random() * 1000);;
let dx = 5;
let dy = 5;
const squareSize = 20;

function moveSquare() {
  x += dx;
  y += dy;

  if (x + squareSize > window.innerWidth || x < 0) {
    dx *= -1;
  }

  if (y + squareSize > window.innerHeight || y < 0) {
    dy *= -1;
  }

  dvdSquare.style.left = x + 'px';
  dvdSquare.style.top = y + 'px';

  requestAnimationFrame(moveSquare);
}

moveSquare();

/* ------------------------------------------------------------------ */

var nextMeeting = document.getElementById("nextMeeting");
var isMeetingClicked = false;

nextMeeting.addEventListener('mouseenter', function() {
    nextMeeting.classList.add('bolded'); // Add the 'highlighted' class
});
  
nextMeeting.addEventListener('mouseleave', function() {
    nextMeeting.classList.remove('bolded'); // Remove the 'highlighted' class
});

let intervalId; // Global variable to hold the interval ID

nextMeeting.addEventListener('click', function() {
    const now = new Date();
    if (isMeetingClicked) {
        nextMeeting.textContent = "Next Meeting! ▲";
        isMeetingClicked = false;
        clearInterval(intervalId); // Stop the countdown interval
    } else {
        isMeetingClicked = true;
        intervalId = setInterval(updateCountdown, 1000); // Start the countdown interval
        updateCountdown(); // Update immediately when the button is clicked
    }
});

function updateCountdown() {
    const now = new Date();
    let countdown = countdownToMeeting();
    nextMeeting.textContent = "Countdown to next meeting ▼\n" + countdown + (countdown == 1 ? " day " : " days ") + (35 - now.getHours()) % 24 + " hrs " + (99 - now.getMinutes() + 59) % 60 + " mins " + (60 - now.getSeconds()) + " seconds"
    nextMeeting.style.whiteSpace = "pre-line";
}

function countdownToMeeting() {
    const now = new Date();
    const currentDay = now.getDay();

    let nextMeeting = currentDay; // day of the week
    let nextMeeting2 = now.getDate(); // day of the month
    while (true) {
        if ((nextMeeting % 7 === 1 || nextMeeting % 7 === 2) && nextMeeting2 % 2 === 1) {
            return (nextMeeting + 7 - currentDay) %7 - 1;
        } else {
            nextMeeting++;
            nextMeeting2++;
        }
    }
}

/* ------------------------------------------------------------------ */

var homepage_Logo = document.getElementById("homepage_Logo");

homepage_Logo.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = window.location.href; // Redirect to the current URL
});
