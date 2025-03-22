function setBackground() {
    let color1 = document.getElementById('color1').value;
    let color2 = document.getElementById('color2').value;
    let gradientType = document.getElementById('gradientType').value;
    let direction = document.getElementById('direction').value;
            
    let gradient = gradientType === 'linear' 
                ? `linear-gradient(${direction}, ${color1}, ${color2})`
                : `radial-gradient(circle, ${color1}, ${color2})`;
            
    document.body.style.background = gradient;
    document.body.style.backgroundSize = "200% 200%";
}

function toggleAnimation() {
    if (document.body.style.animation) {
        document.body.style.animation = "";
    } else {
        document.body.style.animation = "gradientAnimation 5s infinite alternate";
    }
}
function randomizeColors() {
    let randomColor1 = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    let randomColor2 = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    document.getElementById('color1').value = randomColor1;
    document.getElementById('color2').value = randomColor2;
    setBackground();
}
