const fs = require('fs')

fs.readFile('domainWords.txt', (err, data) => {
    const domainWords = data.toString().split('\n')
    fs.readdir('.', (err, files) => {
        const wordsInDomainWords =
            files.map(f => domainWords.includes(f) ? 1 : 0)
                .reduce((acc, curr) => {
                    return acc + curr
                })
        console.log('wordsInDomainWords: ', wordsInDomainWords)
    })
})


