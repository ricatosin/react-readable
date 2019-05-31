import React, { Component } from 'react';
import Post from './Post'
import Header from './Header';
import SortBar from './SortBar'
import sortBy from 'sort-by'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { Glyphicon } from 'react-bootstrap'
import {fetchComments} from '../actions'
import Comment from './Comment'

class PostDetail extends Component {

  componentDidMount() {
    this.props.fetchComments(this.props.postid);
  }
  render() {
 
}

const mapStateToProps = ({ posts, comments }, ownProps) => {
  return {
    post: posts.find(p => p.id === ownProps.match.params.id),
    comments: comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => dispatch(fetchPost(id)),
    deleteCurrentPost: (id) => dispatch(deleteCurrentPost(id)),
    getComment: (id) => dispatch(fetchAllCommentsForPost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)


