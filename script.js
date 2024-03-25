const inp = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector(".list");
//
let count = 1;
btn.addEventListener("click", (e) => {
    if (inp.value.trim()) {
        const inpValue = `${count} ${inp.value}`;
        count = count * 2;
        const li = document.createElement("li");
        li.innerText = inpValue;
        ul.append(li);
        inp.value = "";
    }
});
