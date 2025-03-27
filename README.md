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
    .avatar img {
      width: 100%;
      border-radius: 50%;
      border: 2px solid #fff;
      filter: drop-shadow(0 0 15px #45ffb8);
      transition: transform 0.5s;
    }
    .avatar img:hover {
      transform: scale(1.1);
    }
    .avatar::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, transparent 50%, rgba(69,255,184,0.2));
      mix-blend-mode: overlay;
      animation: scan 2s infinite;
    }
    /* Стили для 3D-бейджей */
    .badges {
      perspective: 1000px;
      transform-style: preserve-3d;
      margin: 30px 0;
    }
    .badge {
      display: inline-block;
      margin: 0 20px;
      transform: translateZ(50px);
    }
    .badge:nth-child(1) { transform: rotateY(-25deg) translateZ(50px); }
    .badge:nth-child(2) { transform: rotateY(25deg) translateZ(50px); }
    .badge:nth-child(3) { transform: rotateY(-15deg) translateZ(50px); }
    /* Разделитель */
    .divider {
      margin: 20px auto;
    }
    /* Секция с философией кода от магистра Йоды */
    .yoda {
      font-family: 'Space Mono', monospace;
      font-size: 1.3em;
      margin-top: 40px;
      padding: 20px;
      border: 2px dashed #45ffb8;
      border-radius: 10px;
      text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
    }
  </style>
</head>
<body>
  <!-- Анимированный заголовок с градиентом -->
  <div class="divider">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=20&pause=1000&color=45FFB8&width=600&lines=▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰" alt="Разделитель">
  </div>
  <h1>
    <img src="https://readme-typing-svg.demolab.com?font=Space+Mono&weight=800&size=30&duration=4000&pause=1000&color=22F7F7&background=45FFB800&width=600&lines=%F0%9F%94%A5+Fedorov.sFF+%F0%9F%92%BB;%F0%9F%93%9A+Smart+Developer+%F0%
