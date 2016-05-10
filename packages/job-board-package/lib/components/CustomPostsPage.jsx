import React from 'react';
import { Accounts } from 'meteor/std:accounts-ui';

import Core from "meteor/nova:core";
const ModalTrigger = Core.ModalTrigger;

const CustomPostsPage = ({document, currentUser}) => {
  
  ({PostsCategories, UserName, SocialShare, PostsStats, HeadTags, AccountsForm} = Telescope.components);

  const post = document;
  const htmlBody = {__html: post.htmlBody};

  return (
    <div className="post-page">

      <HeadTags url={Posts.getLink(post)} title={post.title} image={post.thumbnailUrl} />
      
      {/* <PostsItem post={post}/> */}
      <div className="post-page-header">
        <div className="post-page-title"><h2>{post.title}</h2></div>
        <div className="post-page-date-posted"><i className="fa fa-clock-o"></i> {moment(post.postedAt).fromNow()}</div>
      </div>
      <div className="post-page-body">
        <div className="post-page-info">
          <div className="post-page-info-item">
            <a className="company-name" href={Users.getProfileUrl(post.user)}><i className="fa fa-building"></i> {Users.getDisplayName(post.user)}</a>
            {post.user.telescope.bio?<p>{post.user.telescope.bio}</p> : null}
          </div>
          {(post.jobLocation) ?
          <div className="post-page-info-item">
            <b><i className="fa fa-map-marker"></i> {post.jobLocation}</b>
          </div> : null}
          {(post.url) ?
          <div className="post-page-info-item post-page-info-contact">
            <i className="fa fa-envelope-o"></i> <a href={'mailto:'+post.url} target="_blank">{post.url}</a>
          </div> : null}
          <div className="post-page-info-item">
          <PostsCategories post={post}/>
          </div>
        </div>
        <div className="post-body" dangerouslySetInnerHTML={htmlBody}></div>
      </div>

      {/*<SocialShare url={ Posts.getLink(post) } title={ post.title }/>*/}

    </div>
  )
};

module.exports = CustomPostsPage;