import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {createPost} from '../redux/actions/postActions'


 class Postform extends Component {
     constructor(props){
         super(props);
         this.state={
             title:"",
             body:""
         }
         this.onChange=this.onChange.bind(this);
         this.onSubmit=this.onSubmit.bind(this);
     }

        onChange(event){
            this.setState({[event.target.name]:event.target.value})
        }
        onSubmit(event){
            event.preventDefault()
            const post={
                title:this.state.title,
                body:this.state.body
            }

            this.props.createPost(post);

        }

  render() {
    return (
      <div className='container'>
        <h2>Post form</h2>
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label>Title</label>
                <input type="text" name="title" onChange={this.onChange} className="form-control" value={this.state.title}  placeholder="Enter the title"/>
            </div>
            <div className="form-group">
                <label>body</label>
                <textarea name="body" className="form-control"onChange={this.onChange} value={this.state.body} placeholder="Your post goes here"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}
Postform.propTypes={
    createPost:PropTypes.func.isRequired
}

export default connect(null,{createPost})(Postform);