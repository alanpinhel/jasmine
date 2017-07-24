describe("Consulta", () => {
    it("não deve cobrar nada se a consulta for um retorno", () => {
        let alan = new Paciente("Alan", 22, 60, 1.72);
        let consulta = new Consulta(alan, [], false, true);

        expect(consulta.preco()).toEqual(0);
    });

    it("deve cobrar 25 reais por cada procedimento comum", () => {
        let alan = new Paciente("Alan", 22, 60, 1.72);
        let consulta = new Consulta(alan, ["proc1", "proc2"], false, false);

        expect(consulta.preco()).toEqual(50);
    });

    it("deve dobrar o preço da consulta particular", () => {
        let alan = new Paciente("Alan", 22, 60, 1.72);
        let consulta = new Consulta(alan, ["proc1", "proc2"], true, false);

        expect(consulta.preco()).toEqual(50 * 2);
    });

    it("deve dobrar o preco da consulta particular mesmo com procedimentos especiais", () => {
        let alan = new Paciente("Alan", 22, 60, 1.72);
        let consulta = new Consulta(alan, ["raio-x"], true, false);

        expect(consulta.preco()).toEqual(55 * 2);
    });
});