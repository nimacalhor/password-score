class PassScore {
    #score = 0;
    #pass;
    constructor(pass) {
        this.#pass = pass
    }

    #containUppercase() {
        if (/[A-Z]/g.test(this.#pass)) this.#score += 15;
        return this
    }

    #containLowercase() {
        if (/[a-z]/g.test(this.#pass)) this.#score += 15;
        return this
    }

    #containsDigit() {
        if (/\d/g.test(this.#pass)) this.#score += 25;
        return this
    }

    #containsSpecialChar() {
        if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g.test(this.#pass)) this.#score += 30;
        return this
    }

    #checkLength() {
        if (this.#pass.length > 8) this.#score += 15;
        return this
    }

    get score() {
        this.#containUppercase().#containLowercase().#containsDigit().#containsSpecialChar().#checkLength();
        return this.#score
    }
}

const myPass = new PassScore("899NimaK&")

console.log(myPass.score)