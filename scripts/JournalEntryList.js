import { getEntries, useEntries } from "./JournalDataProvider.js"
import { Entry } from "./JournalEntry.js"

const eventHub = document.querySelector(".container");
const entryLog = document.querySelector(".journalEntries")

export const EntryList = () => {
    getEntries()
    .then(() => {
        const entries = useEntries();
        let entriesHTML = ""
        for (const entry of entries) {
            entriesHTML += Entry(entry)
        }
        entryLog.innerHTML = entriesHTML
    });
}

eventHub.addEventListener("journalStateChange", e => {
    EntryList();
})