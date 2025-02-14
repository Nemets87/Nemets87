// script.js

const svg = d3.select("#visualization")
    .append("svg")
    .attr("width", 1200)
    .attr("height", 900);

async function getGitHubContent(username, repoName) {
    const response = await fetch(`https://api.github.com/repos/${username}/${repoName}/contents/README.md?ref=main`);
    const data = await response.json();
    
    return data;
}

function visualize(data) {
    const nodes = [];
    const links = [];

    // Создаем узлы для профиля пользователя и README.md
    nodes.push({ name: "Profile", x: 100, y: 50, size: 40, color: "#999", title: "Профиль пользователя" });
    nodes.push({ name: "README.md", x: 300, y: 50, size: 30, color: "#000", title: "README.md" });

    // Добавляем содержимое README.md как дочерние узлы
    data[0].content.split('\n').forEach((line, index) => {
        if (line.trim() !== '') { // Пропускаем пустые строки
            nodes.push({
                name: line,
                parent: 1,
                x: Math.random() * 800 + 300,
                y: Math.random() * 600 + 150,
                size: 15,
                color: "#888",
                title: line
            });
        }
    });

    // Создаем связи между узлами
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
}

async function main() {
    const username = 'Nemets87';
    const repoName = 'README.md';

    try {
        const data = await getGitHubContent(username, repoName);
        visualize(data);
    } catch (error) {
        console.error('Ошибка:', error);
        alert('Не удалось получить данные с GitHub. Проверьте подключение к интернету и попробуйте снова.');
    }
}

main();
