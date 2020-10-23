/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { getEntries, useEntries } from "./JournalDataProvider.js"
import { Entry } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".journalEntries")

export const EntryList = () => {
    // Use the journal entry data from the data provider component
    getEntries()
    .then(() => {
        const entries = useEntries();
        for (const entry of entries) {
            entryLog.innerHTML += Entry(entry)
        }
    });


}