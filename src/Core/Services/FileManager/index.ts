import * as fs from 'fs';
import util from 'util';

export namespace my {
    export class FileManager
    {
        static async printFile(filename: string) {
            const readFile = util.promisify(fs.readFile);
            const data = await readFile(filename);
            console.log(data);
        }
    }    
}
