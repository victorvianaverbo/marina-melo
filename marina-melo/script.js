document.addEventListener('DOMContentLoaded', () => {
    // Inicialização do AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            disableMutationObserver: true,
            once: true,
            offset: 50,
            duration: 800,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        });
    }

    // Scroll Line Progress (Como Funciona)
    const howSection = document.querySelector('.section-how-it-works');
    const scrollLine = document.getElementById('scroll-progress-line');
    const steps = document.querySelectorAll('.step-target');

    if (howSection && scrollLine && steps.length > 0) {
        window.addEventListener('scroll', () => {
            const rect = howSection.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Start progress near center
            let start = rect.top - viewportHeight / 2;
            let end = rect.height - viewportHeight / 2;

            if (start < 0) {
                let progress = Math.min(100, Math.max(0, (-start / end) * 100));
                scrollLine.style.height = `${progress}%`;
            } else {
                scrollLine.style.height = `0%`;
            }

            steps.forEach(step => {
                const stepRect = step.getBoundingClientRect();
                const stepCenter = stepRect.top + stepRect.height / 2;
                const windowCenter = window.innerHeight / 2;

                if (Math.abs(stepCenter - windowCenter) < 200) {
                    step.classList.add('is-active');
                } else {
                    step.classList.remove('is-active');
                }
            });
        }, { passive: true });
    }

    // FAQ Accordion
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const button = item.querySelector('.accordion-question');
        const answer = item.querySelector('.accordion-answer');

        button.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');

            // Close all other items
            accordionItems.forEach(otherItem => {
                otherItem.classList.remove('is-open');
                otherItem.querySelector('.accordion-question').setAttribute('aria-expanded', 'false');
                otherItem.querySelector('.accordion-answer').style.maxHeight = null;
            });

            if (!isOpen) {
                // Open this item
                item.classList.add('is-open');
                button.setAttribute('aria-expanded', 'true');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});
