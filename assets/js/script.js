// ---------- Notice Scroll Section ----------
const noticeText = document.querySelector(
    '.scroll-text-section .notice-text'
);

const noticeContent = document.querySelector(
    '.scroll-text-section .notice-content'
);

// Scrolling speed: 150 pixels per second
const noticeSpeed = 150;

function updateScrollSpeed() {
    if (!noticeText || !noticeContent) {
        return;
    }

    const textWidth = noticeText.scrollWidth;
    const containerWidth = noticeContent.clientWidth;

    const distance = textWidth + containerWidth;
    const duration = distance / noticeSpeed;

    noticeText.style.setProperty(
        '--scroll-duration',
        `${duration}s`
    );
}

updateScrollSpeed();

window.addEventListener('resize', updateScrollSpeed);


// ---------- Faculty Carousel Section ----------
document.querySelectorAll('.faculty-slider').forEach(carousel => {

    const track = carousel.querySelector('.faculty-slider-track');

    if (!track) {
        return;
    }

    function setScrollSpeed() {
        const cards = track.querySelectorAll('.faculty-member-item');
        const totalCards = cards.length;

        // Original cards are the first half; duplicates are the second half.
        const originalCardCount = totalCards / 2;

        if (
            !Number.isInteger(originalCardCount) ||
            originalCardCount < 1
        ) {
            return;
        }

        const gap = parseFloat(getComputedStyle(track).gap) || 0;
        let loopDistance = 0;

        // Calculate the width of the original cards and their gaps.
        for (let i = 0; i < originalCardCount; i++) {
            loopDistance += cards[i].getBoundingClientRect().width;

            // Add gap after each original card, including the last one.
            loopDistance += gap;
        }

        track.style.setProperty(
            '--slide-distance',
            `${loopDistance}px`
        );

        // Constant scrolling speed: 80 pixels per second.
        const facultySpeed = 80;
        const duration = loopDistance / facultySpeed;

        track.style.setProperty(
            '--slide-duration',
            `${duration}s`
        );
    }

    setScrollSpeed();

    window.addEventListener('resize', setScrollSpeed);

    // Recalculate after images load.
    track.querySelectorAll('img').forEach(img => {
        if (!img.complete) {
            img.addEventListener('load', setScrollSpeed, {
                once: true
            });

            img.addEventListener('error', setScrollSpeed, {
                once: true
            });
        }
    });
});