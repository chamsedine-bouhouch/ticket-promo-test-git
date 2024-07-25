const LetterCompt = (ch) => {
    let result = []
    for (let index = 0; index < ch.length; index++) {
        const element = ch[index];
        if (result[element]) {
            result[element] += 1
        }
        else {
            result[element] = 1

        }
    }
    let resultch = ''
    const list = Object.keys(result)
    for (const key of list) {
        const element = result[key];
        resultch += `${key}:`
        for (let index = 0; index < element; index++) {
            resultch += '*'
        }
        if (key !== list[list.length - 1]) {
            resultch += ','
        }
    }

    return resultch
}

console.log(LetterCompt('Chamms'))