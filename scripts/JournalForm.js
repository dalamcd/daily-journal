export const JournalForm = () => {

    const contentElement = document.querySelector(".newEntry");
    contentElement.innerHTML = `<form>
    <input type="text" value="Title">
    <input type="text" value="Date"><br>
    <textarea></textarea><br>
    <select name="mood">
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
    </select>
    <input type="button" class="entry__editButton" value="Edit">
    <input type="button" class ="entry__deleteButton" value="Delete">
    <input type="submit" value="Submit">
</form>`
}