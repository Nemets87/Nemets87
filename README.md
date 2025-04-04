<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Portfolio Nemets87</title>
  <style>
    body {
      background-color: #0d1117;
      color: #45ffb8;
      font-family: 'Space Mono', monospace;
      margin: 0;
      padding: 0;
      text-align: center;
    }
    .container {
      max-width: 100%;
      padding: 0 15px;
      margin: auto;
    }
    /* Анимированный заголовок */
    .header-img {
      width: 100%;
      margin: 20px 0;
    }
    /* Аватар */
    .avatar {
      position: relative;
      width: 320px;
      height: 320px;
      margin: 25px auto;
      border-radius: 50%;
      border: 4px solid #45ffb8;
      box-shadow: 0 0 40px #22f7f7;
      object-fit: cover;
    }
    /* Бейджи и контакты */
    .flex-group {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
      margin: 30px 0;
    }
    /* Статистика */
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      width: 100%;
      margin: 30px 0;
    }
    /* Прогресс-бары */
    .progress {
      max-width: 600px;
      margin: 30px auto;
      padding: 20px;
      background: rgba(13, 17, 23, 0.87);
      border-radius: 15px;
      backdrop-filter: blur(5px);
      text-align: left;
    }
    .progress pre {
      margin: 0;
      border: none;
      background: transparent;
      color: #45ffb8;
      font-size: 16px;
    }
    /* Капибара */
    .capybara {
      max-width: 600px;
      margin: 40px auto;
      text-align: center;
    }
    .capybara img {
      width: 100%;
      border-radius: 15px;
      border: 3px solid #22f7f7;
      box-shadow: 0 0 30px rgba(34, 247, 247, 0.3);
    }
    .capybara h2 {
      color: #45ffb8;
      margin: 20px 0;
    }
    /* Адаптивность */
    @media (max-width: 480px) {
      .avatar {
        width: 240px;
        height: 240px;
      }
      .progress {
        padding: 15px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Анимированный заголовок -->
    <div>
      <img class="header-img" src="https://readme-typing-svg.demolab.com?font=Space+Mono&size=26&duration=4000&pause=1000&color=45FFB8&width=100%25&lines=%F0%9F%94%A5+Greetings%2C+Code+Jedi!;%F0%9F%92%BB+Python+Architect;%F0%9F%93%82+Linux+Artisan;%E2%9C%A8+May+The+Code+Be+With+You" alt="Анимированный заголовок">
    </div>

    <!-- Аватар в HD -->
    <div>
      <img class="avatar" src="https://raw.githubusercontent.com/Nemets87/Nemets87/main/photo_2025-02-12_08-53-12.jpg" alt="Аватар в HD">
    </div>

    <!-- Бейджи -->
    <div class="flex-group">
      <a href="https://www.bonustime.ru/" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/🌐_WEBSITE-FFD700?style=for-the-badge&logo=google-chrome&logoColor=000" alt="Website">
      </a>
      <a href="https://python.org" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/Python-Master-3776AB?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python">
      </a>
      <a href="https://t.me/FedorovSFF" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/📡_Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram">
      </a>
    </div>

    <!-- Статистика -->
    <div class="stats">
      <img src="https://github-readme-stats.vercel.app/api?username=Nemets87&show_icons=true&theme=dark&bg_color=0d1117&title_color=45ffb8&icon_color=22f7f7&include_all_commits=true" alt="Статистика">
      <img src="https://streak-stats.demolab.com/?user=Nemets87&theme=dark&background=0d1117&ring=45ffb8&fire=22f7f7" alt="Стрик">
    </div>

    <!-- Прогресс-бары -->
    <div class="progress">
      <pre>
<code>
+ AI/ML          ▰▰▰▰▰▰▰▰▱ 85% 
+ DevOps         ▰▰▰▰▰▰▱▱▱ 65%
+ Web3           ▰▰▰▱▱▱▱▱▱ 30%
! Code Balance   ▰▰▰▰▰▰▰▰▰▰ 100%
</code>
      </pre>
    </div>

    <!-- Капибара HD -->
    <div class="capybara">
      <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2Fpb2FvN3h4b3F0NWR0cm1yY3lqY3g4Z2V3eG4wY3RjajJyd3Z5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7abKhOpu0NwenH3O/giphy.gif" alt="Капибара HD">
      <h2>🦫 Capybara Force</h2>
    </div>

    <!-- Контакты -->
    <div class="flex-group">
      <a href="mailto:bonustime161@yandex.ru" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/📧_Email-FF0000?style=for-the-badge&logo=gmail&logoColor=white" alt="Email">
      </a>
      <a href="https://t.me/FedorovSFF" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/📡_Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram">
      </a>
      <a href="https://www.bonustime.ru/" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/🌐_Website-FFD700?style=for-the-badge&logo=google-chrome&logoColor=000" alt="Website">
      </a>
    </div>
  </div>
</body>
</html>
