# 3_4 == Мы_в_Эфире

![Screenshot](https://i.imgur.com/8wzrQWu.png)

## Описание

Ретро-стилизованная веб-страница о разработчике.

### Технологии

- HTML5
- CSS3
- JavaScript

### Особенности

- Использование шрифта Press Start 2P
- Анимация пикселяции текста
- Ретро-стиль с 8-bit и 16-bit элементами
- Фоновое изображение с эффектом масштабирования

### Просмотр

[Кликните здесь для просмотра](https://github.com/Nemets87/your-repo-name/blob/main/index.html)

### Контакты

- [Личная страница](https://www.bonustime.ru/)
- [Музыкальный плейлист](https://music.yandex.ru/iframe/#playlist/ynx-praktikum/1002)

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3_4 == Мы_в_Эфире</title>
    <!-- CSS -->
    <style>
        body {
            font-family: 'Press Start 2P', cursive;
            line-height: 1.6;
            color: #ffffff;
            background-image: url('https://i.imgur.com/8wzrQWu.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-origin: border-box;
            background-clip: border-box;
            height: 100vh;
            margin: 0;
            padding: 20px;
        }

        h1, h2 {
            text-align: center;
            color: #ffcc00;
            text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
        }

        h1 {
            font-size: 48px;
            margin-bottom: 20px;
        }

        h2 {
            font-size: 32px;
            margin-top: 40px;
        }

        p {
            font-size: 18px;
            margin-bottom: 15px;
            letter-spacing: 1.2px;
        }

        a {
            color: #ff6600;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        a:hover {
            color: #ffcc00;
        }

        img {
            display: block;
            margin: 0 auto 20px;
            border: 4px solid #ffcc00;
            border-radius: 10px;
            filter: brightness(70%) contrast(150%);
            max-width: 90%;
        }

        .highlight {
            background-color: rgba(255, 165, 0, 0.2);
            padding: 5px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Привет, я Сергей Федоров</h1>

        <h2>Я заинтересован в новых знаниях</h2>
        <p>Я в данный момент изучаю Python</p>
        <p>Сочетаюсь с Super_team_45</p>
        <p><a href="https://www.bonustime.ru/">Как мне можно дозвониться</a></p>

        <img 
            src="https://pictures.s3.yandex.net/frontend-developer/free-course/mountains.jpg" 
            alt="Черно-белая фотография гор в тумане"
            width="210"
        />

        <p><a href="https://music.yandex.ru/iframe/#playlist/ynx-praktikum/1002">Плейлист</a> для бесплатного занятия кодингом.</p>
        <p>Один раз послушал — семь раз прокодил.</p>
    </div>
</body>
</html>

