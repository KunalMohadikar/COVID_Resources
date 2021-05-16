export class Users
{
    created_at: string;
    full_text:string;
    phoneNo: Array<string>;


    constructor(created_at: string, full_text: string, phoneNo: Array<string>)
    {
        this.created_at = created_at;
        this.full_text = full_text;
        this.phoneNo = phoneNo;
    }


}