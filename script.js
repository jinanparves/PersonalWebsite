function changeColor() {
    const colors = ["#f4a261", "#2a9d8f", "#e76f51", "#264653"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
