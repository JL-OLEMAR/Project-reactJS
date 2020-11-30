import React, { Component } from 'react';
// import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/es';
import ImageDefault from '../assets/images/default.png';
import Global from '../Global';
import Sidebar from './Sidebar';


class Article extends Component {

    url = Global.url;

    state = {
        article: false,
        status: null
    };

    componentWillMount() {
        this.getArticle();
    }

    getArticle = () => {
        var id = this.props.match.params.id;

        axios.get(this.url + 'article/' + id)
            .then(res => {

                this.setState({
                    article: res.data.article,
                    status: 'success'
                });

            }).catch(err => {
                this.setState({
                    article: false,
                    status: 'success'
                });
            });

    }

    render() {
        var article = this.state.article;

        return (
            <div className="center">
                <section id="content">

                    {this.state.article &&
                        <article className="article-item article-detail">
                            <div className="image-wrap">
                                {article.image != null
                                    ? (<img src={this.url + 'get-image/' + article.image} alt={article.title} />)
                                    : (<img src={ImageDefault} alt={article.title} />)
                                }
                            </div>

                            <h1 className="subheader">{article.title}</h1>
                            <span className="date">
                                <Moment locale='es' fromNow>{article.date}</Moment>
                            </span>
                            <p>
                                {article.content}
                            </p>

                            <a href="/" className="btn btn-danger">Editar</a>
                            <a href="/" className="btn btn-warning">Eliminar</a>

                            <div className="clearfix"></div>
                        </article>
                    }
                    {!this.state.article && this.state.status === 'success' &&
                        <div id="article">
                            <h2 className="subheader">El artículo no existe</h2>
                            <p>Intentalo de nuevo más tarde.</p>
                        </div>
                    }

                    {this.state.status == null &&
                        <div id="article">
                            <h2 className="subheader">Cargando...</h2>
                            <p>Espere unos segundos.</p>
                        </div>
                    }

                </section>

                <Sidebar />

                <div className="clearfix"></div>

            </div>
        );
    }
}

export default Article;
