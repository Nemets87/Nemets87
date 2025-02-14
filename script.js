Понял вас. Давайте модифицируем код, чтобы он работал с конкретным репозиторием Nemets87/README.md и отображал все файлы в нем. Для этого нам нужно будет использовать специальный эндпоинт GitHub API, который предоставляет информацию о содержимом репозитория.

Вот обновленный `script.js`:

```javascript
// script.js

const svg = d3.select("#visualization")
    .append("svg")
    .attr("width", 1200)
    .attr("height", 900);

async function getGitHubContent(username, repoName, path) {
    const response = await fetch(`https://api.github.com/repos/${username}/${repoName}/contents/${path}?ref=main`);
    const data = await response.json();
    
    return data;
}

async function visualize() {
    const username = 'Nemets87';
    const repoName = 'README.md';
    const path = '';

    try {
        const content = await getGitHubContent(username, repoName, path);
        
        // Создаем узлы
        const nodes = [
            { name: "Profile", x: 100, y: 50, size: 40, color: "#999", title: "Профиль пользователя" },
            { name: repoName, x: 300, y: 50, size: 30, color: "#000", title: repoName }
        ];

        // Добавляем файлы в качестве дочерних узлов для репозитория
        content.forEach(file => {
            nodes.push({
                name: file.name,
                parent: 1,
                x: Math.random() * 800 + 300,
                y: Math.random() * 600 + 150,
                size: 15,
                color: "#888",
                title: file.path
            });
        });

        // Создаем связи между узлами
        const links = [];
        nodes.forEach(node => {
            if (node.parent === 1) {
                links.push({ source: 0, target: node.id });
            } else {
                links.push({ source: node.parent, target: node.id });
            }
        });

        // Очищаем предыдущие элементы
        svg.selectAll("*").remove();

        // Рисуем узлы
        const node = svg.selectAll(".node")
            .data(nodes)
            .enter()
            .append("g");

        node.append("circle")
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .attr("r", d => d.size)
            .attr("fill", d => d.color);

        node.append("text")
            .attr("dx", d => d.x + 10)
            .attr("dy", d => d.y + 5)
            .text(d => d.name);

        node.append("title")
            .text(d => d.title);

        node.on("mouseover", function() {
            d3.select(this).select("circle").attr("fill", "#ffcc00");
            d3.select(this).select("text").attr("font-weight", "bold");
        })
        .on("mouseout", function() {
            d3.select(this).select("circle").attr("fill", d => d.color || "#000");
            d3.select(this).select("text").attr("font-weight", "normal");
        });

        // Рисуем связи
        const link = svg.selectAll(".link")
            .data(links)
            .enter().append("path")
            .attr("d", d => {
                const sourceX = nodes[d.source].x;
                const sourceY = nodes[d.source].y;
                const targetX = nodes[d.target].x;
                const targetY = nodes[d.target].y;
                
                return `M ${sourceX} ${sourceY} L ${targetX} ${targetY}`;
            })
            .attr("stroke", "#000")
            .attr("stroke-width", 2);

        link.on("mouseover", function() {
            d3.select(this).attr("stroke", "#ffcc00");
        })
        .on("mouseout", function() {
            d3.select(this).attr("stroke", "#000");
        });
    } catch (error) {
        console.error('Ошибка:', error);
        alert('Не удалось получить данные с GitHub. Проверьте подключение к интернету и попробуйте снова.');
    }
}

visualize();
```

Теперь давайте обновим `graph.json`:

```json
{
  "nodes": [
    {"name": "Profile", "x": 100, "y": 50, "size": 40, "color": "#999", "title": "Профиль пользователя"},
    {"name": "README.md", "x": 300, "y": 50, "size": 30, "color": "#000", "title": "README.md"}
  ],
  "links": [
    {"source": 0, "target": 1}
  ]
}
```

И оставим `index.html` без изменений:

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Repository Visualization</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        svg {
            border: 1px solid #000;
        }
    </style>
</head>
<body>
    <div id="visualization"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.4.4/d3.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
```

Этот код будет работать следующим образом:

1. Он использует специальный эндпоинт GitHub API для получения списка всех файлов в репозитории Nemets87/README.md.
2. Создает узлы для профиля пользователя и README.md.
3. Добавляет все другие файлы как дочерние узлы для README.md.
4. Создает связи между узлами.
5. Отображает визуализацию на странице.

Обратите внимание на следующие моменты:

1. Этот код предполагает, что у вас есть доступ к API GitHub. Если нет, вы можете получить ошибку.
2. Визуализация может стать сложной при большом количестве файлов. Возможно, стоит ограничить количество отображаемых файлов или группировать их по категориям для более понятного представления.
3. Код использует сторонние скрипты (D3.js и JSZip), которые нужно загружать с CDN. Убедитесь, что у вас есть стабильное соединение с интернетом для корректной работы.

Чтобы использовать эту визуализацию:

1. Сохраните все файлы (`index.html`, `script.js`, `graph.json`) в одну директорию.
2. Откройте `index.html` в браузере.

Вы увидите диаграмму, отражающую структуру вашего GitHub-профиля, включая главную страницу профиля и все файлы в репозитории README.md.
