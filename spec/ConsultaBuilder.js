class ConsultaBuilder {
    constructor() {
        this._paciente = new PacienteBuilder().constroi();
        this._procedimentos = [];
        this._particular = false;
        this._retorno = false;
        this._data = new Date();
    }

    comPaciente(paciente) {
        this._paciente = paciente;
        return this;
    }

    comProcedimentos(procedimentos) {
        this._procedimentos = procedimentos;
        return this;
    }

    comParticular(particular) {
        this._particular = particular;
        return this;
    }

    comRetorno(retorno) {
        this._retorno = retorno;
        return this;
    }

    comData(data) {
        this._data = data;
        return this;
    }

    constroi() {
        return new Consulta(this._paciente, this._procedimentos, this._particular, this._retorno, this._data);
    }
}