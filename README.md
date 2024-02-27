# Next.js

## 1. Next.js 기본 상식

### 1.1. App Router 채용

- 파일 시스템 라우터

  - /src/app/test 폴더생성 / page.tsx 파일생성

  ```ts
  // app/basic/page.tsx
  import React from "react";

  const page = () => {
    return <div>베이직 페이지</div>;
  };

  export default page;
  ```

  - /src/app/basic 폴더생성 / page.tsx 파일생성

  ```ts
  // app/test/page.tsx
  import React from "react";

  const page = () => {
    return <div>테스트 페이지</div>;
  };

  export default page;
  ```

### 1.2. RSC 가 Next.js 기본 컴포넌트

- React Server Component
- React 18 버전
- 서버에서 만드므로 보안
- 서버에서 만드므로 속도 (API 연동)
- 서버에서 만드므로 캐싱이 기본
- yarn buil 시 압축을 하므로 용량 감소
- use 즉, Hook 사용못함, 이벤트 핸들러 사용 못함.

### 1.3. Client Component 가 Next.js 기본 컴포넌트

- 'use client' 작성하면 Hook 사용, 이벤트 핸들러도 가능
