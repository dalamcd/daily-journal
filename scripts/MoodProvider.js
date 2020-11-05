let moods = [];

export const useMoods = () => moods.slice();

export const getMoods = () => {
    return fetch("http://localhost:8088/moods")
    .then(response => response.json())
    .then(response => moods = response);
}