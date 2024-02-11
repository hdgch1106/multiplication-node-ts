import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";


interface RunOptions{
    base: number;
    limit: number;  
    show: boolean;
    name: string;
    output: string;
}

export class ServerApp {



    static run({base, limit, show, name, output}: RunOptions){
        console.log("ServerApp running");
        
        const table = new CreateTable().execute({base, limit});
        const wasCreated = new SaveFile()
        .execute({
            fileContent: table,
            fileDestination: output,
            fileName: name,
        });

       if(show) console.log(table);

         if(wasCreated){
              console.log("File saved");
         }
    
    }


}