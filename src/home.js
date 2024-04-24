import burger from "./imgs/file.png"

export const home = ()=>{
    const content = document.querySelector("#content")
    const homeContent = document.createElement("div")
    
    while (content.firstChild){
        content.removeChild(content.firstChild)
    }
    const h1 = document.createElement("h1")
    const description = document.createElement("p")
    const container = document.createElement("div")
    h1.textContent = "Welcome to our Restaurant"
    description.textContent = "Try our Food, and test 100 flavour food"
    content.appendChild(h1)
    content.appendChild(description)
    const h3 = document.createElement("h3")
    const burgerImage = new Image()
    const list = document.createElement("ul")
    container.classList.add("burger-container")
    list.classList.add("list")
    homeContent.classList.add("home")

    burgerImage.classList.add("burger-image")

    const priceCard = document.createElement("div")
    const orderFood = document.createElement("div")
    const foodPrice = document.createElement("div")

    orderFood.textContent = "ORDER FOOD"
    orderFood.style.backgroundColor = "#7065E4"
    priceCard.classList.add("price-card")
    orderFood.classList.add("order-food")
    foodPrice.classList.add("food-price")
    foodPrice.textContent = "$32.99"


    priceCard.appendChild(orderFood)
    priceCard.appendChild(foodPrice)
    
    const li1 = document.createElement("li")
    li1.textContent = "Fast"
    const li2 = document.createElement("li")
    li2.textContent = "HOT"

    const li3 = document.createElement("li")
    li3.textContent = "Delicious"

    
    
    h3.textContent = "Order Testy Fresh Food"
    burgerImage.src = burger
    
    
    list.appendChild(li1)
    list.appendChild(li2)
    list.appendChild(li3)
    
    
    homeContent.appendChild(container)
    container.appendChild(h3)
    container.appendChild(burgerImage)
    container.appendChild(list)
    container.appendChild(priceCard)
    // h1.textContent = "Freshy Restaurant"
    // description.textContent = "Welcome to number one restaurant , Freshy Restaurant here you get fresh food"
    content.appendChild(homeContent)
}