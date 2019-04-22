import React, { Component } from 'react';
//import axios from 'axios';
import '../index.css';
import { Link } from 'react-router-dom';
import download from '../download.jpg'
import { connect } from 'react-redux';


//const Home = () => {
class Home extends Component {

    /* state = {
        posts: []
    } */

    /* componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            //console.log(res)
            this.setState({
                posts: res.data.slice(0,15)
            })
        })
    } */

    render() {
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className = 'card post cyan' key = { post.id }>
                        <img src = { download } alt = 'A Car' />
                        <div className = 'card-content'>
                            <Link to = { '/' + post.id }>
                                <h5 className = 'card-title red-text center'>{post.title}</h5>
                            </Link>
                            <p>{ post.body }</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className = 'center'>No Data is available Or wait for Data to load...</div>
        )
        return(
            <div className = 'container home'>
                <h1 className = 'center'>Home</h1>
                { postList }
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);