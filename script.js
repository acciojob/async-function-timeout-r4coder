const txt = document.getElementById("text");
const dly = document.getElementById("delay");
const btn = document.getElementById("btn");
const div = document.getElementById("output");

function wait(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(txt.value);
        }, delay);
    });
}

btn.addEventListener("click", async () => {
    let data = await wait(dly.value);
    div.textContent = data;
});