const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export let rideTicketCount = 0

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", customEvent => {
        let html = `<div class="person rider">
        
        </div>`

        rideTicketCount++

        contentTarget.innerHTML += html
        document.dispatchEvent(new CustomEvent("stateChanged"))
    })
    eventHub.addEventListener("bigSpenderTicketPurchased", customEvent => {
        let html = `<div class="person bigSpender">
        
        </div>`


        contentTarget.innerHTML += html
    })
}

