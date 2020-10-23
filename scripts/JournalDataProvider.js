/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
let entries = [];

export const getEntries = () => {
    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
    .then(jsonEntries => {
        entries = jsonEntries;
    });
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useEntries = () => {
    const sortedByDate = entries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}