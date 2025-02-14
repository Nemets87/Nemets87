// script.js

const svg = d3.select("#visualization")
    .append("svg")
    .attr("width", 800)
    .attr("height", 600);

d3.json("graph.json").then(data => {
    const links = data.links;
    const nodes = data.nodes;

    const link = svg.selectAll(".link")
        .data(links)
        .enter().append("line")
        .attr("x1", d => nodes[d.source].x)
        .attr("y1", d => nodes[d.source].y)
        .attr("x2", d => nodes[d.target].x)
        .attr("y2", d => nodes[d.target].y);

    const node = svg.selectAll(".node")
        .data(nodes)
        .enter()
        .append("g");

    node.append("circle")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", 20);

    node.append("text")
        .attr("dx", 12)
        .attr("dy", ".35em")
        .text(d => d.name);

    // Добавляем названия файлов к узлам
    const fileNames = {
        "README.md": "README",
        "cappy.img": "Карбочка",
        "index.html": "index.html",
        "script.js": "script.js",
        "style.css": "style.css"
    };

    node.append("title")
        .text(d => fileNames[d.name] || d.name);

    // Добавляем эффект при наведении на узлы
    node.on("mouseover", function() {
        d3.select(this).select("circle").attr("fill", "#ffcc00");
        d3.select(this).select("text").attr("font-weight", "bold");
    })
    .on("mouseout", function() {
        d3.select(this).select("circle").attr("fill", "#000");
        d3.select(this).select("text").attr("font-weight", "normal");
    });
});
