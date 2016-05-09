import React from 'react';

import SmartContainers from "meteor/utilities:react-list-container";
const ListContainer = SmartContainers.ListContainer;

const CustomPostsListHeader = () => {

  ({PostsViews, SearchForm, CategoriesList} = Telescope.components)

  return (
    <div>
      <div className="posts-list-header">
        <div className="posts-list-categories">
          <ListContainer collection={Categories} limit={0} resultsPropName="categories" component={CategoriesList}/>
        </div>
        <PostsViews />
        <SearchForm/>
      </div>
    </div>
  )
}

export default CustomPostsListHeader;