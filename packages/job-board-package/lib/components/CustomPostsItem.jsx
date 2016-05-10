import React, { PropTypes, Component } from 'react';

import Core from "meteor/nova:core";
const ModalTrigger = Core.ModalTrigger;

class CustomPostsItem extends Telescope.components.PostsItem {
  renderActions() {

    ({PostsEditForm} = Telescope.components);

    const component = (
      <ModalTrigger title="Edit Post" component={<a className="edit-link">Edit</a>}>
        <PostsEditForm post={this.props.post}/>
      </ModalTrigger>
    );

    return (
      <div className="post-actions">
        {Users.can.edit(this.props.currentUser, this.props.post) ? component : ""}
      </div>
    )
  }

  render() {

    ({UsersAvatar, UsersName, Vote, PostsStats, PostsThumbnail} = Telescope.components);

    const post = this.props.post;

    let postClass = "posts-item"; 
    if (post.sticky) postClass += " post-sticky";

    return (
      <div className={postClass}>
        
        {post.thumbnailUrl ? <PostsThumbnail post={post}/> : null}

        <div className="posts-item-content">
          
          <h3 className="posts-item-title">
            <a className="posts-item-title-link" href={Posts.getPageUrl(post, false)}>{post.title}</a>
            {this.renderCategories()}
          </h3>
          
          <div className="posts-item-meta">
            {post.user? <div className="posts-item-user"><i className="fa fa-building"></i>&nbsp;<UsersName user={post.user}/></div> : null}
            {(post.jobLocation) ? <div className="posts-item-location">- <i className="fa fa-map-marker"></i>&nbsp;{post.jobLocation}&nbsp; </div> : null}
            {(this.context.currentUser && this.context.currentUser.isAdmin) ?<PostsStats post={post} />:null}
            {this.renderActions()}
          </div>

        </div>

        <div className="posts-item-date"><i className="fa fa-clock-o"></i> {moment(post.postedAt).fromNow()}</div>
      
      </div>
    )
  }
};

export default CustomPostsItem;