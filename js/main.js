/* ===================== MOBILE NAV =======================*/
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavButton = document.querySelector(".mobile-nav-button");
const mobileNavIcon = document.querySelector(".mobile-nav-button__icon");

mobileNavButton.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    mobileNavIcon.classList.toggle("active");
});

/* ======================== VIDEO =========================*/
const videoBtn = document.querySelector("#video-story-btn");
const videoBtnIcon = document.querySelector("#video-story-btn-icon");
const videoOverlay = document.querySelector("#video-story-overlay");
const videoFile = document.querySelector("#video-story");

videoFile.onpause = function () {
    setPauseIcon();
};

// videoOverlay.onmouseleave = toggleOverlay;
// videoOverlay.onmouseenter = toggleOverlay;

videoBtn.addEventListener("click", function () {
    if (videoFile.paused) {
        videoFile.play();
        videoBtnIcon.src = "./img/story/pause-white.svg";

        // Скрываем оверлей, прии выходе за границы
        videoOverlay.onmouseleave = toggleOverlay;
        videoOverlay.onmouseenter = toggleOverlay;
    } else {
        videoFile.pause();
        setPauseIcon();
        videoOverlay.onmouseleave = null;
        videoOverlay.onmouseenter = null;
    }
});

function setPauseIcon() {
    videoBtnIcon.src = "./img/story/play-white.svg";
    videoOverlay.classList.remove("hidden");
}

// Ф. скрыть/показать Play/Pause и оверлей, кога выходим за его границы
function toggleOverlay(event) {
    console.log(event.type);
    if (event.type === "mouseleave") {
        videoOverlay.classList.add("hidden");
    } else {
        videoOverlay.classList.remove("hidden");
    }
}
