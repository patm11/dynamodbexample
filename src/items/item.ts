/**
 * Item model that we will insert into DynamoDB
 */
export class Item {

    constructor(id: string, date: Date) {
        this.id = id;
        this.date = date;
    }

    id: string;
    date: Date;
}