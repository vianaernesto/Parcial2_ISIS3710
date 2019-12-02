import React, { Component } from 'react';
class MoviesList extends Component {

    constructor(props){
        super(props)
        this.handler = this.handler.bind(this);
    }

    handler(){
        let data = {name : this.state.name,
            description : this.props.movie.description,
            cast : this.props.movie.cast,
            poster: this.props.movie.poster};
        this.props.handler(data);
    }

    state ={
        id : this.props.movie.id,
        name : this.props.movie.name,
        directed : this.props.movie.directedBy,
        country : this.props.movie.country,
        budget : this.props.movie.budget,
        release : this.props.movie.releaseDate,
        views : this.props.movie.views,
    }
    render() {
        return (
                <tr onClick={this.handler}>
                    <td>{this.state.id}</td>
                    <td>{this.state.name}</td>
                    <td>{this.state.directed}</td>
                    <td>{this.state.country}</td>
                    <td>{this.state.budget}</td>
                    <td>{this.state.release}</td>
                    <td>{this.state.views}</td>
                </tr>
        );
    }
    
}

export default MoviesList;