import React from 'react'
import App from './App';
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './component/Home/Home';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Frist from './component/Frist/Frist';
import Friends from './component/Friends/Friends';
import FriendId from './component/FriendId/FriendId';
import Posts from './component/Posts/Posts';
import PostDitails from './component/PostDitails/PostDitails';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App></App>
//   }
// ]);

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<Frist></Frist>
      },
      {
        path:'friends',
        element:<Friends></Friends>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'friend/:details', //:details is a perametar
        element: <FriendId></FriendId>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.details}`)
      },
      {
        path:'posts',
        element:<Posts></Posts>,
        loader :()=>fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:'post/:postId',
        element:<PostDitails></PostDitails>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
