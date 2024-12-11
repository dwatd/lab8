const images = [
  {
    preview: "./images/img1.jpg",
    original: "./images/img1.jpg",
    description: "img-1",
  },
  {
    preview: "./images/img3.jpg",
    original: "./images/img3.jpg",
    description: "img-3",
  },
  {
    preview: "./images/img4.jpg",
    original: "./images/img4.jpg",
    description: "img-4",
  },
  {
    preview: "./images/img2.jpg",
    original: "./images/img2.jpg",
    description: "img-2",
  },
  {
    preview: "./images/img15.jpg",
    original: "./images/img15.jpg",
    description: "img-15",
  },
  {
    preview: "./images/img6.jpg",
    original: "./images/img6.jpg",
    description: "img-6",
  },
  {
    preview: "./images/img8.jpg",
    original: "./images/img8.jpg",
    description: "img-8",
  },
  {
    preview: "./images/img10.jpg",
    original: "./images/img10.jpg",
    description: "img-10",
  },
  {
    preview: "./images/img5.jpg",
    original: "./images/img5.jpg",
    description: "img-5",
  },
  {
    preview: "./images/img7.jpg",
    original: "./images/img7.jpg",
    description: "img-7",
  },
  {
    preview: "./images/img14.jpg",
    original: "./images/img14.jpg",
    description: "img-14",
  },
  {
    preview: "./images/img9.jpg",
    original: "./images/img9.jpg",
    description: "img-9",
  },
  {
    preview: "./images/img11.jpg",
    original: "./images/img11.jpg",
    description: "img-11",
  },
];

const galleryContainer = document.querySelector(".gallery");

const columnsCount = 5;
const columns = Array.from({ length: columnsCount }, () => []);

images.forEach((image, index) => {
  columns[index % columnsCount].push(image);
});

const galleryMarkup = columns
  .map(
    (column) =>
      `<li class="gallery_item">` +
      column
        .map(
          ({ preview, original, description }) =>
            `<a class="gallery_link" href="${original}">
              <img
                class="gallery_image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>`
        )
        .join("") +
      `</li>`
  )
  .join("");

galleryContainer.innerHTML = galleryMarkup;

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();

  const isImage = event.target.classList.contains("gallery_image");
  if (!isImage) return;

  const largeImageURL = event.target.dataset.source;
  console.log(largeImageURL); // 10 завдання

  // створення модального вікна з використанням бібліотеки "basicLightbox"
  const instance = basicLightbox.create(`
    <img src="${largeImageURL}">
  `);
  // Відображаємо модальне вікно
  instance.show();
});

let feedbackBtn = document.querySelector(".feedback");
feedbackBtn.addEventListener("click", function () {
  window.location.href = "form.html";
});
