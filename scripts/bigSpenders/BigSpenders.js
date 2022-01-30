const contentTarget = document.querySelectorAll(".rides.food.sideshow.games")
const eventHub = document.querySelector("#state-fair")


export let bigSpendersTicketCount = 0

export const BigSpenderTicketHolders = () => {
    eventHub.addEventListener("bigSpenderTicketPurchased", customEvent => {
        let html = `<div class="person bigSpender">
        
        </div>`

        bigSpendersTicketCount++

        contentTarget.innerHTML += html
        document.dispatchEvent(new CustomEvent("stateChanged"))
    })
}
