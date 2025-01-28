let clickCount = 0;
let clickValue = 1;
let everclicked = 0;
let jcPerMinute = 0; // JC per minute variable
let totalJC = 0;     // Total JC collected

// Updates JC per minute and adds JC passively every minute
setInterval(function() {
  clickCount += jcPerMinute;
  totalJC += jcPerMinute;
  document.getElementById("click-counter").textContent = "JC: " + clickCount;
  document.getElementById("total-jc").textContent = "Total JC: " + totalJC;
  document.getElementById("jc-per-minute").textContent = "JC per Minute: " + jcPerMinute;
}, 60000); // Every 60 seconds (1 minute)

// Click event for hamster image
// Click event for hamster image
document.getElementById("hamster-image").addEventListener("click", function() {
  clickCount += clickValue;
  everclicked += clickValue;
  totalJC += clickValue;

  // Update displayed values
  document.getElementById("click-counter").textContent = "JC: " + clickCount;
  document.getElementById("total-jc").textContent = "Total JC: " + totalJC;
  document.getElementById("current-jc").textContent = "JC: " + clickCount; // Update current JC display
  
  triggerClickAnimation();
  updateHamsterImage();
});


// Function to disable and style used upgrades
function disableUpgrade(button) {
  button.disabled = true;
  button.classList.add('purchased');
}

// Function for handling JC per tap upgrades
function upgradeClickValue(increase, cost, buttonId) {
  const button = document.getElementById(buttonId);
  button.addEventListener("click", function() {
    if (clickCount >= cost) {
      clickValue += increase;
      clickCount -= cost;
      document.getElementById("click-counter").textContent = "JC: " + clickCount;
      document.getElementById("current-jc").textContent = "JC: " + clickCount; // Update current JC display
      disableUpgrade(button);
    }
  });
}

// Function for handling JC per minute upgrades
function upgradeJCPerMinute(increase, cost, buttonId) {
  const button = document.getElementById(buttonId);
  button.addEventListener("click", function() {
    if (clickCount >= cost) {
      jcPerMinute += increase;
      clickCount -= cost;
      document.getElementById("click-counter").textContent = "JC: " + clickCount;
      document.getElementById("current-jc").textContent = "JC: " + clickCount; // Update current JC display
      disableUpgrade(button);
    }
  });
}


// Click Value Upgrades (JC per Tap)
upgradeClickValue(5, 50, "upgrade-1");
upgradeClickValue(10, 250, "upgrade-2");
upgradeClickValue(25, 1000, "upgrade-3");
upgradeClickValue(250, 5000, "upgrade-4");
upgradeClickValue(500, 10000, "upgrade-5");
upgradeClickValue(1000, 50000, "upgrade-6");
upgradeClickValue(5000, 100000, "upgrade-7");
upgradeClickValue(10000, 500000, "upgrade-8");
upgradeClickValue(25000, 1000000, "upgrade-9");
upgradeClickValue(75000, 5000000, "upgrade-10");
upgradeClickValue(250000, 10000000, "upgrade-11");
upgradeClickValue(500000, 50000000, "upgrade-12");
upgradeClickValue(1000000, 100000000, "upgrade-13");
upgradeClickValue(50000000, 500000000, "upgrade-14");
upgradeClickValue(20000000, 1000000000, "upgrade-15");

// JC per Minute Upgrades (Passive Income)
upgradeJCPerMinute(1000, 500000, "upgrade-16");
upgradeJCPerMinute(5000, 1000000, "upgrade-17");
upgradeJCPerMinute(10000, 5000000, "upgrade-18");
upgradeJCPerMinute(25000, 10000000, "upgrade-19");
upgradeJCPerMinute(50000, 20000000, "upgrade-20");
upgradeJCPerMinute(100000, 50000000, "upgrade-21");
upgradeJCPerMinute(500000, 100000000, "upgrade-22");
upgradeJCPerMinute(1000000, 500000000, "upgrade-23");




// Array of hamster unlock thresholds
const hamsterThresholds = [
  1000, 10000, 50000, 100000, 300000, 600000, 1000000, 2000000, 
  5000000, 10000000, 30000000, 60000000, 100000000, 200000000, 
  500000000, 700000000, 1000000000, 10000000000, 50000000000, 9999999999999
];

// Function to update hamster image and JC required for next hamster
function updateHamsterImage() {
  const hamsterImage = document.getElementById("hamster-image");
  let nextThreshold = hamsterThresholds.find(threshold => everclicked < threshold);

  if (everclicked >= 1000) {
    hamsterImage.src = "hammster.png";
  } if (everclicked >= 10000) {
    hamsterImage.src = "hhamster.png";  
  } if (everclicked >= 50000) {
    hamsterImage.src = "h1.png";
  } if (everclicked >= 100000) {
    hamsterImage.src = "h2.png";
  } if (everclicked >= 300000) {
    hamsterImage.src = "h3.png";
  } if (everclicked >= 600000) {
    hamsterImage.src = "h4.png";
  } if (everclicked >= 1000000) {
    hamsterImage.src = "h5.png";
  } if (everclicked >= 2000000) {
    hamsterImage.src = "h6.png";
  } if (everclicked >= 5000000) {
    hamsterImage.src = "h7.png";
  } if (everclicked >= 10000000) {
    hamsterImage.src = "h8.png";
  } if (everclicked >= 30000000) {
    hamsterImage.src = "h9.png";
  } if (everclicked >= 60000000) {
    hamsterImage.src = "h10.png";
  } if (everclicked >= 100000000) {
    hamsterImage.src = "h11.png";
  } if (everclicked >= 200000000) {
    hamsterImage.src = "h12.png";
  } if (everclicked >= 500000000) {
    hamsterImage.src = "h13.png";
  } if (everclicked >= 700000000) {
    hamsterImage.src = "h14.png";
  } if (everclicked >= 1000000000) {
    hamsterImage.src = "h15.png";
  } if (everclicked >= 10000000000) {
    hamsterImage.src = "h16.png";
  } if (everclicked >= 50000000000) {
    hamsterImage.src = "h18.png";
  } if (everclicked >= 9999999999999) {
    hamsterImage.src = "h17.png";
  }

  // Update the display for JC to next hamster
  const nextHamsterInfo = document.getElementById("next-hamster-info");
  if (nextThreshold) {
    const jcLeft = nextThreshold - everclicked;
    nextHamsterInfo.textContent = `JC to next hamster: ${jcLeft}`;
  } else {
    nextHamsterInfo.textContent = "Max Hamster reached!";
  }
}


// Function to trigger the click animation
function triggerClickAnimation() {
  const hamsterImage = document.getElementById("hamster-image");
  hamsterImage.classList.add('click-animation');
  setTimeout(() => {
    hamsterImage.classList.remove('click-animation');
  }, 200);
}

// Toggle the upgrade menu
// Toggle the upgrade menu
function toggleMenu() {
  const menu = document.getElementById("upgrade-menu");
  const gameTitle = document.querySelector(".game-title");
  const hamsterImage = document.getElementById("hamster-image");
  const currentJC = document.getElementById("current-jc");

  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
    // Hide elements
    gameTitle.classList.add("hidden");
    hamsterImage.classList.add("hidden");
    currentJC.classList.add("hidden");
  } else {
    menu.style.display = "none";
    // Show elements
    gameTitle.classList.remove("hidden");
    hamsterImage.classList.remove("hidden");
    currentJC.classList.remove("hidden");
  }
}

document.getElementById("menu-button").addEventListener("click", toggleMenu);
