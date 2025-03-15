document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".progress-fill").forEach(bar => {
        let percent = bar.getAttribute("data-percent");
        bar.style.width = percent + "%"; // Set the width dynamically
    });
});