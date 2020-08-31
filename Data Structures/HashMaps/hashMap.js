//A hash function is a function which maps the key to the index where the value is
//So imagine that we have a hashmap made using an array
//
class HashMap {
    _hash(str, length) {
        //this function has to be deterministic, reliable and has to be spread throughout the length. 
        //Length here is the length of the array we are storing at 
        //The following works on strings only
        let weirdPrime = 31
        let total = 0;

        for (let i = 0; i < Math.min(str.length, 100); i++) {
            let char = str[i]
            let value = char.charCodeAt(0) - 96
            total += (total * weirdPrime + value) % length
        }
        return total
    }

    constructor(size = 53) {
        this.keymap = new Array(size)
    }

    //Implementation of set method 
    //Accepts key/value hashes key 
    set(key, value) {
        let index = this._hash(key, this.keymap.length)
        if (!this.keymap[index]) {
            this.keymap[index] = []

        }
        this.keymap[index].push([key, value])
    }


    //Implementation of get(key
    get(key) {
        let hashed = this._hash(key)
        if (!this.keymap[hashed]) {
            return undefined
        }
        else {
            let returned = this.keymap[hashed];
            for (let i = 0; i < returned.length; i++) {
                if (returned[i][0] == key) {
                    return returned[i][1]
                }
            }
        }
        //Accepts key
        //Hashes key
        //Returns key Value pair
    }

    getKeys() {
        let keysArr = []
        for (let i = 0; i < this.keymap.length; i++) {
            if (this.keymap[i]) {
                for (let j = 0; j < this.keymap[i].length; j++) {
                    if (!keysArr.includes(this.keymap[i][j][0])) {
                        keysArr.push(this.keymap[i][j][0])
                    }
                }
            }
        }
        return keysArr
    }

    getValues() {
        let valuesArr = []
        for (let i = 0; i < this.keymap.length; i++) {
            if (this.keymap[i]) {
                for (let j = 0; j < this.keymap[i].length; j++) {
                    if (!valuesArr.includes(this.keymap[i][j][1])) {
                        valuesArr.push(this.keymap[i][j][1])
                    }
                }
            }
        }
        return valuesArr
    }

}

let hashyHash = new HashMap(171);
hashyHash.set("saima", "10")
hashyHash.set("waima", "21")
hashyHash.set("raima", "22")
console.log(hashyHash.getValues())
console.log(hashyHash.getKeys())