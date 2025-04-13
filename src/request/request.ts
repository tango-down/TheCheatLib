import axios from "axios";
import { getApiUrl, getHeaders } from ".";
import { ReqData, types } from "..";



export class TheCheatClient {

    /**
     * Thecheat Request

     * @param query - { type: "account" | "phone", value: string }
     * @returns Parsed Request Data
    */

    async request(query: types) {
        const url = getApiUrl(query);
        const headers = getHeaders();
        const res = await axios.post(url, "", { headers });
        const data = res.data.replace(/^data\(|\)$/g, "");
        const parsed : ReqData = JSON.parse(data);
        parsed.message = parsed.message.replace(/<\/?b>/g, "");
        return parsed;
    }

    /**
     * 더치트에 휴대폰 번호로 사기 정보가 있는지 확인 요청 데이터를 보냅니다
     * 
     * Send a request to TheCheat to check if there is any scam information associated with the phone number.
     
     * @param num - 휴대폰 번호 / PhoneNumber
     * @returns Parsed Request Data
    */

    async requestWithPhoneNumber(num : string) {
        const url = getApiUrl({type : "phone" , value : num});
        const headers = getHeaders();
        const res = await axios.post(url, "", { headers });
        const data = res.data.replace(/^data\(|\)$/g, "");
        const parsed : ReqData = JSON.parse(data);
        parsed.message = parsed.message.replace(/<\/?b>/g, "");
        return parsed;
    }

    /**
     * 더치트에 계좌번호로 사기 정보가 있는지 확인 요청 데이터를 보냅니다
     * 
     * Send a request to TheCheat to check if there is any scam information associated with the account number.
     
     * @param num - 계좌번호 / AccountNumber
     * @returns Parsed Request Data
    */

    async reqestWithAccountNumber(num : string) {
        const url = getApiUrl({type : "account" , value : num});
        const headers = getHeaders();
        const res = await axios.post(url, "", { headers });
        const data = res.data.replace(/^data\(|\)$/g, "");
        const parsed : ReqData = JSON.parse(data);
        parsed.message = parsed.message.replace(/<\/?b>/g, "");
        return parsed;
    }
}