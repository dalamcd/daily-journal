import { getMoods, useMoods } from "./MoodProvider.js";

const eventHub = document.querySelector(".container");

export const JournalForm = () => {

    getMoods().then(() => {
        const contentElement = document.querySelector(".newEntry");
        contentElement.innerHTML = `<form id="entryForm">
        <input type="text" name="entry__title" value="Title">
        <input type="text" name="entry__date" value="Date"><br>
        <textarea name="entry__text"></textarea><br>
        <select name="entry_mood" name="mood">
        ${
            useMoods().map(mood => 
                `<option value=${mood.id}>${mood.label}</option>`
            )
        }
        </select>
        <input type="button" class="entry__editButton" value="Edit">
        <input type="button" class ="entry__deleteButton" value="Delete">
        <input type="button" id="submitEntry" value="Submit">
    </form>`
    });

    eventHub.addEventListener("click", e => {
        if(e.target.id === "submitEntry") {
            const formEntries = document.getElementById("entryForm").elements
            const clickEvent = new CustomEvent ("entrySubmitted", {
                detail: {
                    concept: formEntries[0].value,
                    date: formEntries[1].value,
                    entry: formEntries[2].value,
                    moodId: formEntries[3].value
                }
            })
        eventHub.dispatchEvent(clickEvent);
        }
    })
}