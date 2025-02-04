document.addEventListener("DOMContentLoaded", function () {
  console.log("Trang đã tải xong!");

  // Lấy tất cả ảnh trong thư viện
  const images = document.querySelectorAll(".gallery img");

  // Duyệt qua từng ảnh và thêm sự kiện
  for (let i = 0; i < images.length; i++) {
    let img = images[i];

    // Thêm tabindex để có thể chọn ảnh bằng bàn phím
    img.setAttribute("tabindex", "0");

    // Sự kiện khi di chuột vào
    img.addEventListener("mouseover", function () {
      img.style.border = "3px solid red";
      console.log("Chuột vào ảnh:", img.alt);
    });

    // Sự kiện khi di chuột ra
    img.addEventListener("mouseleave", function () {
      img.style.border = "none";
      console.log("Chuột rời khỏi ảnh:", img.alt);
    });

    // Sự kiện khi ảnh nhận focus (bằng bàn phím)
    img.addEventListener("focus", function () {
      img.style.border = "3px solid blue";
      console.log("Focus vào ảnh:", img.alt);
    });

    // Sự kiện khi ảnh mất focus
    img.addEventListener("blur", function () {
      img.style.border = "none";
      console.log("Mất focus khỏi ảnh:", img.alt);
    });
  }
});
