class Table {
    
    constructor(arr) {

        this.header = arr[0];
        arr.shift() // exclui o primeiro elemento do array (no caso o header)
        this.rows = arr
    }

    get RowCount() {

        return this.rows.length;
    }

    get ColumnCount() {

        return this.header.length
    }
}

module.exports = Table