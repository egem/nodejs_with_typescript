export class LogManager
{
    static log(msg: string): void {
        const now = new Date();
        console.log(now.toString(), msg);
    }
};