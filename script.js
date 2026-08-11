/* ========================================
   ANIMAÇÃO DOS CARDS DE SERVIÇOS
======================================== */

const serviceCards =
    document.querySelectorAll(".service-card");

const serviceObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const cards =
                        document.querySelectorAll(".service-card");

                    cards.forEach((card, index) => {

                        setTimeout(() => {

                            card.classList.add("visible");

                        }, index * 120);

                    });

                    serviceObserver.disconnect();
                }

            });

        },
        {
            threshold: 0.15
        }
    );


const servicesSection =
    document.querySelector(".services");

if (servicesSection) {
    serviceObserver.observe(servicesSection);
}