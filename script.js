document.querySelector(".done-btn").addEventListener("click", function () {

    const proceed = confirm(
        "🎉 Thank you for your payment!\n\nClick OK to leave us a Google Review via WhatsApp."
    );

    if (proceed) {

        const message = `🙏 Thank you for visiting *A1 ONLINE (CSC Centre)!*

We truly appreciate your support.

⭐ We'd love your feedback.

Please rate us on Google:
https://g.page/r/CQAAALAarYk4EAE/review

Thank you 😊`;

        window.location.href =
            "https://wa.me/?text=" + encodeURIComponent(message);
    }

});
