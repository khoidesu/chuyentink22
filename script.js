function createFallingFlower() {
    const flower = document.createElement("div");
    flower.innerHTML = "🌸"; // Icon hoa đào
    flower.style.position = "fixed";
    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.top = "-50px";
    flower.style.fontSize = Math.random() * 20 + 20 + "px";
    flower.style.opacity = Math.random();
    flower.style.zIndex = "1000";
    flower.style.pointerEvents = "none";
    document.body.appendChild(flower);

    let speed = Math.random() * 3 + 2; // Tốc độ rơi
    let angle = Math.random() * 2 - 1; // Góc nghiêng
    let rotation = 0; // Góc xoay

    function fall() {
        if (parseInt(flower.style.top) > window.innerHeight) {
            flower.remove(); // Xóa hoa khi rơi ra khỏi màn hình
        } else {
            flower.style.top = parseInt(flower.style.top) + speed + "px";
            flower.style.left = parseInt(flower.style.left) + angle + "px";
            rotation += 2; // Tăng góc xoay
            flower.style.transform = `rotate(${rotation}deg)`; // Xoay hoa
            requestAnimationFrame(fall); // Lặp lại hiệu ứng
        }
    }

    fall();
}

// Tạo hoa mới mỗi 500ms
setInterval(createFallingFlower, 500);