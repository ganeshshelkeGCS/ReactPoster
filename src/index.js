import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Posts from './routes/Posts';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NewPost from './routes/NewPost';
import RootLayout from './routes/RootLayout';
import { loader as postsLoader} from './routes/Posts';
import { action as newPostAction } from './routes/NewPost';
import PostDetails, { loader as postDetailsLoader} from './routes/PostDetails';

const router = createBrowserRouter([
  {
    pat: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/', element: <Posts />,
        loader: postsLoader,
        children: [
        { path: '/create-post', element: <NewPost />, action: newPostAction }, 
        {path: '/:id', element: <PostDetails />, loader: postDetailsLoader},
      ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
