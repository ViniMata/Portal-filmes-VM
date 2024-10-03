import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import GenreListPage from './pages/GenreListPage.jsx'
import Home from './pages/Home.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'
import MovieListPage from './pages/MovieListPage.jsx'
import MoviesByGenrePage from './pages/MoviesByGenrePage.jsx'
const router = createBrowserRouter([{

  path: '/',
  element: <App />,
  children: [
    { index: true, element: <Home /> },
    { path: '/filmes', element: <MovieListPage /> },
    { path: '/filmes/:id', element: <MovieDetailPage /> },
    { path: '/generos', element: <GenreListPage /> },
    { path: '/generos/filmes', element: <MoviesByGenrePage /> },
    // { path: '*', element: <PageNotFound /> }
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
