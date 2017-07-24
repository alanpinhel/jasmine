describe("Paciente", () => {
    it("deve calcular o imc", () => {
        let alan = new Paciente("Alan", 22, 60, 1.72);

        expect(alan.imc()).toEqual(20.281233098972418);
    });

    it("deve calcular os batimentos cardíacos", () => {
        let alan = new Paciente("Alan", 22, 60, 1.72);

        expect(alan.batimentos()).toEqual(925056000);
    });
});