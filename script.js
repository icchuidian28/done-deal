/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        const open = nav.classList.toggle("open");

        menuBtn.setAttribute(
            "aria-expanded",
            open
        );

    });

}


/* Close mobile menu
   when a navigation link
   is clicked
*/

document
    .querySelectorAll("nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


/* =========================
   CURRENT YEAR
========================= */

const year = document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================
   BOOKING FORM
========================= */

const bookingForm =
    document.getElementById("bookingForm");


if (bookingForm) {

    bookingForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const formData =
                new FormData(this);

            const name =
                formData.get("name");

            const phone =
                formData.get("phone");

            const motorcycle =
                formData.get("motorcycle");

            const message =
                formData.get("message");


            /*
                IMPORTANT:

                Replace this email address
                with Done Deal's actual email.
            */

            const shopEmail =
                "your-email@example.com";


            const subject =
                encodeURIComponent(
                    "Done Deal Inspection Request - " +
                    motorcycle
                );


            const body =
                encodeURIComponent(

                    `Name: ${name}

Mobile Number: ${phone}

Motorcycle:
${motorcycle}

Concern:
${message}

Please contact me regarding motorcycle inspection.`

                );


            window.location.href =
                `mailto:${shopEmail}?subject=${subject}&body=${body}`;

        }

    );

}
