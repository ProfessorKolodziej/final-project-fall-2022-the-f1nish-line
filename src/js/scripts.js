// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)
const mapArea = document.querySelector('.map-section');
mapArea.addEventListener('click', showOverlay);

function showOverlay(event) {
    const clicked = event.target;
    console.log(clicked.tagName)
    if (clicked.tagName.toLowerCase() === 'button' ||
        clicked.tagName.toLowerCase() === 'img') {
        const city = this.dataset.city;
        const overlay = document.querySelector(`#overlay-${austin}`);
        console.log(overlay);
        overlay.classList.toggle('hide');
        overlay.classList.toggle('show');
    }
}
const teamsSection = document.getElementById("teams-scrollpane");
teamsSection.scrollTo(140, 0);

const driversSection = document.getElementById("drivers-scrollpane");
driversSection.scrollTo(140, 0);
