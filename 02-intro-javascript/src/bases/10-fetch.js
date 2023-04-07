//Fetch API
// api endpoint
//https://api.giphy.com/v1/gifs/random?api_key=VJd2X67RBKxFY6hGGyAkDk0r8GdlhZga
const apiKey = 'VJd2X67RBKxFY6hGGyAkDk0r8GdlhZga';

const HttpCode = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
//las promesas pueden encadenarse.
    
     //Retorna una promesa que resuelve lo que viene en el api
    
HttpCode
    .then(resp=>resp.json())
    .then(({data})=>{
        const {url} = data.images.original;
        console.log(url);

        const img = document.createElement('img');
        img.src =url;
        document.body.append(img);
    })
    .catch(console.warn);data.images.original.url