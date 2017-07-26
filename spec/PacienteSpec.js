describe("Paciente", () => {
    let alan;
    
    beforeEach(() => {
        alan = new PacienteBuilder().constroi();
    });

    it("deve calcular o imc", () => {
        expect(alan.imc()).toEqual(20.281233098972418);
    });

    it("deve calcular os batimentos cardíacos", () => {
        expect(alan.batimentos()).toEqual(925056000);
    });
});