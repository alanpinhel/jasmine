class MaiorEMenor {
    constructor() {
        this._menor = Number.MAX_VALUE;
        this._maior = Number.MIN_VALUE;
    }

    encontra(nums) {
        nums.forEach(num => {
            if (num < this._menor) this._menor = num;
            if (num > this._maior) this._maior = num;
        });
    }

    get maior() {
        return this._maior;
    }

    get menor() {
        return this._menor;
    }
}