<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <!-- Добавлен viewport для адаптивности -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>May the Code be with you!</title>
  <!-- Обновлены шрифты -->
  <link href="https://fonts.googleapis.com/css2?family=MedievalSharp&family=Space+Mono:wght@700&display=swap" rel="stylesheet">
  <style>
    /* Исправлены 3D-трансформации */
    .badges {
      perspective: 1000px;
      margin: 30px 0;
      display: flex; /* Добавлено для лучшего позиционирования */
      justify-content: center;
      gap: 40px; /* Замена margin для бейджей */
    }

    .badge {
      transform-style: preserve-3d;
      transition: transform 0.3s; /* Добавлена анимация */
    }

    .badge:hover {
      transform: translateZ(20px); /* Интерактивный эффект */
    }

    /* Оптимизированы медиа-запросы (добавьте при необходимости) */
    @media (max-width: 768px) {
      h1 { font-size: 2em; }
      .badges { flex-direction: column; }
    }

    /* Исправлен z-index для псевдоэлемента avatar */
    .avatar {
      position: relative;
      z-index: 1;
    }

    /* Добавлен fallback для фильтров */
    .avatar::after {
      background: linear-gradient(45deg, transparent 50%, rgba(69,255,184,0.2));
      @supports not (mix-blend-mode: overlay) {
        background: rgba(69,255,184,0.2);
      }
    }
  </style>
</head>
<body>
  <!-- Заменены изображения-разделители на CSS-элементы -->
  <div class="divider">
    <div class="line"></div>
  </div>

  <!-- Обновленная секция заголовка -->
  <h1>
    <span class="typing-effect">🔥 Fedorov.sFF 💻</span><br>
    <span class="typing-effect">📚 Smart Developer 🛠️</span><br>
    <span class="typing-effect">✨ Linux & macOS enthusiast ✨</span>
  </h1>

  <!-- Остальная часть содержимого без изменений -->
  ...
  
</body>
</html>
