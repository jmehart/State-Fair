const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")


export let foodTicketCount = 0

export const FoodTicketHolders = () => {
    eventHub.addEventListener("foodTicketPurchased", customEvent => {
        let html = `<div class="person eater">
        
        </div>`

        foodTicketCount++

        contentTarget.innerHTML += html
        document.dispatchEvent(new CustomEvent("stateChanged"))
    })
    eventHub.addEventListener("bigSpenderTicketPurchased", customEvent => {
        let html = `<div class="person bigSpender">
        
        </div>`

        contentTarget.innerHTML += html
    })
}
