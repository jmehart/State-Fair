const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", customEvent => {
        let html = `<div class="person rider">
        
        </div>`

        contentTarget.innerHTML += html
    })
    eventHub.addEventListener("bigSpenderTicketPurchased", customEvent => {
        let html = `<div class="person bigSpender">
        
        </div>`

        contentTarget.innerHTML += html
    })
}

