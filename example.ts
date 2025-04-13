import { TheCheatClient } from "./src";

const run = async () => {
    const client = new TheCheatClient();
    const result = await client.request({ type: "phone", value: "01012345678" });
    console.log(result);
    //'최근 3개월 내 3건이상 접수된 민원이 없습니다.'
    // or 
    //'최근 3개월 내 사기민원이 6건이 있습니다.'
};
  
run();