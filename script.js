// Возможные предметы в кейсе (названия и вероятности)
const items = [
    { name: "Нож", rarity: "Легендарный", color: "#FFD700" },
    { name: "АК-47 | Красная линия", rarity: "Редкий", color: "#DC143C" },
    { name: "AWP | Азимов", rarity: "Редкий", color: "#DC143C" },
    { name: "M4A4 | Вой", rarity: "Редкий", color: "#DC143C" },
    { name: "Desert Eagle | Гипноз", rarity: "Необычный", color: "#8A2BE2" },
    { name: "P90 | Триггер", rarity: "Необычный", color: "#8A2BE2" },
    { name: "USP-S | Орион", rarity: "Необычный", color: "#8A2BE2" },
    { name: "P250 | Franklin", rarity: "Обычный", color: "#6495ED" },
    { name: "Five-Seven | Капилляры", rarity: "Обычный", color: "#6495ED" },
    { name: "CZ75-Auto | Бедствие", rarity: "Обычный", color: "#6495ED" },
];

// Функция для открытия кейса
function openCase() {
    const resultDiv = document.getElementById("result");

    // Генерация случайного предмета
    const item = items[Math.floor(Math.random() * items.length)];

    // Отображение результата на экране
    resultDiv.innerHTML = `<p style="color: ${item.color};">${item.rarity} - ${item.name}</p>`;
}
#balance {
    font-size: 1.2em;
    margin-top: 10px;
    color: #FFD700;
}

#inventory {
    margin-top: 50px;
    color: #fff;
}

#inventory h2 {
    font-size: 1.5em;
    margin-bottom: 20px;
}

#inventory-list {
    list-style-type: none;
    padding: 0;
}

#inventory-list li {
    font-size: 1.1em;
    margin: 10px 0;
}

#result {
    margin-top: 30px;
    font-size: 1.5em;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.show {
    opacity: 1;
}
