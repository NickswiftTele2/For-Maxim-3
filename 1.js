'use strict';
let stroka = "Ублюдок, мать твою, а ну, иди сюда, говно собачье, а? Сдуру решил ко мне лезть, ты? Засранец вонючий, мать твою, а? Ну, иди сюда, попробуй меня трахнуть — я тебя сам трахну, ублюдок, онанист чёртов, будь ты проклят! Иди, идиот, трахать тебя и всю твою семью! Говно собачье, жлоб вонючий, дерьмо, сука, падла! Иди сюда, мерзавец, негодяй, гад! Иди сюда, ты, говно, жопа!"
let test = 1.2

function topWord(str){
    if (typeof str === "string") {  // проверка на строку
    let res = [];
    let noDots = str.replaceAll(". ", " ").replaceAll(", ", " ").replaceAll(".", "").replaceAll("!", "").replaceAll("?", "").replaceAll(" — ", " ") // убираю знаки препинания
    let list = noDots.split(' ');
    for (let word of list){
        if (res.find(item => item.name.toLowerCase() == word.toLowerCase())){  // если есть слово в итоговом списке, то увеличиваю счетчик на 1
            (res.find(item => item.name.toLowerCase() == word.toLowerCase())).count += 1
        } else {
            res.push({count: 1, name: word.toLowerCase()}) // если нет, то добавляю слово в итоговый список
        }
    }
    res.sort((a, b) => a.count - b.count)
    let otv = [] // тут явно коряво реализовал поиск топ-3 слова. Думаю есть магическая функция, которая сразу одним действием возвращает это дерьмр
    for (let word of res.slice(-3)) {
        otv.push(word.name)
    }
    return otv
    } else {
        return "ne stroka"
    }
}

console.log(topWord(stroka))

