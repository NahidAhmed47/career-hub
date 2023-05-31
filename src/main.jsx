import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main';
import Home from './components/Home';
import Statistics from './components/Statistics';
import AppliedJobs from './components/AppliedJobs';
import Blog from './components/Blog';
import ErrorPage from './components/ErrorPage';
import loadJobsData from './utilities/loadJobsData';
import View_details from './components/View_details';
import getAppliedJobsToDb from './utilities/getAppliedJobsToDb';
import FeaturesAllJobs from './components/FeaturesAllJobs';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    loader:loadJobsData,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'appliedJobs',
        element:<AppliedJobs></AppliedJobs>,
        loader: getAppliedJobsToDb
      },
      {
        path:'blogs',
        element:<Blog></Blog>
      },
      {
        path:'job/:jobId',
        element:<View_details></View_details>
      },
      {
        path:'apply',
        element:<FeaturesAllJobs></FeaturesAllJobs>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
