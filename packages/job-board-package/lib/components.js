/*
This file centralizes all our custom component overrides. 
*/

import CustomPostsItem from "./components/CustomPostsItem.jsx";
import CustomPostsListHeader from "./components/CustomPostsListHeader.jsx";
import CustomFooter from "./components/CustomFooter.jsx";
import CustomPostsPage from "./components/CustomPostsPage.jsx";


Telescope.components.PostsItem = CustomPostsItem;
Telescope.components.PostsListHeader = CustomPostsListHeader;
Telescope.components.Footer = CustomFooter;
Telescope.components.PostsPage = CustomPostsPage;

