const modal = document.getElementById("thankyouModal");

document.querySelector(".done-btn").onclick = function () {
    modal.style.display = "flex";
};

document.getElementById("closeBtn").onclick = function () {
    modal.style.display = "none";
};

document.getElementById("reviewBtn").onclick = function () {

    const message = `🙏 Thank you for visiting *A1 ONLINE (CSC Centre)!*

⭐ We'd love your feedback.

Please rate us on Google:

https://g.page/r/CQAAALAarYk4EAE/review`;

    window.location.href =
        "https://wa.me/?text=" + encodeURIComponent(message);

};
