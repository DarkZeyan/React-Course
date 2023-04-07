//Async-Await

// const getImagePromise = () => 
// new Promise(resolve => resolve('https://zeyanvr.com'));


// getImagePromise().then(console.log);
//Si se coloca la palabra reservada async genera una funcion con una promesa.
const getImage = async () => {
    //Para los errores que se peuden generar en caso de que fallen
    // las respuestas del await deben usarse los bloques try-catch

    try {
        const apiKey = 'VJd2X67RBKxFY6hGGyAkDk0r8GdlhZga';

        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const { data } = await resp.json();
        const { url } = data.images.original;
        console.log(url)
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        //Manejo del error.
    }


    //El await nos ayuda a trabajar el codigo como si fuera sincrono a pesar
    // de ser asincrono.
}

getImage()





// HttpCode
//     .then(resp=>resp.json())
//     .then(({data})=>{
//         const {url} = data.images.original;
//         console.log(url);

//         const img = document.createElement('img');
//         img.src =url;
//         document.body.append(img);
//     })
//     .catch(console.warn);data.images.original.url