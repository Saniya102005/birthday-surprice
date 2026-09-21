/* =====================================================
   PERSONAL DETAILS
===================================================== */

const favouritePersonName = "Favourite Person...";

const personName = document.getElementById("personName");
const birthdayName = document.getElementById("birthdayName");
const letterPerson = document.getElementById("letterPerson");

if (personName) {
    personName.innerText = favouritePersonName;
}

if (birthdayName) {
    birthdayName.innerText = favouritePersonName;
}

if (letterPerson) {
    letterPerson.innerText = favouritePersonName;
}


/* =====================================================
   PAGE NAVIGATION
===================================================== */

function showPage(id) {

    const targetPage = document.getElementById(id);

    if (!targetPage) {
        console.error("Page not found:", id);
        return;
    }

    document.querySelectorAll(".page").forEach(function (page) {
        page.classList.remove("active");
    });

    targetPage.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   START PAGE PROTECTION
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const activePage = document.querySelector(".page.active");

    if (!activePage) {
        showPage("welcome");
    }

});


/* =====================================================
   MUSIC
===================================================== */

let musicPlaying = false;

function toggleMusic() {

    const song = document.getElementById("birthdaySong");
    const button = document.getElementById("musicButton");

    if (!song || !button) {
        return;
    }

    if (!musicPlaying) {

        song.play()
            .then(function () {

                musicPlaying = true;

                button.innerText = "🔇 Pause Special Song";

            })
            .catch(function () {

                alert(
                    "Please click the page first, then try playing the song again."
                );

            });

    } else {

        song.pause();

        musicPlaying = false;

        button.innerText = "🎵 Play Special Song";

    }
}


/* =====================================================
   CAKE
===================================================== */

let candlesBlown = 0;

function blowCandle(candle) {

    if (!candle) {
        return;
    }

    if (candle.classList.contains("off")) {
        return;
    }

    candle.classList.add("off");

    candle.innerText = "💨";

    candlesBlown++;

    if (candlesBlown === 3) {

        const cakeMessage =
            document.getElementById("cakeMessage");

        const cakeNext =
            document.getElementById("cakeNext");

        if (cakeMessage) {

            cakeMessage.innerText =
                "Your wish has been sent to the stars! ✨";

        }

        if (cakeNext) {

            cakeNext.classList.remove("hidden");

        }

        createConfetti();

    }
}


/* =====================================================
   SPECIAL CARDS
===================================================== */

function flipCard(card) {

    if (!card) {
        return;
    }

    card.classList.toggle("flipped");
}


/* =====================================================
   SPIN WHEEL
===================================================== */

let wheelRotation = 0;

const wheelMessages = [

    "💌 You deserve all the happiness in the world!",

    "🎁 A lifetime of beautiful memories awaits you!",

    "💜 You are more special than you realise!",

    "🌟 May all your dreams come true!",

    "🎂 This birthday is just the beginning of something beautiful!"

];


function spinWheel() {

    const wheel =
        document.getElementById("wheelCircle");

    const button =
        document.getElementById("spinButton");

    if (!wheel || !button) {
        return;
    }

    button.disabled = true;

    const extraRotation =
        Math.floor(Math.random() * 1800);

    wheelRotation +=
        1800 + extraRotation;

    wheel.style.transform =
        `rotate(${wheelRotation}deg)`;

    setTimeout(function () {

        const randomIndex =
            Math.floor(
                Math.random() *
                wheelMessages.length
            );

        const message =
            wheelMessages[randomIndex];

        const result =
            document.getElementById("wheelResult");

        const nextButton =
            document.getElementById("wheelNext");

        if (result) {

            result.innerText = message;

            result.classList.remove("hidden");

        }

        if (nextButton) {

            nextButton.classList.remove("hidden");

        }

        createConfetti();

    }, 4200);

}


/* =====================================================
   QUIZ
===================================================== */

function quizAnswer(correct) {

    const message =
        document.getElementById("quizMessage");

    const nextButton =
        document.getElementById("quizNext");

    if (!message) {
        return;
    }

    if (correct) {

        message.innerText =
            "Correct! 🎉 The secret memories are waiting!";

        message.style.color = "#8fffc1";

        if (nextButton) {
            nextButton.classList.remove("hidden");
        }

        createConfetti();

    } else {

        message.innerText =
            "Not quite! 👀🤣 Try again.";

        message.style.color = "#ffb5d9";

    }

}


/* =====================================================
   PASSWORD
===================================================== */

const secretPassword = "💗";


function unlockMemories() {

    const input =
        document.getElementById("passwordInput");

    const message =
        document.getElementById("passwordMessage");

    if (!input || !message) {
        return;
    }

    if (input.value.trim() === secretPassword) {

        sessionStorage.setItem(
            "memoriesUnlocked",
            "true"
        );

        message.innerText =
            "Unlocked! ✨";

        message.style.color =
            "#8fffc1";

        createConfetti();

        setTimeout(function () {

            showPage("memories");

        }, 800);

    } else {

        message.innerText =
            "Incorrect password. Try again.";

        message.style.color =
            "#ff9fcf";

        input.value = "";

        input.focus();

    }

}


/* =====================================================
   PASSWORD ENTER KEY
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const passwordInput =
        document.getElementById("passwordInput");

    if (passwordInput) {

        passwordInput.addEventListener(
            "keypress",
            function (event) {

                if (event.key === "Enter") {

                    unlockMemories();

                }

            }
        );

    }

});


/* =====================================================
   MEMORY DATA
===================================================== */

const memories = [

    {
        photo: "images/photo1.jpeg",
        title: "Memory #1 💜",
        message:
            "Our first meeting may have been just one moment, but it became a beautiful memory I’ll always keep close to my heart. 💜✨ I didn’t know what to expect, but meeting you made that moment truly special. 💗"
    },

    {
        photo: "images/photo2.jpeg",
        title: "Memory #2 💕",
        message:
            "Our first Traditional Day together made an ordinary college day feel so special. And that little jugad to click a photo together became one of my favorite memories with you. ❤️📸"
    },

    {
        photo: "images/photo3.jpeg",
        title: "Memory #3 🌸",
        message:
            "That first moment when we came closer felt like the whole world disappeared, leaving just you and me. ❤️✨"
    },

    {
        photo: "images/photo4.jpeg",
        title: "Memory #4 🌊",
        message:
            "Spending quality time with you at the beach, away from everything, made every moment feel so peaceful and special. 🌊❤️✨"
    },

    {
        photo: "images/photo5.jpeg",
        title: "Memory #5 🌸",
        message:
            "Dasara felt a little more special because I got to celebrate it with you. A beautiful festival and an even more beautiful memory. ❤️✨🌸"
    },

    {
        photo: "images/photo6.jpeg",
        title: "Memory #6 ✨",
        message:
            "This is one of those little moments that became a beautiful memory just because I got to share it with you. ❤️✨"
    },

    {
        photo: "images/photo7.jpeg",
        title: "Memory #7 🚆",
        message:
            "The train kept moving, but I wished our little journey together could stay still forever. Every moment beside you felt special. ❤️🚆✨"
    },

    {
        photo: "images/photo8.jpeg",
        title: "Memory #8 🎀",
        message:
            "Celebrating my special day with you made it even more special. Having you by my side was honestly the best part of the day. ❤️✨"
    },

    {
        photo: "images/photo9.jpeg",
        title: "Memory #9 🙏",
        message:
            "One wish I prayed for came true, so visiting Jivdani Temple with you to seek blessings made the moment even more meaningful. 🙏❤️✨"
    },

    {
        photo: "images/photo10.jpeg",
        title: "Memory #10 💕",
        message:
            "Matching colors, beautiful smiles, and you by my side — this photo became a little piece of our story that I’ll always keep close to my heart. ❤️📸✨"
    }

];


/* =====================================================
   MEMORY POPUP
===================================================== */

let currentMemory = 0;


function openMemory(index) {

    if (
        index < 0 ||
        index >= memories.length
    ) {
        return;
    }

    currentMemory = index;

    const memory =
        memories[index];

    const popup =
        document.getElementById("memoryPopup");

    const popupTitle =
        document.getElementById("popupTitle");

    const popupImage =
        document.getElementById("popupImage");

    const popupMessage =
        document.getElementById("popupMessage");

    const extraMessage =
        document.getElementById("extraPopupMessage");

    if (popupTitle) {

        popupTitle.innerText =
            memory.title;

    }

    if (popupImage) {

        popupImage.src =
            memory.photo;

        popupImage.alt =
            memory.title;

    }

    if (popupMessage) {

        popupMessage.innerText =
            memory.message;

    }

    if (extraMessage) {

        extraMessage.classList.add("hidden");

    }

    if (popup) {

        popup.classList.add("show");

    }

}


/* =====================================================
   SHOW EXTRA MEMORY MESSAGE
===================================================== */

function showMessage() {

    const extraMessage =
        document.getElementById(
            "extraPopupMessage"
        );

    if (extraMessage) {

        extraMessage.classList.remove("hidden");

    }

}


/* =====================================================
   CLOSE MEMORY
===================================================== */

function closeMemory() {

    const popup =
        document.getElementById("memoryPopup");

    if (popup) {

        popup.classList.remove("show");

    }

}


/* =====================================================
   CLOSE POPUP BY CLICKING OUTSIDE
===================================================== */

document.addEventListener("click", function (event) {

    const popup =
        document.getElementById("memoryPopup");

    if (!popup) {
        return;
    }

    if (
        popup.classList.contains("show") &&
        event.target === popup
    ) {

        closeMemory();

    }

});


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeMemory();

    }

});


/* =====================================================
   FINAL GIFT
===================================================== */

function openGift() {

    const giftBox =
        document.getElementById("giftBox");

    const finalMessage =
        document.getElementById("finalMessage");

    if (giftBox) {

        giftBox.style.display = "none";

    }

    if (finalMessage) {

        finalMessage.classList.remove("hidden");

    }

    createConfetti();

    setTimeout(function () {

        fireworks();

    }, 500);

}


/* =====================================================
   CONFETTI
===================================================== */

function createConfetti() {

    const effects =
        document.getElementById("effects");

    if (!effects) {
        return;
    }

    const emojis = [
        "💜",
        "💗",
        "💕",
        "✨",
        "🎉",
        "🎊",
        "🎂",
        "🎁",
        "⭐",
        "🌸"
    ];

    for (let i = 0; i < 35; i++) {

        const piece =
            document.createElement("div");

        piece.className =
            "confetti-piece";

        piece.innerText =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.animationDuration =
            (2 + Math.random() * 2) + "s";

        piece.style.animationDelay =
            Math.random() * 0.8 + "s";

        piece.style.fontSize =
            (15 + Math.random() * 20) + "px";

        effects.appendChild(piece);

        setTimeout(function () {

            piece.remove();

        }, 4500);

    }

}


/* =====================================================
   FIREWORKS EFFECT
===================================================== */

function fireworks() {

    for (let i = 0; i < 5; i++) {

        setTimeout(function () {

            createConfetti();

        }, i * 600);

    }

}


/* =====================================================
   PAGE LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "🎂 Birthday Surprise Website Loaded!"
        );

        const unlocked =
            sessionStorage.getItem(
                "memoriesUnlocked"
            );

        if (unlocked === "true") {

            console.log(
                "💜 Memories were previously unlocked."
            );

        }

    }
);
