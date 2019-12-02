import React, { Component } from 'react';
import MoviesList from './movieslist';
import {FormattedMessage} from 'react-intl';
import MovieDetail from './moviedetail';
import Grafica from './grafica';

class Movies extends Component {
    constructor(props){
        super(props)
        this.handler = this.handler.bind(this);
    }
    
    handler(data){
        this.props.detail = data;
    }

    state={
        movies : [],
        movieDisplay : {
            name : "",
            description : "",
            cast : "",
            poster : "",
        },
    }

    render() {
        return (
            <div>
            <div className="row">
                <div className="col-8">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col"> <FormattedMessage id="Name"/></th>
                                <th scope="col"> <FormattedMessage id="Directed"/></th>
                                <th scope="col"> <FormattedMessage id="Country"/></th>
                                <th scope="col"> <FormattedMessage id="Budget"/></th>
                                <th scope="col"> <FormattedMessage id="Release"/></th>
                                <th scope="col"> <FormattedMessage id="Views"/></th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.movies.map((e,i)=> <MoviesList key={i} movie={e} handler={this.handler}/>)}
                        </tbody>
                    </table>
                </div>
                <div className="col-4">
                    <MovieDetail detail={this.state.movieDisplay}/>
                </div>
            </div>
            <div className="row">
                <Grafica data= {this.state.movies}/>
            </div>
            </div>
        );
    }
    

    componentDidMount(){
        if(!navigator.onLine){
            if(localStorage.getItem('movies') === null){
                this.setState({movies : "...Cargando"})
            }
            else{
                this.setState({ movies: JSON.parse(localStorage.getItem('movies'))});
            }
        }
        
        if(navigator.language.split("-")[0] === "es"){
            fetch("https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json")
                .then(res => {
                    return res.json();
                }).then(res => {
                    this.setState({movies : res});
                    localStorage.setItem('movies', JSON.stringify(res));
                });
        } else{
            fetch("https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json")
            .then(res => {
                return res.json();
            }).then(res => {
                this.setState({movies : res});
                localStorage.setItem('movies', JSON.stringify(res));
            });
        }
    }
}



export default Movies;