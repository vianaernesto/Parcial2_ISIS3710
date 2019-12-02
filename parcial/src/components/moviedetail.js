import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';
class MovieDetail extends Component {


    state = {
        name: this.props.detail.name,
        description : this.props.detail.description,
        poster : this.props.detail.poster,
        cast : this.props.detail.cast
    }

    render() {
        return (
            <div className="card .d-none" style={{width: "18rem"}}>
                <img src={this.state.poster} className="card-img-top" alt="Movie Poster"/>
                <div className="card-body">
                    <h5 className="card-title">{this.state.name}</h5>
                    <p className="card-text">{this.state.description}</p>
                    <strong><p><FormattedMessage id="Cast"/>: {this.state.cast}</p></strong>
                </div>
            </div>
        );
    }
}

export default MovieDetail;