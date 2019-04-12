class Position {
    constructor(filds) {
        this._prev = null;
        this.filds = filds;
    }

    set prev(val) {
        this._prev = val;
    }

    get prev(){
        return this._prev;
    }

    random(){
        const num = Math.floor(Math.random() * this.filds.length);

        if(num !== this.prev || this.prev === null) {
            this.prev = num;
            return num;
        }

        return this.random();
    }
}

export default Position;
