export const Entry = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <p>Date: ${entry.date}</p>
            <p>${entry.entry}
            <p>Mood: ${entry.mood.label}</p>
        </section>
    `
}