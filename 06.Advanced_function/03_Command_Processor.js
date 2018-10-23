(function (inputArr) {
    let commandProcessor = (function () {
        let text = "";

        return {
            append: (newText) => text += newText,
            removeStart: (count) => text = text.slice(+count),
            removeEnd: (count) => text = text.slice(0, text.length - count),
            print: () => console.log(text),
        }
    })();

    for (let inputLine of inputArr) {
        let [command, value] = inputLine.split(" ");
        commandProcessor[command](value);
    }
})(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']);




