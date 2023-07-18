



async function logMovies() {
    const Search = document.querySelector('#SearchHeader').value
    const FetchUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=7821407d&s=${Search}`
    const response = await fetch(FetchUrl);
    const movies = await response.json();
    const result = movies.Search;
    console.log(result)
    const resultv2 = result[0]
    const resultv3 = result[1]
    const resultv4 = result[2]
    const resultv5 = result[3]

    //1
    const title = resultv2.Title
    const year = resultv2.Year
    const poster = resultv2.Poster
    //2
    const title2 = resultv3.Title
    const year2 = resultv3.Year
    const poster2 = resultv3.Poster
    //3
    const title3 = resultv4.Title
    const year3 = resultv4.Year
    const poster3 = resultv4.Poster
    //4
    const title4 = resultv5.Title
    const year4 = resultv5.Year
    const poster4 = resultv5.Poster
    //
    console.log(title, year, poster);
    //1
    document.querySelector('#title').textContent = title
    document.querySelector('#poster').src = poster
    document.querySelector('#year').textContent = 'Year: ' + year
    //2
    document.querySelector('#title2').textContent = title2
    document.querySelector('#poster2').src = poster2
    document.querySelector('#year2').textContent = 'Year: ' + year2
    //3
    document.querySelector('#title3').textContent = title3
    document.querySelector('#poster3').src = poster2
    document.querySelector('#year3').textContent = 'Year: ' + year3
    //4
    document.querySelector('#title4').textContent = title4
    document.querySelector('#poster4').src = poster4
    document.querySelector('#year4').textContent = 'Year: ' + year4
}