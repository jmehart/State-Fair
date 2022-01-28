const contentTarget = document.querySelectorAll(".rides.food.sideshow.games")
const eventHub = document.querySelector("#state-fair")

export const BigSpenderTicketHolders = () => {
    eventHub.addEventListener("bigSpenderTicketPurchased", customEvent => {
        let html = `<div class="person bigSpender">
        
        </div>`

        contentTarget.innerHTML += html
    })
}
