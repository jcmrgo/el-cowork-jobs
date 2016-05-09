import React from 'react';
import { Accounts } from 'meteor/std:accounts-ui';

const PostsPage = ({document, currentUser}) => {
  
  ({PostsItem, PostsCategories, UserName, SocialShare, Vote, PostsStats, HeadTags, AccountsForm} = Telescope.components);

  const post = document;
  const htmlBody = {__html: post.htmlBody};

  return (
    <div className="post-page">

      <HeadTags url={Posts.getLink(post)} title={post.title} image={post.thumbnailUrl} />
      
      {/* <PostsItem post={post}/> */}
      <div className="post-page-header">
        <div className="post-page-title"><h2>{post.title}</h2></div>
        <div className="post-page-date-posted">{moment(post.postedAt).fromNow()}</div>
      </div>
      <div className="post-page-body">
        <div className="post-page-info">
          <div className="post-page-info-item">
            <a className="user-name" href={Users.getProfileUrl(post.user)}>{Users.getDisplayName(post.user)}</a>
            {post.user.telescope.bio?<p>{post.user.telescope.bio}</p> : null}
          </div>
          <div className="post-page-info-item">
            <b>Monterrey, MX</b>
          </div>
          <div className="post-page-info-item">
            hola@nimbo-x.com
          </div>
        </div>
        <div className="post-body" dangerouslySetInnerHTML={htmlBody}></div>
      </div>

      {/*<SocialShare url={ Posts.getLink(post) } title={ post.title }/>*/}

    </div>
  )
};

module.exports = PostsPage;