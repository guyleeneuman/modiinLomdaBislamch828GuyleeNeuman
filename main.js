// ===============================
// popUp שמופיע רק פעם אחת
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");

    // בודק אם כבר ראו את הפופאפ
    const popupSeen = sessionStorage.getItem("popupSeen");

    if (popupSeen === "true" && overlay) {
        overlay.style.display = "none";
    }
});

function closePopup() {
    const overlay = document.getElementById("overlay");

    // מסמן שראו את הפופאפ
    sessionStorage.setItem("popupSeen", "true");

    // מעלים
    overlay.style.display = "none";
}
// ===============================
// מערכת איקסים מצטברת למפה + לחיצה לכל איקס
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const subjects = [
        ".subject1",
        ".subject2",
        ".subject3",
        ".subject4",
        ".subject5",
        ".subject6",
        ".subject7"
    ];

    // איזה שלב המשתמש נמצא
    let currentStep = sessionStorage.getItem("mapStep");

    if (currentStep === null) {
        currentStep = 0;
        sessionStorage.setItem("mapStep", currentStep);
    }

    currentStep = Number(currentStep);

    // מציג את כל האיקסים שנפתחו עד עכשיו
    for (let i = 0; i <= currentStep && i < subjects.length; i++) {
        const el = document.querySelector(subjects[i]);
        if (!el) continue;

        el.style.display = "block";

        // מוסיף מאזין לחיצה לכל האיקסים המוצגים
        el.addEventListener("click", () => {
            // רק אם זה האיקס האחרון — מעדכן את שלב הבא
            if (i === currentStep) {
                sessionStorage.setItem("mapStep", currentStep + 1);
            }
            // מעבר לדף המתאים
            window.location.href = `${i + 1}.html`;
        });
    }

    // מסתיר את האיקסים שעדיין לא נפתחו
    for (let i = currentStep + 1; i < subjects.length; i++) {
        const el = document.querySelector(subjects[i]);
        if (el) el.style.display = "none";
    }

});

function showThankYou() {
    const thankYouImg = document.querySelector(".thankYou");
    const overlay = document.getElementById("thankOverlay");

    // מציג את ההשחרה והתמונה
    overlay.style.display = "block";
    thankYouImg.style.display = "block";

    // אחרי 3 שניות מעלים את שניהם
    setTimeout(() => {
        thankYouImg.style.display = "none";
        overlay.style.display = "none";
    }, 3000);
}
