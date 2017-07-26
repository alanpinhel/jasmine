class PacienteBuilder {
    constructor() {
        this._nome = "Alan";
        this._idade = 22;
        this._peso = 60;
        this._altura = 1.72;
    }

    comNome(nome) {
        this._nome = nome;
        return this;
    }

    comIdade(idade) {
        this._idade = idade;
        return this;
    }

    comPeso(peso) {
        this._peso = peso;
        return this;
    }

    comAltura(altura) {
        this._altura = altura;
        return this;
    }

    constroi() {
        return new Paciente(this._nome, this._idade, this._peso, this._altura);
    }
}