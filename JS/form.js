let formData = { email: "", message: "" };

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector("input[type='email']");
const messageTextarea = form.querySelector("textarea");

// завантаження сторінки
document.addEventListener("DOMContentLoaded", () => {
  // Отримання даних із локального сховища за ключем "feedback-form-state"
  const savedData = localStorage.getItem("feedback-form-state");

  // Якщо у сховищі є збережені дані
  if (savedData) {
    formData = JSON.parse(savedData); // Парсинг JSON-даних у об'єкт formData
    emailInput.value = formData.email; // Заповнення поля email збереженими даними
    messageTextarea.value = formData.message; // Заповнення поля message збереженими даними
  }
});

// Обробка події input для відстеження змін у формі
form.addEventListener("input", (event) => {
  const { name, value } = event.target; // Отримання імені та значення зміненого поля
  if (name === "email" || name === "message") {
    formData[name] = value; // Оновлення відповідного поля в об'єкті formData
    localStorage.setItem("feedback-form-state", JSON.stringify(formData)); // Збереження оновлених даних у локальному сховищі
  }
});

let submitBtn = document.querySelector("button[type='submit']");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields"); // Виведення попередження, якщо поля порожні
  } else {
    console.log(formData);
    localStorage.removeItem("feedback-form-state"); // Видалення даних з локального сховища
    formData = { email: "", message: "" }; // Очищення об'єкта formData
    emailInput.value = ""; // Очищення поля email
    messageTextarea.value = ""; // Очищення поля message
  }
});
