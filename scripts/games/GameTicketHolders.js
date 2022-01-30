const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")


export let gamesTicketCount = 0

export const GameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", customEvent => {
        let html = `<div class="person player">
        
        </div>`

        gamesTicketCount++

        contentTarget.innerHTML += html
        document.dispatchEvent(new CustomEvent("stateChanged"))
    })
    eventHub.addEventListener("bigSpenderTicketPurchased", customEvent => {
        let html = `<div class="person bigSpender">
        
        </div>`

        contentTarget.innerHTML += html
    })
}