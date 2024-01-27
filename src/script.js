function mockcase(str) {
    const strarr = [];
    for (let x of str) {
        strarr.push(x);
    }
    if (!str.includes(" ")) {
        const randstp = Math.floor(Math.random() * 2) + 2;
        for (let i = 1;i<strarr.length;i+=randstp) {
            strarr[i] = strarr[i].toUpperCase();
        }
    }
    else {
        let randstp = Math.floor(Math.random() * 2) + 2;
        for (let i = 1;i<strarr.length;i+=randstp) {
            if (strarr[i] !== " ") {
                strarr[i] = strarr[i].toUpperCase();
            }
            else {
                if (!(randstp < 4))
                    randstp -= 1;
                else
                    randstp += 1;
                strarr[i] = strarr[i].toUpperCase();
            }
            randstp = Math.floor(Math.random() * 2) + 2;
        }
    }
    let finstr = "";
    for (let ele of strarr) {
        finstr += ele;
    }
    return finstr;
}
const output = document.querySelector("#out");
const button = document.querySelector("#submitBtn");
const input = document.querySelector("#textInp");
document.addEventListener("DOMContentLoaded", () => {
    input.addEventListener("keyup",(event) => {
        if (event.key === "Enter") {
            button.click();
        }
    })
})
button.addEventListener("click", (event) => {
    event.preventDefault();
    const text = input.value.toLowerCase();
    output.innerHTML = mockcase(text);
})
