const nextBtn = document.querySelector(".btn");
const newInfo = document.getElementById("new-info");
const infoRH = document.getElementById("info_request_header");

var data = null;
let currentIndex = 0;

const fetchData = async () => {
    try {
        const response = await fetch("https://api.jsonbin.io/v3/b/67965b2ee41b4d34e47efbb7");
        if (!response.ok) {
            throw new Error("Ыпи қате шақырылды!");
        }
        const jsonData = await response.json();
        data = jsonData.record.tasks;
        const newItem = document.createElement("h2");
        newItem.textContent = "Сәтті берілді!";
        newItem.classList.add("greet_request");
        infoRH.appendChild(newItem);
        setTimeout(() => {
            infoRH.innerHTML = "";
        }, 2000);
    }
    catch (error) {
        console.error(error);
        const newItem = document.createElement("h2");
        newItem.textContent = error.message;
        newItem.classList.add("bad_request");
        infoRH.appendChild(newItem);
        setTimeout(() => {
            infoRH.innerHTML = "";
        }, 2000);
    }
};


const randomIndex = () => {
    let oldIndex = currentIndex;
    while (oldIndex !== currentIndex)
        currentIndex = parseInt((Math.random() * 100) % data.length);
}

nextBtn.addEventListener("click", () => {
    if (data) {
        randomIndex();
        if (currentIndex < data.length - 1) {
            console.log("Next button clicked!");
            currentIndex++;
            newInfo.style.display = "block";
            console.log(currentIndex);
            console.log(data[currentIndex].title);
            newInfo.innerHTML = data[currentIndex].title;
        }
    }
    else {
        const newItem = document.createElement("h2");
        newItem.textContent = "Жаңа қабарлама шақырылды!";
        newItem.classList.add("bad_request");
        infoRH.appendChild(newItem);
        setTimeout(() => {
            infoRH.innerHTML = "";
            fetchData();
        }, 2000);
    }
});

const init = () => {
    newInfo.style.display = "none";
};

init();