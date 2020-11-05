let entries = [];

const eventHub = document.querySelector(".container");

export const getEntries = () => {
    return fetch("http://localhost:8088/entries?_expand=mood")
        .then(response => response.json())
        .then(jsonEntries => {
            entries = jsonEntries;
        });
}

export const useEntries = () => {
    const sortedByDate = entries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

eventHub.addEventListener("entrySubmitted", e => {
    console.log(e.detail)
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(e.detail)
    })
        .then(getEntries)
        .then(() => {
            eventHub.dispatchEvent(new CustomEvent("journalStateChange"));

        })
})