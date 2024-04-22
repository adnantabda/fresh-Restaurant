import './style.scss'
import Image1 from './imgs/1.jpg'
import Image2 from './imgs/2.jpg'
import Image3 from './imgs/3.jpg'
import Image4 from './imgs/4.jpg'
import Image5 from './imgs/5.jpg'
import menuIcon from './imgs/menu.svg'
import logo from './imgs/logo.svg'
import userIcon1 from './imgs/user.svg'
import heartIcon1 from './imgs/heart.svg'
import magnifyIcon1 from './imgs/magnify.svg'
import ticketIcon1 from './imgs/ticket.svg'

// import { ContextReplacementPlugin } from 'webpack'

const header = ()=>{
    const headerSelect = document.querySelector("header")
    const logoWrapper = document.createElement("div")
    const pageCat = document.createElement("h2")
    pageCat.textContent = "MENU"
    logoWrapper.classList.add("logo-wrapper")
    
    
    
    const svg1 = new Image()
    const svg2 = new Image()
    svg2.src = logo
    svg1.src = menuIcon
    logoWrapper.appendChild(svg2)
    logoWrapper.appendChild(pageCat)
    svg1.classList.add("menu-icon")
    svg2.classList.add("logo-icon")
    
    headerSelect.appendChild(logoWrapper)
    headerSelect.appendChild(svg1)
    
}

header()

const foodDescription = (image)=> {

    const container = document.createElement("div")
    container.classList.add("container")

    const foodImage = new Image()
    foodImage.src =  image

    const lowerPartOfImage = document.createElement("div")
    lowerPartOfImage.classList.add("lower-part-of-image")
    const priceCard = document.createElement("div")
    const orderFood = document.createElement("div")
    const foodDetail = document.createElement("p")
    const foodPrice = document.createElement("div")
    foodDetail.textContent = "The Only Good, Food You Get Around With 100 flavor joy"
    foodDetail.classList.add("food-detail")

    orderFood.textContent = "ORDER FOOD"
    orderFood.style.backgroundColor = "#7065E4"
    priceCard.classList.add("price-card")
    orderFood.classList.add("order-food")
    foodPrice.classList.add("food-price")
    foodPrice.textContent = "$32.99"


    container.appendChild(foodImage)
    priceCard.appendChild(orderFood)
    priceCard.appendChild(foodPrice)
    
    lowerPartOfImage.appendChild(foodDetail)
    lowerPartOfImage.appendChild(priceCard)


    container.appendChild(lowerPartOfImage)


    return container

    

}


const contentCreate = () =>{
    const content = document.querySelector("#content")
    const header = document.createElement("h1")
    const description = document.createElement("p")
    const headerContainer = document.createElement("div")
    const foodSlide = document.createElement("div")


    headerContainer.appendChild(header)
    headerContainer.appendChild(description)


    content.appendChild(headerContainer)


    header.textContent = "Freshy Restaurant"
    description.textContent = "where culinary excellence meets endless flavor possiblities  indulge your palate with our meticulously crafted dishes"
    // content.appendChild(header)
    // content.appendChild(description)


    description.classList.add("description")
    headerContainer.classList.add("header-container")
    foodSlide.classList.add("food-slide")

    foodSlide.appendChild(foodDescription(Image1))
    foodSlide.appendChild(foodDescription(Image2))
    foodSlide.appendChild(foodDescription(Image3))
    foodSlide.appendChild(foodDescription(Image4))
    foodSlide.appendChild(foodDescription(Image5))
    
    content.appendChild(foodSlide)

}


const footerContainer = ()=>{
    const content = document.querySelector("body")
    const footerNav = document.createElement("div")
    const heartIcon = new Image()
    const magnifyIcon = new Image()
    const ticketIcon = new Image()
    const userIcon = new Image()

    magnifyIcon.src = magnifyIcon1
    heartIcon.src = heartIcon1
    ticketIcon.src = ticketIcon1
    userIcon.src = userIcon1
    magnifyIcon.classList.add("magnify-icon")
    ticketIcon.classList.add("ticket-icon")
    userIcon.classList.add("user-icon")
    heartIcon.classList.add("heart-icon")
    
    footerNav.appendChild(userIcon)
    footerNav.appendChild(magnifyIcon)
    footerNav.appendChild(ticketIcon)
    footerNav.appendChild(heartIcon)

    content.appendChild(footerNav)
    footerNav.classList.add("footer-nav")

    

}

contentCreate()
footerContainer()