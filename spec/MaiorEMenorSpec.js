describe("MaiorEMenor", () => {
    it("deve entender números em ordem não sequencial", () => {
        let maiorEMenor = new MaiorEMenor([5, 15, 7, 9]);
        
        expect(maiorEMenor.menor).toEqual(5);
        expect(maiorEMenor.maior).toEqual(15);
    });

    it("deve entender números em ordem decrescente", () => {
        let maiorEMenor = new MaiorEMenor([9, 8, 7, 6]);
        
        expect(maiorEMenor.menor).toEqual(6);
        expect(maiorEMenor.maior).toEqual(9);
    });

    it("deve entender números em ordem crescente", () => {
        let maiorEMenor = new MaiorEMenor([6, 7, 8, 9]);
        
        expect(maiorEMenor.menor).toEqual(6);
        expect(maiorEMenor.maior).toEqual(9);
    });

    it("deve entender passando apenas um número", () => {
        let maiorEMenor = new MaiorEMenor([6]);
        
        expect(maiorEMenor.menor).toEqual(6);
        expect(maiorEMenor.maior).toEqual(6);
    });
});