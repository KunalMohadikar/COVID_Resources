import { DateHelper } from "./datehelper";

export class Users
{
    created_at: string;
    full_text:string;
    phoneNo: Array<string>;
    timeDiffSeconds: number;
    timeDiffMins: number;
    dateTime: string;


    constructor(created_at: string, full_text: string, phoneNo: Array<string>)
    {
        this.created_at = created_at;
        this.full_text = full_text;
        this.phoneNo = phoneNo;
        let created1 = created_at;
        let created1Date = new Date(created1.replace("+0000 ", "") + " UTC");
        let currentDate = new Date();
        const diffTime = Math.abs(currentDate.getTime() - created1Date.getTime());
        this.timeDiffSeconds = diffTime;
        this.timeDiffMins = Math.ceil(diffTime/(1000*60));
        let formatted = "";
        let dateHelper = new DateHelper();
        if(this.timeDiffMins > 1339){
            const monthName = dateHelper.months[created1Date.getMonth()];
            const year = created1Date.getFullYear();
            const date = created1Date.getDate();
            formatted = `${date} ${monthName} ${year}`;
        }
        else if(this.timeDiffMins > 59){
            const hours = Math.floor(this.timeDiffMins/60);
            const mins = this.timeDiffMins%60;
            formatted = `${hours} hrs, ${mins} mins ago`;

        }
        else{
            formatted = this.timeDiffMins.toString() + " mins ago";
        }
        this.dateTime = formatted;
    }


}