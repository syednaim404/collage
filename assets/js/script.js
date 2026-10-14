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
