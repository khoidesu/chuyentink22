// trang con
let likeCount = 0;
let isLiked = false;

function toggleLike() {
    const likeButton = document.getElementById('like-button');
    const likeIcon = document.getElementById('like-icon');
    const likeCountElement = document.getElementById('like-count');

    if (isLiked) {
        // Nếu đã like, hủy like
        likeCount--;
        likeButton.classList.remove('liked'); // Xóa class 'liked'
        likeIcon.textContent = '🤍'; // Biểu tượng trái tim trắng
    } else {
        // Nếu chưa like, thêm like
        likeCount++;
        likeButton.classList.add('liked'); // Thêm class 'liked'
        likeIcon.textContent = '❤️'; // Biểu tượng trái tim đỏ
    }

    // Cập nhật số lượt like
    likeCountElement.textContent = likeCount;
    isLiked = !isLiked; // Đảo trạng thái like
}

function addComment() {
    const commentInput = document.getElementById('comment-input');
    const commentsSection = document.getElementById('comments-section');

    if (commentInput.value.trim() !== '') {
        const newComment = document.createElement('p');
        newComment.textContent = commentInput.value;
        commentsSection.appendChild(newComment);
        commentInput.value = '';
    }
}

function sharePost() {
    alert('Chia sẻ bài viết thành công!');
}

function goBack() {
    window.history.back(); // Quay lại trang trước đó
}

let currentSlide = 0;

function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    const totalSlides = document.querySelectorAll('.carousel-item').length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Tự động chuyển slide sau mỗi 5 giây (tùy chọn)
setInterval(nextSlide, 5000);

let currentLightboxIndex = 0;
const images = document.querySelectorAll('.carousel-item img');

// Mở lightbox
function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');

    currentLightboxIndex = index;
    lightboxImage.src = images[index].src;
    lightbox.style.display = 'flex';
}

// Đóng lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Chuyển đổi hình ảnh trong lightbox
function changeLightboxImage(direction) {
    currentLightboxIndex += direction;

    if (currentLightboxIndex >= images.length) {
        currentLightboxIndex = 0;
    } else if (currentLightboxIndex < 0) {
        currentLightboxIndex = images.length - 1;
    }

    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = images[currentLightboxIndex].src;
}

// Đóng lightbox khi nhấn phím Esc
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});

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