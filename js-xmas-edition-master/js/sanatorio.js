
let respuesta = {"censo":{"resumen":{"P.Baja - Guardia":{"TotalCamas":17,"os":{"PRESTADOR 3.":{"Plan PRESTADOR 2":6},"PRESTADOR 1":{"MONOTRIB FAM":2},"PRESTADOR 4":{"AUTORIZADO":1}},"TotalPacInt":9,"C":3,"G":5,"I":1},"P.Baja - Guardia Pediatria":{"TotalCamas":11,"os":{"PRESTADOR 3.":{"Plan PRESTADOR 2":9},"PRESTADOR 1":{"MONOTRIB FAM":2}},"TotalPacInt":11,"C":5,"G":6},"Piso 1 - Internacion Clinico-Quirurgica":{"TotalCamas":14,"os":{"PRESTADOR 1":{"MONOTRIB FAM":3},"PRESTADOR 3.":{"Plan PRESTADOR 2":8,"Interior (Obl)":1}},"TotalPacInt":12,"G":10,"C":2},"Piso 1 - Internaci\u00f3n Quir\u00fargica":{"TotalCamas":16,"os":{"PRESTADOR 1":{"MONOTRIB TIT":1},"PRESTADOR 3.":{"Plan PRESTADOR 2":7,"Interior (Obl)":2},"[Otros]":{"":1}},"TotalPacInt":11,"G":6,"C":2,"I":2,"":1},"Piso 1 - Nursery":{"TotalCamas":5,"os":{"PRESTADOR 3.":{"Plan PRESTADOR 2":5}},"TotalPacInt":5,"C":4,"":1},"Piso 1 - Unidad Cuidados Intensivos Neonatales":{"TotalCamas":32,"os":{"PRESTADOR 3.":{"Plan PRESTADOR 2":15},"PRESTADOR 1":{"MONOTRIB TIT":1}},"TotalPacInt":16,"G":5,"C":10,"":1},"Piso 2 - Hemodinamia":{"TotalCamas":2,"os":{"PRESTADOR 3.":{"Plan PRESTADOR 2":1}},"TotalPacInt":1,"G":1},"Piso 3 - Pediatria Terapia Intermedia":{"TotalCamas":15,"os":{"PRESTADOR 3.":{"Plan PRESTADOR 2":10,"Interior (Obl)":1},"PRESTADOR 1":{"MONOTRIB FAM":1}},"TotalPacInt":12,"G":9,"C":2,"I":1},"Piso 3 - Unidad Cuidados Intensivos Pediatricos":{"TotalCamas":16,"os":{"PRESTADOR 3.":{"Plan PRESTADOR 2":15},"[Otros]":{"":1}},"TotalPacInt":16,"G":12,"":1,"C":3},"Piso 4 - Internacion Clinico-Quirurgica":{"TotalCamas":16,"os":{"PRESTADOR 1":{"":1,"PERS DOMEST TIT":1,"MONOTRIB FAM":1,"Adherente Tit":1,"MONOTRIB TIT":4},"PRESTADOR 3.":{"Plan PRESTADOR 2":5}},"TotalPacInt":13,"G":8,"C":4,"I":1},"Piso 4 - Unidad Coronaria":{"TotalCamas":8,"os":{"PRESTADOR 3.":{"Plan PRESTADOR 2":3},"PRESTADOR 1":{"PERS DOMEST TIT":1}},"TotalPacInt":4,"I":1,"G":3},"Piso 4 - Unidad Cuidados Intensivos Adultos":{"TotalCamas":16,"os":{"PRESTADOR 1":{"MONOTRIB TIT":2,"MONOTRIB FAM":1},"PRESTADOR 3.":{"Plan PRESTADOR 2":5}},"TotalPacInt":8,"G":6,"C":1,"I":1},"Piso 5 - Guardia Ginecologia":{"TotalCamas":4,"os":{"PRESTADOR 3.":{"Plan PRESTADOR 2":1}},"TotalPacInt":1,"G":1},"Piso 5 - Internacion Gineco Obstetrica":{"TotalCamas":28,"os":{"PRESTADOR 3.":{"Plan PRESTADOR 2":22,"Interior (Obl)":1},"PRESTADOR 1":{"Adherente Fam":1,"MONOTRIB TIT":1,"PERS DOMEST TIT":1},"[Otros]":{"":1}},"TotalPacInt":27,"G":20,"C":5,"I":1,"":1},"Piso 6 - Internacion Clinico-Quirurgica":{"TotalCamas":26,"os":{"PRESTADOR 3.":{"Plan PRESTADOR 2":11,"Interior (Obl)":6},"PRESTADOR 1":{"MONOTRIB TIT":2,"MONOTRIB FAM":1,"PERS DOMEST TIT":1,"":2}},"TotalPacInt":23,"G":13,"I":6,"C":4},"Piso 7 - Pediatria Clinico-Quirurgico":{"TotalCamas":28,"os":{"PRESTADOR 3.":{"Plan PRESTADOR 2":15,"Interior (Obl)":1},"[Otros]":{"":1},"PRESTADOR 1":{"":1,"MONOTRIB FAM":2,"MONOTRIB TIT":4}},"TotalPacInt":24,"G":19,"":1,"C":3,"I":1}},"total":{"TotalCamas":254,"os":{"PRESTADOR 3.":{"Plan PRESTADOR 2":138,"Interior (Obl)":12},"PRESTADOR 1":{"MONOTRIB FAM":13,"MONOTRIB TIT":15,"":4,"PERS DOMEST TIT":4,"Adherente Tit":1,"Adherente Fam":1},"PRESTADOR 4":{"AUTORIZADO":1},"[Otros]":{"":4}},"TotalPacInt":193,"C":48,"G":124,"I":15}}};

console.table(respuesta.censo.total.TotalCamas);
console.table(respuesta.censo.resumen);


