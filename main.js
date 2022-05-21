import "./style.css";

const baseURL = 'https://platzi-avo.vercel.app'

const getData = async() => {
  try {
    const response = await window.fetch(`${baseURL}/api/avo`)
    return (await response.json()).data
  }
  
  catch(e) {
    console.error(e)
  }
}

const createCard = (element) => {

    const cardContainer = document.createElement('div')
    const image = document.createElement('img')
    const title = document.createElement('div')
    const price = document.createElement('div')

    image.src = baseURL + element.image
    title.textContent = element.name
    price.textContent = element.price

    cardContainer.classList.add("card")
    image.classList.add("card__image")
    title.classList.add("card__title")
    price.classList.add("card__price")

    cardContainer.append(image, title, price)
    return cardContainer
}

const renderCards = async() => {

  const cardsContainer = document.getElementById('app')
  cardsContainer.classList.add("cards")

  let cards = []
  const data = await getData()
  
  data.forEach(element => {
    const card = createCard(element)
    cards.push(card)
  });

  cardsContainer.append(...cards)
}

renderCards()