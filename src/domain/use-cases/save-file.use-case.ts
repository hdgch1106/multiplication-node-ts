import fs from "fs";

export interface SaveFileUseCase {
    execute: (options: Options) => boolean;

}

export interface Options {
    fileContent: string;
    fileDestination?: string;
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase {

    constructor() { }

    execute({
        fileContent,
        fileDestination: destination = "outputs",
        fileName = "table"
    }: Options): boolean {

        try {
            fs.mkdirSync(destination, { recursive: true });
            fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent);

            //console.log("File saved");
            return true;
        } catch (error) {
            console.log(error);

            return false;
        }



    }
}