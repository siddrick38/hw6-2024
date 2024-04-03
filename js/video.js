var video = document.getElementById("player1");
var slider = document.getElementById("slider");
var volume = document.getElementById("volume");

window.addEventListener("load", function () {
  console.log("Good job opening the window");

  video.autoplay = false;
  console.log("Auto play is set to", video.autoplay);
  video.loop = false;
  console.log("Loop is set to", video.loop);
});

// play button
document.querySelector("#play").addEventListener("click", function () {
  console.log("Play video");

  video.play();
  volume.innerHTML = slider.value + "%";
});

// pause button
document.querySelector("#pause").addEventListener("click", function () {
  console.log("Pause video");

  video.pause();
});

// slow down button
document.querySelector("#slower").addEventListener("click", function () {
  console.log("Slow down video");

  video.playbackRate -= 0.1;
  console.log("Speed:", video.playbackRate);
});

// speed up button
document.querySelector("#faster").addEventListener("click", function () {
  console.log("Speed up video");

  video.playbackRate += 0.1;
  console.log("Speed:", video.playbackRate);
});

// skip button
document.querySelector("#skip").addEventListener("click", function () {
  console.log("Skip ahead 10 seconds");

  video.currentTime += 10;
  console.log("Video current time is", video.currentTime);

  if (video.currentTime >= video.duration) {
    video.currentTime = 0;
  }
});

// mute button
document.querySelector("#mute").addEventListener("click", function () {
  if (video.muted == false) {
    this.innerHTML = "Unmute";
    video.muted = true;
  } else {
    this.innerHTML = "Mute";
    video.muted = false;
  }
});

// volume slider
document.querySelector("#slider").addEventListener("change", function () {
  video.volume = slider.value / 100;
  volume.innerHTML = slider.value + "%";
  console.log("The current volume is", video.volume);
});

// old school/vintage
document.querySelector("#vintage").addEventListener("click", function () {
  video.classList.add("oldSchool");
});
document.querySelector("#orig").addEventListener("click", function () {
  if (video.classList.contains("oldSchool")) {
    video.classList.remove("oldSchool");
  }
});
