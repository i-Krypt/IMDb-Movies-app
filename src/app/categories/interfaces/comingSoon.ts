export interface IComingSoon {
    id: number,
    title: string,
    fullTitle: string,
    year: number,
    releaseState: string,
    image: string,
    runtimeMins: number,
    runtimeStr: string,
    plot: string,
    contentRating: string,
    imDbRating: number,
    imDbRatingCount: number,
    metacriticRating: number,
    genres: string
    genreList: [
        {
            key: string,
            value: string
        }
        
    ],
    directors: string,
    directorList: [
        {
            id: number,
            name: string
        }
    ],
    stars: string,
    starList: [
        {
            id: number,
            name: string
        },
       
  
    ]
}