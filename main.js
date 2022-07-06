const menu = document.querySelector('aside')
const menubtn = document.querySelector('.menu-btn')
const close = document.querySelector('#close-btn')
const theme = document.querySelector('.theme-toggler')

menubtn.addEventListener('click', () => { 
    menu.style.display = 'block'
})
close.addEventListener('click', () => { 
    menu.style.display = 'none'
})

theme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-background')

    theme.querySelector(`span:nth-child(1)`).classList.toggle("active")
    theme.querySelector(`span:nth-child(2)`).classList.toggle("active")
})

orders.forEach( order => { 
    const tr= document.createElement("tr")
    const trContent = 
                        `<td>${order.ProductName}</td>
                        <td>${order.ProductNumber}</td>
                        <td>${order.PaymentStatus}</td>
                        <td class="${order.shipping === "Pending" ? "danger" : "warning"}">${order.shipping}</td>
                        <td class="primary">Details</td>`
    tr.innerHTML  = trContent;
    document.querySelector("table tbody").appendChild(tr);
})  