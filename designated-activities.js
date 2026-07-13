/* =====================================================
   designated-activities.js
   行政書士齋藤光男事務所
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* スムーススクロール */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            window.scrollTo({

                top: target.offsetTop - 80,

                behavior: "smooth"

            });

        });

    });

    /* ヘッダー */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.background = "#05111f";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

        } else {

            header.style.background = "#07182e";
            header.style.boxShadow = "0 5px 20px rgba(0,0,0,.2)";

        }

    });

    /* フェードイン */

    const targets = document.querySelectorAll(
        ".info-card,.feature-box,.document-card,.hero-card"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });

    targets.forEach(item => {

        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = "all .7s ease";

        observer.observe(item);

    });

    /* TOPへ戻る */

    const topButton = document.createElement("button");

    topButton.innerHTML = "↑";

    document.body.appendChild(topButton);

    Object.assign(topButton.style, {

        position: "fixed",
        right: "25px",
        bottom: "25px",
        width: "55px",
        height: "55px",
        borderRadius: "50%",
        border: "none",
        background: "#d6b66f",
        color: "#07182e",
        fontSize: "24px",
        fontWeight: "bold",
        cursor: "pointer",
        display: "none",
        zIndex: "9999"

    });

    window.addEventListener("scroll", () => {

        topButton.style.display =
            window.scrollY > 500 ? "block" : "none";

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

});
