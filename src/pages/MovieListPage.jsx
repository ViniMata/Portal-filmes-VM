import { useState } from "react"
import filmes from "../data/movies.json"
import MovieCard from "../components/MovieCard"

export default function MovieListPage(){

    const [search, setSearch] = useState("")

    const handleSearch = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }

    const filmesFiltrados = filmes.filter(filme => filme.titulo.toLowerCase().includes(search.toLowerCase()))
   
    return(
        <>
        <h1>Veja o catálogo completo de filmes</h1>
        <input
        className="text-black"
         type="text"
         id="search"
         value={search}
         onChange={handleSearch} />
        {
            filmesFiltrados
            .map(filme =>(
                <MovieCard key={filme.id} {...filme}/>
            ))
        }
        </>
    )
}
