describe("Consulta", () => {
    let alan;

    beforeEach(() => {
        alan = new PacienteBuilder().constroi();
    });
    
    describe("Consultas que são retornos", () => {
        it("não deve cobrar nada se a consulta for um retorno", () => {
            let consulta = new Consulta(alan, [], true, true);

            expect(consulta.preco()).toEqual(0);
        });
    });

    describe("Consultas que são particulares", () => {
        it("deve dobrar o preço da consulta particular", () => {
            let consulta = new Consulta(alan, ["proc1", "proc2"], true, false);

            expect(consulta.preco()).toEqual(50 * 2);
        });

        it("deve dobrar o preco da consulta particular mesmo com procedimentos especiais", () => {
            let consulta = new Consulta(alan, ["raio-x"], true, false);

            expect(consulta.preco()).toEqual(55 * 2);
        });
    });

    describe("Consultas por um convênio", () => {
        it("deve cobrar preco especifico dependendo do procedimento", () => {
            let consulta = new Consulta(alan, ["procedimento-comum", "raio-x", "procedimento-comum2", "gesso"], false, false);

            expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
        });
    });
});