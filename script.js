const nasaUrl = "https://api.nasa.gov/planetary/apod?api_key=RHDOR12Ld0hbSy7xgiPibhi1vvknu90NR30jQqYd&count=10"

async function imgList() {
    try{
        let fetchImg =  await fetch(nasaUrl);
        let dataImg = await fetchImg.json();

        console.log(dataImg)
        const card = document.querySelector("[data-ul]")

        dataImg.forEach(element => {
             const content = `
             <li class="card">
                 <img class="card__image" src="${element.url}" alt="imagen">
                 <h3 class="card__title">${element.title}</h3>
             </li>
             `
             card.innerHTML = card.innerHTML + content         
        })
    }
    catch(error){
        console.log(error)
    }
}

imgList();

// function imgList() {
//     fetch(nasaUrl)
//         .then( response => response.json())
//         .then( imgData => {
//             console.log(imgData)

//             const card = document.querySelector("[data-ul]")

//             imgData.forEach(element => {
//                 const content = `
//                 <li class="card">
//                     <img class="card__image" src="${element.url}" alt="imagen">
//                     <h3 class="card__title">${element.title}</h3>
//                 </li>
//                 `
//                 card.innerHTML = card.innerHTML + content         
//             })
//         })
//         .catch( error => console.log(error))
// }

// imgList()