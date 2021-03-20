class Processor {

    static Process(data) {

        var rawRow = data.split("\n")
        var rows = []
        rawRow.forEach(row => {
            
            var arr = row.split(',')
            rows.push(arr)
        })

        return rows;
    }
}

module.exports = Processor