const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export let ridesTicketCount = 0

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", customEvent => {
        let html = `<div class="person rider">
        
        </div>`

        contentTarget.innerHTML += html
    })
    eventHub.addEventListener("bigSpenderTicketPurchased", customEvent => {
        let html = `<div class="person bigSpender">
        
        </div>`

        ridesTicketCount++

        contentTarget.innerHTML += html
        document.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

