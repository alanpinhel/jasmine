describe("MaiorEMenor", () => {
    let algoritmo;

    beforeEach(() => {
        algoritmo = new MaiorEMenor();
    });

    it("deve entender números em ordem não sequencial", () => {
        algoritmo.encontra([5, 15, 7, 9]);
        
        expect(algoritmo.menor).toEqual(5);
        expect(algoritmo.maior).toEqual(15);
    });

    it("deve entender números em ordem decrescente", () => {
        algoritmo.encontra([9, 8, 7, 6]);
        
        expect(algoritmo.menor).toEqual(6);
        expect(algoritmo.maior).toEqual(9);
    });

    it("deve entender números em ordem crescente", () => {
        algoritmo.encontra([6, 7, 8, 9]);
        
        expect(algoritmo.menor).toEqual(6);
        expect(algoritmo.maior).toEqual(9);
    });

    it("deve entender passando apenas um número", () => {
        algoritmo.encontra([6]);
        
        expect(algoritmo.menor).toEqual(6);
        expect(algoritmo.maior).toEqual(6);
    });
});