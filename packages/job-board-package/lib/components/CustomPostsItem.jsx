import React, { PropTypes, Component } from 'react';

class CustomPostsItem extends Telescope.components.PostsItem {

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
            <a className="posts-item-title-link" href={Posts.getLink(post)} target={Posts.getLinkTarget(post)}>{post.title}</a>
            {this.renderCategories()}
          </h3>
          
          <div className="posts-item-meta">
            {post.user? <div className="posts-item-user"><UsersAvatar user={post.user} size="small"/><UsersName user={post.user}/></div> : null}
            {(this.context.currentUser && this.context.currentUser.isAdmin) ?<PostsStats post={post} />:null}
          </div>

        </div>

        <div className="posts-item-date">{moment(post.postedAt).fromNow()}</div>

        {this.renderCommenters()}
      
      </div>
    )
  }
};

export default CustomPostsItem;