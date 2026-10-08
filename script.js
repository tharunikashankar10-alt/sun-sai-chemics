document.addEventListener("DOMContentLoaded", function () {

    /* ==============================
       MOBILE MENU
    ============================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", function () {

            nav.classList.toggle("open");

        });

    }


    /* ==============================
       CLOSE MOBILE MENU
       WHEN LINK IS CLICKED
    ============================== */

    document.querySelectorAll(".nav a").forEach(function (link) {

        link.addEventListener("click", function () {

            if (nav) {
                nav.classList.remove("open");
            }

        });

    });


    /* ==============================
       SCROLL REVEAL
    ============================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("visible");

                            observer.unobserve(entry.target);

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );

        revealElements.forEach(function (element) {

            observer.observe(element);

        });

    } else {

        revealElements.forEach(function (element) {

            element.classList.add("visible");

        });

    }


    /* ==============================
       ENQUIRY FORM
    ============================== */

    const enquiryForm =
        document.getElementById("enquiryForm");

    const formStatus =
        document.getElementById("formStatus");


    if (enquiryForm) {

        enquiryForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.getElementById("name").value.trim();

                const company =
                    document.getElementById("company").value.trim();

                const phone =
                    document.getElementById("phone").value.trim();

                const email =
                    document.getElementById("email").value.trim();

                const requirement =
                    document.getElementById("requirement").value.trim();

                const message =
                    document.getElementById("message").value.trim();


                const subject =
                    "Website Enquiry - Sun Sai Chemics";


                const body =
`Name: ${name}

Company: ${company}

Phone: ${phone}

Email: ${email}

Requirement: ${requirement}

Message:
${message}`;


                const mailtoLink =
                    "mailto:sunsaichemics@gmail.com" +
                    "?subject=" +
                    encodeURIComponent(subject) +
                    "&body=" +
                    encodeURIComponent(body);


                window.location.href = mailtoLink;


                if (formStatus) {

                    formStatus.textContent =
                        "Opening your email application...";

                }

            }
        );

    }

});