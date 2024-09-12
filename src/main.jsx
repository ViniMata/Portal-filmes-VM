import { StrictMode } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MovieListPage from './pages/MovieListPage.jsx'
import Home from './pages/Home.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'
import MoviesByGenrePage from './pages/MoviesByGenrePage.jsx'
import GenreListPage from './pages/GenreListPage.jsx'
const router = createBrowserRouter([{

  path: '/',
  element: <App/>,
  children: [
    {index:true, element: <Home/>},
    {path:'filme', element:<MovieListPage/>},
    {path:'filme/filme', element:<MovieDetailPage/>},
    {path:'generos', element:<GenreListPage/>},
    {path:'generos/filmes', element:<MoviesByGenrePage/>},
    // {path:'*', element: <PageNotFound/>}
  ]
  }
  
])
{/* Deve ter as rotas:
  home
  filmes
  Detalhes do Filme
  Lista de gêneros
  Filmes por gênero
  Page Not Found
  */}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
