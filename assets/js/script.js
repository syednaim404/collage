const noticeText = document.querySelector('.notice-text');
const noticeContent = document.querySelector('.notice-content');

// গতি: প্রতি সেকেন্ডে 150 পিক্সেল
const speed = 150;

function updateScrollSpeed() {
    const textWidth = noticeText.scrollWidth;
    const containerWidth = noticeContent.clientWidth;

    const distance = textWidth + containerWidth;
    const duration = distance / speed;

    noticeText.style.setProperty(
        '--scroll-duration',
        duration + 's'
    );
}
updateScrollSpeed();
window.addEventListener('resize', updateScrollSpeed);




// teacher section 
  document.querySelectorAll('.faculty-carousel').forEach(carousel => {
            const track = carousel.querySelector('.faculty-track');

            function setScrollSpeed() {
                const cards = track.querySelectorAll('.faculty-card');
                const totalCards = cards.length;

                // Original cards are the first half; duplicates are the second half.
                const originalCardCount = totalCards / 2;

                if (!Number.isInteger(originalCardCount) || originalCardCount < 1) {
                    return;
                }

                const gap = parseFloat(getComputedStyle(track).gap) || 0;
                let loopDistance = 0;

                // Measure the original cards and the gaps between them,
                // including the gap before the duplicate set.
                for (let i = 0; i < originalCardCount; i++) {
                    loopDistance += cards[i].getBoundingClientRect().width;
                    loopDistance += gap;
                }

                track.style.setProperty('--slide-distance', `${loopDistance}px`);

                // Constant scrolling speed: 80 pixels per second.
                const speed = 80;
                const duration = loopDistance / speed;

                track.style.setProperty('--slide-duration', `${duration}s`);
            }

            setScrollSpeed();

            window.addEventListener('resize', setScrollSpeed);

            // Recalculate after images load.
            track.querySelectorAll('img').forEach(img => {
                if (!img.complete) {
                    img.addEventListener('load', setScrollSpeed, { once: true });
                }
            });
        });
