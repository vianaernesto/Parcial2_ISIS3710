import React, { Component } from 'react';
import * as d3 from 'd3';
class Grafica extends Component {

    state={
        data :this.props.data
    }
    render() {
        return (
            <div>
            <div ref="canvas">
            </div> 
            </div>
        );
    }

    componentDidMount(){
        const data = this.state.data
        this.drawChart(data);
    }

    drawChart(data){
        console.log(data);
        const svg = d3.select(this.refs.canvas)
        const width = 700;
        const height = 500;
        const margin = { top:10, left:50, bottom: 40, right: 10};
        const iwidth = width - margin.left - margin.right;
        const iheight = height - margin.top -margin.bottom;

        svg.attr("width", width);
        svg.attr("height", height);

        let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

        const y = d3.scaleLinear() 
            .domain([0, 50])

            .range([iheight, 0]);

            const x = d3.scaleBand()
            .domain(data.map(d => d.id) ) 
            .range([0, iwidth])
            .padding(0.1); 

            const bars = g.selectAll("rect").data(data);

            const grafica = bars.enter().append("rect")
            .attr("class", "bar")
            .style("fill", "blue")
            .attr("x", d => x(d.id))
            .attr("y", d => y(d.views))
            .attr("height", d => iheight - y(d.views))
            .attr("width", x.bandwidth())  

            g.append("g")
            .classed("x--axis", true)
            .call(d3.axisBottom(x))
            .attr("transform", `translate(0, ${iheight})`);  

            g.append("g")
            .classed("y--axis", true)
            .call(d3.axisLeft(y));
    }
}

export default Grafica;