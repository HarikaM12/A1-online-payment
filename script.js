document.addEventListener("DOMContentLoaded", function () {

    const doneButton = document.querySelector(".done-btn");

    doneButton.addEventListener("click", function () {

        const message =
`Thank you for visiting *A1 ONLINE (CSC Centre)!* 🙏

We truly appreciate your support.

Please rate us on Google ⭐⭐⭐⭐⭐

https://g.page/r/CQAAALAarYk4EAE/review`;

        const whatsappURL =
"https://wa.me/?text=" + encodeURIComponent(message);

        window.open(whatsappURL, "_blank");

    });

});