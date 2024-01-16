# super-market

📆 프로젝트 기간: 2024.01.04 ~ 2024.01.16

- 1주차(0104~0107): 프로젝트 기획, 깃 작업, 역할 분담, 마크업
- 2주차(0108~0114): 마크업 피드백 반영, 기능 구현
- 3주차(0115~0116): 기능 구현 및 오류 수정, 프로젝트 발표

![main](https://github.com/FRONTENDSCHOOL8/super-market/assets/91606951/2ce74bcb-4349-4463-87c7-10183dc387e0)



배포 URL: [http]()

테스트 계정: id(`sang2973`), pw(`nocat123!`)

### 👥 **Participants**

안녕하세요. 저희는 3명의 집사와 1명의 사람의 Front-end 개발자로 구성된 ‘나만 고양이없어’팀입니다. 멋쟁이 사자처럼 프론트엔드 스쿨 8기 프로젝트 9팀입니다.

| [이상원(상언)](https://github.com/SWLee2973)<img src="https://img.shields.io/badge/Project_Leader-FF5733" /> | [류경혜(ryukyunghye)](https://github.com/ryukyung) <img src="https://img.shields.io/badge/Scrum_Master-blue" /> |          [김종덕(BELLORI)](https://github.com/bellori729)          |          [이슬기나(kina)](https://github.com/roben31380)           |
| :----------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------: | :----------------------------------------------------------------: |
|                      <img src="https://avatars.githubusercontent.com/u/46062634?v=4"/>                       |                        <img src="https://avatars.githubusercontent.com/u/91606951?v=4"/>                        | <img src="https://avatars.githubusercontent.com/u/145115283?v=4"/> | <img src="https://avatars.githubusercontent.com/u/148828856?v=4"/> |

### 기술 및 개발 환경

| FrontEnd | <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/SASS-ce6499?style=flat-square&logo=SASS&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white">                                                                                                                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Server   | <img src="https://img.shields.io/badge/pocketbase-000000?style=flat-square&logo=PocketBase&logoColor=white">                                                                                                                                                                                                                                                                                                                                                                                                       |
| ETC      | <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white"> <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=flat-square&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/Discord-7289da?style=flat-square&logo=Discord&logoColor=white"> <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"> |

💬 CSS 유지보수 편의성을 향상시킨 SASS의 mixin, function, 중첩 등의 사용으로 모듈화하기 좋다고 생각했기 때문에 SASS를 사용하기로 했다.

### 역할 분담

→ [백로그 바로가기](https://github.com/FRONTENDSCHOOL8/super-market/wiki/Backlog)

| 김종덕                                                                                                                                                                                                                                                                                                                                                                                                                | 류경혜                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | 이상원                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 이슬기나                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **💄 UI** <br />- 로그인 페이지 <br />- 회원가입 페이지 <br /> **✨ 기능** <br />- [회원가입] 입력 필드 유효성 검사 <br />- [회원가입] 필수 약관 동의 시 버튼 활성화 <br />- [회원가입] 아이디/이메일 중복 확인 <br />- [회원가입] 유저 생성/관리 및 장바구니 생성/연결 <br />- [마이페이지]회원 탈퇴 <br />- [로그인] 유효성 검사 통과 시 버튼 활성화 <br />- [로그인] 아이디/비밀번호가 서버와 일치해야 로그인 가능 | **💄 UI** <br /> - 메인 페이지 <br /> - 장바구니 페이지 <br />- 특가/혜택 페이지 <br />**🎨 공통 컴포넌트** <br /> - 장바구니 모달 <br /> - 장바구니 버블 텍스트 <br /> - 최근 본 상품 <br /> **✨ 기능** <br /> - [메인] 배너 자동 스와이프 <br /> - [메인] 상품 리스트 수 조절 및 스와이프 <br /> - [메인] 장바구니 상품 추가 및 수량 조절 <br /> - [메인] 장바구니 상품 추가 시 버블 활성화 <br /> - [메인] 로컬 스토리지를 이용한 최근 본 상품 리스트업 <br /> - [메인] 로컬 스토리지를 이용한 일일 광고 팝업 제어 <br /> **🫧 기타** <br /> - 회의록 작성 <br /> - 리드미/위키 작성 <br /> - 개발 환경 세팅 | **💄 UI** <br /> - 헤더/푸터 <br /> - 상품 목록 페이지 <br /> - 주문 완료 페이지 <br /> - 마이 페이지 <br /> **🎨 공통 컴포넌트** <br /> - 로컬스토리지를 이용한 배송지 등록 및 표시 <br /> - 로컬스토리지를 이용한 로그인 사용자 표시 <br /> **✨ 기능** <br /> - [헤더] 스크롤 위치에 따른 헤더의 UI 변경 <br /> - [리스트] 분류 및 정렬 순서 별 상품 보여주기 <br /> - [리스트] 선택한 분류 표시 및 검색된 물품 갯수 보여주기 <br /> - [리스트] 현재 선택한 분류 갯수 표시 및 초기화 <br /> - [리스트] 상품 목록 페이지네이션 <br /> - [리스트] 상품 로드 시 스켈레톤 애니메이션 적용 <br /> - [장바구니] 장바구니의 목록 표시 <br /> - [장바구니] 장바구니의 물품 수량 및 삭제 제어 <br /> - [장바구니] 장바구니의 물품 선택 상태에 따른 가격 및 주문 기능 제어 <br /> - [장바구니] 배송지 표시 및 등록/변경 <br /> - [장바구니] 선택한 물품 주문 및 주문 결과 출력 <br /> **🫧 기타** <br /> - 페이지 배포 테스트 <br /> - 데이터베이스 생성 및 관리 | **💄 UI** <br /> - 디테일페이지 <br /> **✨ 기능** <br /> - [상세] DB로 각각의 상품 데이터를 렌더링 <br /> - [상세] 상품마다 다른 상세설명을 다르게 렌더링 <br /> - [상세] 수량을 조절하여 장바구니에 담기 <br /> - [상세] 페이지 스크롤 시 설명 네비게이션에 하이라이트 <br /> - [상세] 네비게이션에 탭을 누르면 해당 섹션으로 이동 <br /> - [상세] 상품별 문의하기 작성 <br /> - [상세] 상품별로 후기를 최신순으로 게시판형식으로 리스팅 |

### 페이지 별 기능

| 로그인      | 회원가입         |
| :-----------: | :----------------: |
|     ![login](https://github.com/FRONTENDSCHOOL8/super-market/assets/91606951/15d891d1-e02b-4be1-873f-3a2acd046e5c)        |  ![register](https://github.com/FRONTENDSCHOOL8/super-market/assets/91606951/aa38018c-e18e-4c82-9c14-c1a114e13bbe)   |
| 메인        | 장바구니         |
|     ![main](https://github.com/FRONTENDSCHOOL8/super-market/assets/91606951/81f24c13-3739-4643-a33e-d99f695680db)        |        ![cart](https://github.com/FRONTENDSCHOOL8/super-market/assets/91606951/6ab92741-4ac6-4168-ad44-0fe3ef2ee07f)          |
| 상품 리스트 | 상품 상세        |
|      ![list](https://github.com/FRONTENDSCHOOL8/super-market/assets/91606951/7606f0ab-9ebd-4672-b59b-e40ba0de3f7c)       |          ![detail](https://github.com/FRONTENDSCHOOL8/super-market/assets/91606951/f7e73ee5-ca82-40b6-b62b-8b0f0384e49b)   |
| 마이페이지  | 특가/혜택 페이지 |
|       ![mypage](https://github.com/FRONTENDSCHOOL8/super-market/assets/91606951/dc77d510-0ffc-44b7-9a30-1c5cd3823b84)      |       ![benefit](https://github.com/FRONTENDSCHOOL8/super-market/assets/91606951/57b91eeb-a5b6-4b83-87f9-152d0b99b0dd)           |



### 팀 약속

- Github Issue : 프로젝트 작업 개선사항 및 추가 될 기능을 기록하여 작업 일정을 공유합니다.
- Github Wiki : 팀 내에서 공유해야 하는 정보를 기록합니다.
- 데일리스크럼 : 매일 9시 전날 작업 내용과 진행 상황을 공유합니다.
- commit convention : 커밋 메시지는 제목, 브랜치 이름, 본문으로 구성합니다.
  ```bash
  git commit -m "feat(feat/ryu/#1): 메인 페이지 스와이퍼 기능 구현"
  ```
  | feat     | 새로운 기능 추가                               |
  | -------- | ---------------------------------------------- |
  | modify   | 새로운 수정 사항                               |
  | fix      | 버그 수정                                      |
  | docs     | 문서 수정                                      |
  | style    | 들여쓰기, 세미콜론 등을 변경했을 때            |
  | design   | 디자인을 변경했을 때                           |
  | refactor | 코드 리팩토링을 했을 때                        |
  | chore    | 외부 라이브러리 임포트 등의 작업을 완료했을 때 |
- git flow
  깃플로우(git-flow)를 목적대로 사용하기 위해서는 5개의 브랜치(`main`, `hotifx`, `release`, `develop`, `feature`)를 사용해야 하지만, 짧은 개발 일정 상 `main`, `develop`, `feature` 브랜치만 우선적으로 사용했습니다.
  | main | 배포만을 위한 브랜치 |
  | ------- | ------------------------------------------------------------------------ |
  | develop | main 브랜치로 가기 전 각 기능과 유기적으로 돌아가는 개발만을 위한 브랜치 |
  | feature | 기능을 개발하는 브랜치(규칙: feat/성/#이슈번호) ex. feat/ryu/#1 |
