// script.js

const svg = d3.select("#visualization")
    .append("svg")
    .attr("width", 1200)
    .attr("height", 900);

async function getGitHubData(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const reposData = await response.json();

    const repoData = reposData[0]; // Берем первый репозиторий (если несколько)

    // Получаем список файлов в репозитории
    const filesResponse = await fetch(repoData.archives_url.replace('{type}', 'zipball').replace('{sha}', repoData.sha));
    const filesBuffer = await filesResponse.arrayBuffer();
    const filesZip = await jszip.loadAsync(filesBuffer);
    const filesData = Object.keys(filesZip.files);

    return { 
        ...repoData,
        files: filesData
    };
}

function visualize(data) {
    const nodes = [];
    const links = [];

    // Создаем узлы на основе graph.json
    nodes.push(...data.nodes.map(node => ({
        name: node.name,
        x: node.x,
        y: node.y,
        size: node.size || 20,
        color: node.color || "#000",
        title: node.title || node.name
    })));

    // Добавляем дополнительные узлы для файлов
    data.files.forEach((file, index) => {
        nodes.push({
            name: file,
            parent: 1,
            x: Math.random() * 800 + 300,
            y: Math.random() * 600 + 150,
            size: 15,
            color: "#888",
            title: file
        });
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

    try {
        const data = await getGitHubData(username);
        visualize(data);
    } catch (error) {
        console.error('Ошибка:', error);
        alert('Не удалось получить данные с GitHub. Проверьте подключение к интернету и попробуйте снова.');
    }
}

main();
