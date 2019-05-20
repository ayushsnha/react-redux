import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchPosts} from '../redux/actions/postActions'



class Content extends React.Component{
    componentWillMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost)
        }
    }


    render(){
                const postItems=this.props.posts.map(post=>{
           
                    return(
                    <li key={post.id}>
                    <strong>{post.title}</strong> 
                    <span>{post.body}</span>
                    </li>
                    )
                })
            
               
            
        return(
            
            <div className="container">
                <div>
                    <h1>Hello, Welcome to the test React App</h1>
                        {this.props.posts.length > 0 ? 
                    <ol>{postItems}</ol> :
                    "Can't load.. :|"}
                    
                </div>
            </div>
        )
    }
}

Content.propTypes={
    fetchPosts:PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired,
    newPost:PropTypes.object
}

const mapStateToProps= state=>({
    posts: state.posts.items,
    newPost:state.posts.item
});
export default  connect(mapStateToProps,{fetchPosts})(Content) 