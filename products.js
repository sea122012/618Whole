// 在 script.js 結尾加入
fetch('products.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('product-list-container').innerHTML = data;
  });
