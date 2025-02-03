let noBtnScale = 1; // Initial scale for "NO" button
let yesBtnScale = 1; // Initial scale for "YES" button

function goIn() {
    const carouselSection = document.getElementById('carouselSection');
    carouselSection.scrollIntoView({ behavior: 'smooth' });
}

function goToValentine() {
    const valentineSection = document.getElementById('ask-valentine');
    valentineSection.scrollIntoView({ behavior: 'smooth' });
}

function shrinkNoBtn() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    
    // Shrink the "NO" button by a factor each time
    noBtnScale -= 0.2;
    yesBtnScale += 0.2;

    // Apply the new scales
    noBtn.style.transform = `scale(${noBtnScale})`;
    yesBtn.style.transform = `scale(${yesBtnScale})`;
}

function sweetMessage() {
    const valentineSection = document.getElementById('ask-valentine');
    const sweetMessageSection = document.getElementById('sweet-message');
    
    valentineSection.style.display = 'none';
    sweetMessageSection.style.display = 'block';
}
