describe("Agendamento", () => {
    let agenda;
    let alan;

    beforeEach(() => {
        agenda = new Agendamento();
        alan = new PacienteBuilder().constroi();
    });
    
    it("deve agendar para 20 dias depois", () => {
        let consulta = new ConsultaBuilder().comData(new Date(2017, 6, 4)).constroi();
        let novaConsulta = agenda.para(consulta);

        expect(novaConsulta.data.toString()).toEqual(new Date(2017, 6, 24).toString());
    });

    it("deve pular fins de semana", () => {
        let consulta = new ConsultaBuilder().comData(new Date(2017, 6, 2)).constroi();
        let novaConsulta = agenda.para(consulta);

        expect(novaConsulta.data.toString()).toEqual(new Date(2017, 6, 24).toString());
    });
});