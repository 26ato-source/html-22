// Navigation logic
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Simple Slider logic
function moveSlider(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    // In a real scenario, you would translate the X-axis 
    // This logic creates a simple "flash" effect for the demo
    slider.style.opacity = 0.5;
    setTimeout(() => {
        slider.style.opacity = 1;
        console.log(`Moving ${sliderId} in direction: ${direction}`);
    }, 200);
r