import { types } from "../";

function getBaseUrl() {
    return "https://net-durumi.cyber.go.kr/getMessage.do"
}

function mapTypeToField(query: types): "A" | "H" {
    return query.type === "account" ? "A" : "H";
}


export function getApiUrl(query : types) : string {
   const fieldType = mapTypeToField(query);
   const url = `${getBaseUrl()}?fieldType=${fieldType}&keyword=${encodeURIComponent(query.value)}&accessType=1`

   return url
}