const imageUrls = [
    "./images/img1.jpeg",
    "./images/img2.jpeg",
    "./images/img3.jpeg",
    "./images/img4.jpeg",
    "./images/img5.jpeg",
    "./images/img6.jpeg",
    "./images/img7.jpeg",
    "./images/img8.jpeg",
    "./images/img9.jpeg",
    "./images/img11.jpeg",
    "./images/img2.jpeg",
    "./images/img13.jpeg",
    "./images/img14.jpeg",
    "./images/img15.jpeg",
    "./images/img16.jpeg"
  ];
  
  function loadImages(columnId, count = 16) {
    const column = document.getElementById(columnId);
    for (let i = 0; i < count; i++) {
      const img = document.createElement("img");
      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      img.src = imageUrls[randomIndex];
      column.appendChild(img);
    }
  
    // Clone for seamless scroll
    const cloned = column.cloneNode(true);
    column.appendChild(cloned);
  }
  
  loadImages("col1");
  loadImages("col2");
  loadImages("col3");
  loadImages("col4");
//   loadImages("col5");
  