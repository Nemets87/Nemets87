<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>May the Code be with you!</title>
  <!-- Подключение шрифтов -->
  <link href="https://fonts.googleapis.com/css2?family=MedievalSharp&family=Space+Mono:wght@700&display=swap" rel="stylesheet">
  <style>
    /* Основной стиль страницы */
    body {
      background: linear-gradient(135deg, #1e1e1e, #2c2c2c);
      color: #f8f8f2;
      font-family: 'MedievalSharp', cursive;
      margin: 0;
      padding: 20px;
      text-align: center;
    }
    h1 {
      font-family: 'MedievalSharp', cursive;
      font-size: 3em;
      margin: 20px 0;
      text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.8);
    }
    p {
      font-size: 1.5em;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
      max-width: 800px;
      margin: 0 auto 30px auto;
      line-height: 1.4;
    }
    /* Анимация для эффекта голограммы */
    @keyframes hologram {
      0% { filter: hue-rotate(0deg); }
      50% { filter: hue-rotate(45deg); }
      100% { filter: hue-rotate(0deg); }
    }
    /* Анимация для эффекта сканирования */
    @keyframes scan {
      0% { transform: translateX(-100%); }
      50% { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }
    /* Стили для аватара с эффектом голограммы */
    .avatar {
      width: 250px;
      height: 250px;
      margin: 20px auto;
      border-radius: 50%;
      background: linear-gradient(45deg, #45ffb8, #22f7f7, #ff69b4);
      padding: 3px;
      position: relative;
      overflow: hidden;
      animation: hologram 3s infinite;
    }
    .avatar
