let lastScroll = 0; // Lưu vị trí cuộn trang trước đó
const navbar = document.getElementById("navbar"); // Lấy thanh điều hướng

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset; // Vị trí cuộn trang hiện tại

    // Ẩn thanh điều hướng khi cuộn xuống
    if (currentScroll > lastScroll && currentScroll > 50) {
        navbar.classList.add("hidden");
    } 
    // Hiển thị thanh điều hướng khi cuộn lên
    else {
        navbar.classList.remove("hidden");
    }

    lastScroll = currentScroll; // Cập nhật vị trí cuộn trang
});