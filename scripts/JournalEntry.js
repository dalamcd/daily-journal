/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const Entry = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <p>Date: ${entry.date}</p>
            <p>${entry.entry}
        </section>
    `
}