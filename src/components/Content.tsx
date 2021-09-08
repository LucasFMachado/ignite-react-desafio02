import { MovieCard } from './MovieCard';
import { ContentTitle } from './ContentTitle'

interface ContentProps {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content(props: ContentProps) {
  const {
    movies,
    selectedGenre
  } = props


  return (
    <div className="container">
      <ContentTitle
        title={ selectedGenre.title }
      />

      <main>
        <div className="movies-list">
          {
            movies.map(movie => (
              <MovieCard
                key ={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                runtime={movie.Runtime}
                rating={movie.Ratings[0].Value}
              />
            ))
          }
        </div>
      </main>
    </div>
  )
}