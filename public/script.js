// 获取按钮和图片元素
const showImageButton = document.getElementById("show-image-button");
const imageContainer = document.getElementById("image-container");
const rotatingImage = document.getElementById("rotating-image");

// 按钮点击事件
showImageButton.addEventListener("click", () => {
  // 显示图片容器
  imageContainer.style.display = "block";

  // 延时添加动画类
  setTimeout(() => {
    rotatingImage.classList.add("animate");
  }, 100); // 确保显示后添加动画
});
