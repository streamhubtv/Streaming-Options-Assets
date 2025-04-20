
//=============== Main Overly  ===============

// Script to handle the survey
        
 const taskButton = document.getElementById('taskButton');
 const overlay = document.getElementById('overlay');
 const retryModal = document.getElementById('retryModal');
 const retryButton = document.getElementById('retryButton');
 
 let taskCompleted = false;
 let taskStartTime;
 let buttonClicked = false;
 let countdownTime = 15; // Time required in seconds
 let countdownInterval;
 let remainingTime;
 const originalTitle = document.title;
 
 // Array of links to open sequentially
 const links = [
   'https://shorturl.at/zMqwJ',
   'https://tinyurl.com/FMRADLP1',
   'https://shorturl.at/j6CVl',
   'https://tinyurl.com/FMRADL2'
 ];
 
 let survaycurrentLinkIndex = 0; // Start with the first link
 
 // Function to update the document title with the remaining countdown time
 function updateTitleCountdown(time) {
   document.title = `Remaining Time: ${time} seconds`;
 }
 
 // Reset the title to its default state
 function resetTitle() {
   document.title = originalTitle;
 }
 
 // Function to handle countdown timer
 function startCountdown() {
   remainingTime = countdownTime;
   updateTitleCountdown(remainingTime);
 
   countdownInterval = setInterval(() => {
     remainingTime--;
     updateTitleCountdown(remainingTime);
 
     if (remainingTime <= 0) {
       clearInterval(countdownInterval);
       taskCompleted = true;
       overlay.style.display = 'none';
       resetTitle(); // Reset the title once task is complete
     }
   }, 1000);
 
   // Ensure the title resets after countdown completes
   setTimeout(() => {
     if (remainingTime <= 0) {
       resetTitle();
     }
   }, countdownTime * 1000 + 100); // Adds a slight buffer for execution
 }
 
 taskButton.addEventListener('click', (event) => {
   event.preventDefault();
   taskStartTime = new Date().getTime();
   buttonClicked = true;
 
   // Reset for fresh task
   clearInterval(countdownInterval);
   resetTitle();
   remainingTime = countdownTime;
 
   // Open the current ad link
   if (links.length > 0) {
     window.open(links[survaycurrentLinkIndex], '_blank');
     survaycurrentLinkIndex = (survaycurrentLinkIndex + 1) % links.length;
   } else {
     console.error("No links available.");
   }
 });
 
 // When the user refocuses
 window.addEventListener('focus', () => {
   if (buttonClicked && !taskCompleted) {
     clearInterval(countdownInterval);
 
     if (remainingTime > 0) {
       document.title = "Start Over Again";
       retryModal.style.display = 'block';
       buttonClicked = false;
     }
   }
 });
 
 // When the user leaves the page
 window.addEventListener('blur', () => {
   if (buttonClicked && !taskCompleted) {
     startCountdown();
   }
 });
 
 // Retry Button
 retryButton.addEventListener('click', () => {
   retryModal.style.display = 'none';
   buttonClicked = false;
   resetTitle();
 });
 
 // Show overlay when page loads
 document.addEventListener('DOMContentLoaded', () => {
   overlay.style.display = 'block';
 
   // Optional: Add close button listeners if you use them
   const adCloseButtons = document.querySelectorAll('.ad-close');
   adCloseButtons.forEach(button => {
     button.addEventListener('click', () => {
       button.parentElement.style.display = 'none';
     });
   });
 });


 //<!--=============== Secondary Overly  ===============-->

  // Sample link list
  const siteLinks = {
    //Streaming Sites Links
    netmirrorsite: "https://example.com/netmirror",
    hydrahdsite: "https://example.com/primevideo",
    rivestreamsite: "https://example.com/netflix",
    nunflixsite: "https://example.com/netflix",
    broflixsite: "https://example.com/netflix",
    // Add more ids and links here
    //Streaming Apps Links
    netmirrorapp: "https://example.com/netmirror",
    donkeyapp: "https://example.com/primevideo",
    onstreamapp: "https://example.com/netflix",
    stremioapp: "https://example.com/netflix",
    hdoboxapp: "https://example.com/netflix",
    // Add more ids and links here
};

let selectedId = null;
let timerInterval = null;
let timerCount = 5;

const modal = document.getElementById('customModal');
const timer = document.getElementById('customTimer');
const skipBtn = document.getElementById('skipBtn');

// Step 1: Click handler for cards
document.querySelectorAll('.visit-card').forEach(card => {
    card.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent link behavior
        selectedId = this.dataset.id;
        showModal();
    });
});

// Step 2: Show modal and start timer
function showModal() {
    modal.style.display = 'flex';
    timerCount = 5;
    timer.textContent = timerCount;
    skipBtn.style.display = 'none';

    timerInterval = setInterval(() => {
        timerCount--;
        timer.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(timerInterval);
            timer.style.display = 'none';
            skipBtn.style.display = 'inline-block';
        }
    }, 1000);
}

// Step 3: Handle skip button click
skipBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    if (selectedId && siteLinks[selectedId]) {
        window.open(siteLinks[selectedId], '_blank');
    }
});

// Step 4: Prevent outside clicks from closing modal
window.addEventListener('click', function (e) {
    if (e.target === modal) {
        // Do nothing
    }
});

// Optional: Prevent Esc key from closing modal
window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        e.preventDefault();
    }
});


// Stript to disable developer tools


 // Disable Right-Click
 document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Disable Keyboard Shortcuts
document.addEventListener('keydown', function (e) {
    // Disable F12
    if (e.key === "F12") {
        e.preventDefault();
    }
    // Disable Ctrl+Shift+I (Inspect), Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && ['I', 'J'].includes(e.key)) {
        e.preventDefault();
    }
    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
    }
    // Disable Ctrl+S (Save Page)
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
    }
    // Disable Ctrl+Shift+C (Inspect Element in some browsers)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
    }
});

// Freeze DevTools with Silent Debugger
(function () {
    setInterval(() => {
        debugger;
    }, 50);
})();

// Optional: Remove the "Inspect" option when right-clicked (some browsers show inspect on the menu)
document.addEventListener("mousedown", function (e) {
    if (e.button === 2) { // Right-click
        e.preventDefault();
    }
});

// Prevent copying of page content
document.addEventListener('copy', function (e) {
    e.preventDefault();
});

// Prevent selection of text
document.addEventListener('selectstart', function (e) {
    e.preventDefault();
});

// Additional protection against developer tools
(function () {
    const check = function () {
        function detector() { }
        Object.defineProperty(detector, 'toString', {
            get() {
                this.opened = true;
                return 'noDevTools';
            }
        });
        console.log(detector);
    };

    try {
        check();
    } catch (err) { }
})();