const taskTitle = document.getElementById("task_title")
const respBtnContainer = document.getElementById("responses")
const resultModalLabel = document.getElementById("resultModalLabel")
const resultModalDesc = document.getElementById("resultModalDesc")

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function updateUI(task) {
    taskTitle.innerText = `${task.type}, ${capitalize(
        task.casus
    )}, ${capitalize(task.person)}`
}

function initialize(articleType, data) {
    currentTask = {
        type: articleType,
        ...data,
    }
    updateUI(currentTask)
}

function respond(ending) {
    const correctResponse = capitalize(currentTask.ending)
    const isCorrect = currentTask.ending === ending
    resultModalLabel.innerText = isCorrect
        ? "You are a real master! 🎉"
        : "Oh, missed 😅"
    resultModalDesc.innerText = isCorrect
        ? `Correct, "${correctResponse}" is right. Keep it up! 👍`
        : `Mistakes happen. "${correctResponse}" is right. Just don't stop learning! 💪`
}

function randomArrayElement(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function changeWord() {
    const category = randomArrayElement(deklination)
    const variant = randomArrayElement(category.data)
    initialize(category.type, variant)
}
