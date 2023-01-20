let elList = document.querySelector('.list')
let elForm= document.querySelector('.Form')
let elInp= document.querySelector('.Inp')
let elReting = document.querySelector('.reting')
let elyear = document.querySelector('.year')
let elcategory = document.querySelector('.category')

let fullData = movies.splice(1000,1000)


let str = 'Salom dunyo qalesan'

function mapper(data){
    elList.innerHTML = ''
    data.forEach((e,i)=>{
        let newLi = document.createElement('li')
        newLi.innerHTML = `<div class="move__card">
        <img src="https://i.ytimg.com/vi/${e.ytid}/hqdefault.jpg"
            alt="">
        <div class="move__card__inner">
            <span>${e.movie_year}</span>
            <h3>${e.Title.length > 15 ? e.Title.split('', 15).join(''): e.Title}</h3>
            <p>${e.Categories}</p>
            <b>${e.imdb_rating}</b>
            <a href="https://www.youtube.com/watch?v=${e.ytid}" target="_blank">watch film</a>
        </div>
    </div>`
        elList.appendChild(newLi)
    })
}

mapper(fullData)

elForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    let serVal = elInp.value
    const searchData = fullData.filter((e)=> e.Title.toString().toLowerCase().includes(serVal.toLowerCase()) == true)
    mapper(searchData);
})


elReting.addEventListener('change', (e)=>{
    console.log(e.target.value);

    if(e.target.value == 'top'){
        const topData = fullData.sort((a,b)=> a.imdb_rating - b.imdb_rating).reverse()
        mapper(topData )
    }else if(e.target.value == 'passive'){
        const topData = fullData.sort((a,b)=> a.imdb_rating - b.imdb_rating)
        mapper(topData )
    }else{
        mapper(fullData)
    }
})
const categories = []

fullData.forEach((e,i)=>{
    if(categories.includes(e.Categories) != true){

        categories.push(e.Categories)
    }
})

categories.forEach((e,i)=>{
    let newOption = document.createElement('option')
    newOption.textContent = e
    newOption.value = e
    elcategory.appendChild(newOption)
})

elcategory.addEventListener('change', (e)=>{
    let cat = e.target.value
    const filCategory = fullData.filter((k)=> k.Categories == cat)
    mapper(filCategory)
})

elyear.addEventListener('change', (e)=>{
    console.log(e.target.value);

    if(e.target.value == 'New'){
        const oldData = fullData.sort((a,b)=> a.movie_year - b.movie_year).reverse()
        mapper(oldData )
    }else if(e.target.value == 'Old'){
        const yongData = fullData.sort((a,b)=> a.movie_year - b.movie_year)
        mapper(yongData )
    }else{
        mapper(fullData)
    }
})