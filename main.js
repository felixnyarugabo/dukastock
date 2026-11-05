const input = document.querySelector('input')
const display = document.getElementById('display')
const products = [
    {
        id: 1,
        name: "Laptop",
        image: "/image/laptop.jpg",
        price: 80000,
        stock: 5
    },
    {
        id: 2,
        name: "Smartphone",
        image: "/image/smartphone.jpg",
        price: 25000,
        stock: 10
    },
    {
        id: 3,
        name: "Headphones",
        image: "/image/headphone.jpg",
        price: 3500,
        stock: 15
    },
    {
        id: 4,
        name: "Keyboard",
        image: "/image/keboad.jpg",
        price: 2500,
        stock: 8
    },
    {
        id: 5,
        name: "Mouse",
        image: "/image/mouse.jpg",
        price: 1200,
        stock: 20
    },
    {
        id: 6,
        name: "Monitor",
        image: "/image/moniter.jpg",
        price: 18000,
        stock: 4
    },
    {
        id: 7,
        name: "USB Flash Drive",
        image: "/image/usb.jpg",
        price: 1000,
        stock: 0
    }
];
input.addEventListener('input',function showMessage(){
    let type=input.value.trim()

    if(products.length > 0){
        const myfilter = products.filter(element=> element.name.toLocaleLowerCase().includes(type.toLocaleLowerCase()))
        
        
        myfilter.forEach(function(user){
    let p = document.createElement('p')
    let image = document.createElement('img')
    image.src=user.image
    image.alt='products'
    image.width=150;

    let  card =document.createElement('div')
    p.textContent=`product ${user.name} price : ${user.price} stock : ${user.stock}`
    card.appendChild(image)
    card.appendChild(p)

    display.appendChild(card)

    
    })
    }
    
})
showMessage()