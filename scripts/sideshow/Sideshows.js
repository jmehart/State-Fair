

const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolders = () => {
    eventHub.addEventListener("sideshowTicketPurchased", customEvent => {
        let html = `<div class="person gawker">
        
        </div>`

        contentTarget.innerHTML += html
    })
    eventHub.addEventListener("bigSpenderTicketPurchased", customEvent => {
        let html = `<div class="person bigSpender">
        
        </div>`

        contentTarget.innerHTML += html
    })
}