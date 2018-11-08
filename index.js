const fs = require('fs')


const walkSync = function(dir, filelist) {
    const files = fs.readdirSync(dir)
    filelist = filelist || [];
    files.forEach(function(file) {
        if (fs.statSync(dir + '/' + file).isDirectory()) {
            filelist = walkSync(dir + file + '/', filelist);
        }
        else {
            filelist.push(file);
        }
    });
    return filelist;
};

fs.readFile('domainWords.txt', (err, data) => {
    const domainWords = data.toString().split('\n')
    const files = walkSync('./')
    const wordsInDomainWords =
        files.map(f => domainWords.includes(f) ? 1 : 0)
            .reduce((acc, curr) => {
                return acc + curr
            })
    console.log('Your Code Cleanliness Ratio is: %', wordsInDomainWords / files.length / 100)
})


