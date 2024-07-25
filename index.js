const LetterCompt = (ch) => {
    console.log(ch)
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
    const resultch = ''
    result.forEach(element => {
        const resultch =element;

    });
  
    return result
}

console.table(LetterCompt('Chamms'))