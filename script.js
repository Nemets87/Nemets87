// script.js

const svg = d3.select("#visualization")
    .append("svg")
    .attr("width", 1200)
    .attr("height", 900);

d3.json("graph.json").then(data => {
    const nodes = data.nodes;
    const links = data.links;

    const node = svg.selectAll(".node")
        .data(nodes)
        .enter()
        .append("g");

    node.append("circle")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", d => d.size || 20)
        .attr("fill", d => d.color || "#000");

    node.append("text")
        .attr("dx", d => d.x + 10)
        .attr("dy", d => d.y + 5)
        .text(d => d.name);

    node.append("title")
        .text(d => d.title || d.name);

    node.on("mouseover", function() {
        d3.select(this).select("circle").attr("fill", "#ffcc00");
        d3.select(this).select("text").attr("font-weight", "bold");
    })
    .on("mouseout", function() {
        d3.select(this).select("circle").attr("fill", d => d.color || "#000");
        d3.select(this).select("text").attr("font-weight", "normal");
    });

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
        .attr("stroke", d => d.stroke || "#000")
        .attr("stroke-width", d => d.width || 2);

    // Добавляем эффект при наведении на пути
    link.on("mouseover", function() {
        d3.select(this).attr("stroke", "#ffcc00");
    })
    .on("mouseout", function() {
        d3.select(this).attr("stroke", d => d.stroke || "#000");
    });
});
