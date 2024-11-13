// Баланс и инвентарь пользователя
let balance = 500;
const inventory = [];

// Обновление баланса на странице
function updateBalance() {
    document.getElementById("balance-value").textContent = balance;
}

// Возможные предметы в кейсе (названия, редкость, шанс выпадения и цвет)
const items = [
    { name: "Нож", rarity: "Легендарный", color: "#FFD700", chance: 1 },
    { name: "АК-47 | Красная линия", rarity: "Редкий", color: "#DC143C", chance: 5 },
    { name: "AWP | Азимов", rarity: "Редкий", color: "#DC143C", chance: 5 },
    { name: "M4A4 | Вой", rarity: "Редкий", color: "#DC143C", chance: 5 },
    { name: "Desert Eagle | Гипноз", rarity: "Необычный", color: "#8A2BE2", chance: 10 },
    { name: "P90 | Триггер", rarity: "Необычный", color: "#8A2BE2", chance: 10 },
    { name: "USP-S | Орион", rarity: "Необычный", color: "#8A2BE2", chance: 10 },
    { name: "P250 | Franklin", rarity: "Обычный", color: "#6495ED", chance: 20 },
    { name: "Five-Seven | Капилляры", rarity: "Обычный", color: "#6495ED", chance: 20 },
    { name: "CZ75-Auto | Бедствие", rarity: "Обычный", color: "#6495ED", chance: 20 },
];

// Функция для открытия кейса
function openCase() {
    const resultDiv = document.getElementById("result");

    // Проверка баланса
    if (balance < 100) {
        alert("Недостаточно кредитов для открытия кейса.");
        return;
    }

    // Снимаем стоимость кейса
    balance -= 100;
    updateBalance();

    // Выбор предмета по шансу выпадения
    const selectedItem = getRandomItem();

    // Показ результата с анимацией
    resultDiv.innerHTML = `<p style="color: ${selectedItem.color};">${selectedItem.rarity} - ${selectedItem.name}</p>`;
    resultDiv.classList.add("show");
    setTimeout(() => resultDiv.classList.remove("show"), 2000);

    // Добавление предмета в инвентарь
    addToInventory(selectedItem);
}

// Функция для случайного выбора предмета по шансу выпадения
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

// Функция добавления предмета в инвентарь
function addToInventory(item) {
    inventory.push(item);
    const inventoryList = document.getElementById("inventory-list");
    const listItem = document.createElement("li");
    listItem.style.color = item.color;
    listItem.textContent = `${item.rarity} - ${item.name}`;
    inventoryList.appendChild(listItem);
}

// Инициализация начального баланса
updateBalance();
