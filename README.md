# TheCheat API Client (TypeScript)

🚔 경찰청 더치트 API (사기 신고 조회) 요청을 간편하게 사용할 수 있는 TypeScript 기반 모듈입니다.

"본 라이브러리는 공식적으로 지원되지 않으며, 사용 중 발생할 수 있는 모든 문제에 대한 책임은 사용자에게 있습니다. 프로젝트 진행 중 문제가 발생할 경우, 언제든지 개발은 중단될 수 있습니다."

---

## 📦 설치

```bash
npm install
ts-node example.ts
```

---

## ⚙️ 사용법

```ts
import { TheCheatClient } from "./src/request/request";

const client = new TheCheatClient();

const run = async () => {
  // 휴대폰 번호로 조회
  const phoneResult = await client.requestWithPhoneNumber("01012345678");
  console.log("📱 Phone:", phoneResult);

  // 계좌 번호로 조회
  const accountResult = await client.requestWithAccountNumber("12345678901234");
  console.log("🏦 Account:", accountResult);

  // 일반 요청 방식
  const result = await client.request({ type: "account", value: "12345678901234" });
  console.log("📋 General:", result);
};

run();
```


## ✅ 주요 기능

- 휴대폰 번호로 사기 신고 여부 조회
- 계좌 번호로 사기 신고 여부 조회
- `type`에 따라 자동 분기 처리 (`account` | `phone`)
- 타입스크립트 기반의 깔끔한 모듈 구조

