<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3_4 == Мы_в_Эфире</title>
    <style>
        :root {
            --color-background: #000000;
            --color-text: #ffffff;
            --color-accent: #ff6600;
            --color-border: #ffcc00;
        }

        body {
            background-color: var(--color-background);
            font-family: 'Press Start 2P', cursive;
            color: var(--color-text);
            line-height: 1.6;
            margin: 0;
            padding: 20px;
        }

        h1, h2 {
            text-align: center;
            animation: pixelate 2s infinite;
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
        }

        a {
            color: var(--color-accent);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        a:hover {
            color: #ffcc00;
        }

        img {
            display: block;
            margin: 0 auto 20px;
            border: 4px solid var(--color-border);
            border-radius: 10px;
            filter: brightness(70%) contrast(150%);
        }

        @keyframes pixelate {
            0% { transform: scale(1); }
            25% { transform: scale(1.05); }
            50% { transform: scale(1); }
            75% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }

        @media (min-width: 768px) {
            body {
                font-size: 24px;
            }

            h1 {
                font-size: 64px;
            }

            h2 {
                font-size: 40px;
            }

            p {
                font-size: 22px;
            }
        }
    </style>
</head>
<body>
    <h1><p>Привет, я Сергей Федоров</p></h1>

    <h2><p>Я заинтересован в новых знаниях</p></h2>
    <p>Я в данный момент изучаю Python</p>
    <p>Сочетаюсь с Super_team_45</p>
    <p><a href="https://www.bonustime.ru/">Как мне можно дозвониться</p></h2>

    <img 
        src="https://pictures.s3.yandex.net/frontend-developer/free-course/mountains.jpg" 
        alt="Черно-белая фотография гор в тумане"
        width="210"
    />

    <p><a href="https://music.yandex.ru/iframe/#playlist/ynx-praktikum/1002">Плейлист</a> для бесплатного занятия кодингом.</p>
    <p>Один раз послушал — семь раз прокодил.</p>
</body>
</html>
