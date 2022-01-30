

const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")


export let sideshowTicketCount = 0

export const SideshowTicketHolders = () => {
    eventHub.addEventListener("sideshowTicketPurchased", customEvent => {
        let html = `<div class="person gawker">
        
        </div>`

        sideshowTicketCount++

        contentTarget.innerHTML += html
        document.dispatchEvent(new CustomEvent("stateChanged"))
    })
    eventHub.addEventListener("bigSpenderTicketPurchased", customEvent => {
        let html = `<div class="person bigSpender">
        
        </div>`

        contentTarget.innerHTML += html
    })
}