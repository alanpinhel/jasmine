class Agendamento {
    para(consulta) {
        let vinteDiasEmMilissegundos = 1000 * 60 * 60 * 24 * 20;
        let umDiaEmMilissegundos = 1000 * 60 * 60 * 24;
        let novaData = new Date(consulta.data.getTime() + vinteDiasEmMilissegundos);
        
        while (novaData.getDay() == 0 || novaData.getDay() == 6)
            novaData = new Date(novaData.getTime() + umDiaEmMilissegundos);

        return new Consulta(consulta.paciente, consulta.procedimentos, consulta.particular, consulta.retorno, novaData);
    }
}