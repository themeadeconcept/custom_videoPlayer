// Get DOM elements
const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Play and Pause video
function toggleVideoStatus() {
  // The following are video methods, that come with the video HTML tag
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Updates the play / pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = "<i class='fa fa-play fa-2x'></i>";
  } else {
    play.innerHTML = "<i class='fa fa-pause fa-2x'></i>";
  }
}

// Update progress and time stamp
function updateProgress() {
  // Make the progress bar equal to the percentage of the video that is complete
  progress.value = (video.currentTime / video.duration) * 100;

  // get the minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }

  // Get the seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// Set video time to progression chosen
function setVideoProgress() {
  // set the video current time to the value of the progress bar
  video.currentTime = (+progress.value * video.duration) / 100;
}

// Stop the video - sets video time to 0 and pauses the video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Event Listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
