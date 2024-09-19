import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";
import filmes from "../data/movies.json"
export default function Home(){
    return(
        <>
            <CardContainer titulo="Filmes antigos">
                {
                    filmes.map(filme =>(
                        <MovieCard key={filme.id} {...filme}/>
                    ))
                }
            </CardContainer>
        </>
    )
}