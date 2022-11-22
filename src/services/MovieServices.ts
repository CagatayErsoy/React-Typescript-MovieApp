

export class MovieServices{
   private static apiUrl:string="https://code-challenge.spectrumtoolbox.com/api/movies"
    private static apiKey:string="Api-Key q3MNxtfep8Gt"
 
  
    public static async getMovies() {
        const response = await fetch(this.apiUrl, {
            headers: {'Authorization': this.apiKey},

          })
        return await response.json();
    }
    public static async searchMovieById(id:string) {
        const response = await fetch([this.apiUrl,`/${id}`].join('') ,{
            headers: {'Authorization': this.apiKey},

          })
        return await response.json();
    }

}