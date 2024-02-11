import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
    .option("b", {
        alias: "base",
        describe: "Es la base de la tabla de multiplicar",
        type: "number",
        demandOption: true,
    })
    .option("l", {
        alias: "limit",
        describe: "Es el limite de la tabla de multiplicar",
        type: "number",
        default: 10,
    })
    .option("s",{
        alias: "show",
        describe: "Muestra la tabla de multiplicar",
        type: "boolean",
        default: false
    })
    .option("n", {
        alias: "name",
        describe: "Nombre del archivo",
        type: "string",
        default: "multiplication-table"
    
    })
    .option("o", {
        alias: "output",
        describe: "Directorio de salida",
        type: "string",
        default: "outputs"
    })
    .check(( argv, options) => {

        if(argv.b < 1) throw "La base debe ser mayor a 0";
        

        return true;
    })
    .parseSync();