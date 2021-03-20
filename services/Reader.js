const fs = require("fs")
const util = require("util")

class Reader {
    
    constructor() {
        this.reader = util.promisify(fs.readFile) // Torno a função fs.readFile em uma promisse pra poder usar async/await
    }

    async Read(filepath){

        try {
            return await this.reader(filepath, "utf-8")
        }catch(err){
            return undefined
        }
    
    }
}

module.exports = Reader