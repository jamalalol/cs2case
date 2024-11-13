let balance = 500;
const inventory = [];

function updateBalance() {
    document.getElementById("balance-value").textContent = balance;
}

const items = [
    { name: "Нож", rarity: "Легендарный", color: "#FFD700", chance: 1, price: 3000, image: "knife.png" },
    { name: "АК-47 | Красная линия", rarity: "Редкий", color: "#DC143C", chance: 5, price: 1200, image: "ak47.png" },
    { name: "AWP | Азимов", rarity: "Редкий", color: "#DC143C", chance: 5, price: 1100, image: "awp.png" },
    { name: "M4A4 | Вой", rarity: "Редкий", color: "#DC143C", chance: 5, price: 1000, image: "m4a4.png" },
    { name: "Desert Eagle | Гипноз", rarity: "Необычный", color: "#8A2BE2", chance: 10, price: 600, image: "deagle.png" },
    { name: "P90 | Триггер", rarity: "Необычный", color: "#8A2BE2", chance: 10, price: 500, image: "p90.png" },
    { name: "USP-S | Орион", rarity: "Необычный", color: "#8A2BE2", chance: 10, price: 500, image: "usp.png" },
    { name: "P250 | Franklin", rarity: "Обычный", color: "#6495ED", chance: 20, price: 200, image: "p250.png" },
    { name: "Five-Seven | Капилляры", rarity: "Обычный", color: "#6495ED", chance: 20, price: 180, image: "fiveseven.png" },
    { name: "CZ75-Auto | Бедствие", rarity: "Обычный", color: "#6495ED", chance: 20, price: 150, image: "cz75.png" },
];

function openCase() {
    if (balance < 100) {
        alert("Недостаточно кредитов для открытия кейса.");
        return;
    }

    balance -= 100;
    updateBalance();

    const selectedItem = getRandomItem();

    displayScrollAnimation(selectedItem);

    setTimeout(() => {
        addToInventory(selectedItem);
    }, 3000);
}

function getRandomItem() {
    const totalChance = items.reduce((sum, item) => sum + item.chance, 0);
    const random = Math.floor(Math.random() * totalChance);
    let cumulativeChance = 0;

    for (const item of items) {
        cumulativeChance += item.chance;
        if (random < cumulativeChance) {
            return item;
        }
    }
}

function displayScrollAnimation(selectedItem) {
    const scrollContent = document.getElementById("scroll-content");
    scrollContent.innerHTML = "";
    
    for (let i = 0; i < 15; i++) {
        const randomItem = items[Math.floor(Math.random() * items.length)];
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("scroll-item");
        itemDiv.style.color = randomItem.color;
        itemDiv.innerHTML = `<img src="${randomItem.image}" width="50" height="50"><p>${randomItem.name}</p>`;
        scrollContent.appendChild(itemDiv);
    }

    setTimeout(() => {
        scrollContent.innerHTML = `<div class="scroll-item" style="color:${selectedItem.color}">
            <img src="${selectedItem.image}" width="50" height="50"><p>${selectedItem.name}</p></div>`;
    }, 3000);
}

function addToInventory(item) {
    inventory.push(item);
    const inventoryList = document.getElementById("inventory-list");
    const listItem = document.createElement("li");
    listItem.innerHTML = `<img src="${item.image}" width="50" height="50"> <span>${item.rarity} - ${item.name}</span> - ${item.price} кредитов`;
    listItem.style.color = item.color;

