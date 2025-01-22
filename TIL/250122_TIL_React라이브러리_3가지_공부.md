# 250122 TIL

## REACT 라이브러리 3가지 공부(AOS, Tippy.js, Swiper.js)

---

REACT 공부 시작 전, 강의에서 추천해주는 3가지 라이브러리에 대한 정리를 해보려고 한다. 

### 1\. AOS (Animate On Scroll)

- 스크롤할 때 요소들을 애니메이션화하는 라이브러리
- 페이지 스크롤 시 부드러운 등장 효과를 만들 수 있다

**주요 특징**

- 사용하기 쉬운 데이터 속성 기반 설정
- 다양한 애니메이션 효과 제공 (fade, slide, flip 등)
- 모바일 친화적
- 성능 최적화

**사용 예시**

```
<div data-aos="fade-up">
  스크롤하면 위로 페이드인 됩니다
</div>
```

**설치**

- npm

```
npm install aos --save
```

- CDN

```
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
```

---

### 2\. Tippy.js

- 툴팁을 쉽게 구현할 수 있는 라이브러리
- Popper.js 기반으로 만들어짐

**주요 특징**

- 다양한 툴팁 스타일링 옵션
- 애니메이션 효과
- 반응형 위치 조정
- 접근성 지원
- 커스텀 템플릿 지원

**사용 예시**

```
tippy('#myButton', {
  content: '이것은 툴팁입니다!',
  placement: 'top',
  animation: 'fade'
});
```

**설치**

- npm

```
npm i tippy.js
```

- CDN

```
<!-- Development -->
<script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js"></script>
<script src="https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js"></script>

<!-- Production -->
<script src="https://unpkg.com/@popperjs/core@2"></script>
<script src="https://unpkg.com/tippy.js@6"></script>
```

---

### 3\. Swiper.js

- 모던 모바일 터치 슬라이더 라이브러리
- 가장 많이 사용되는 슬라이더 라이브러리 중 하나

**주요 특징**

- 하드웨어 가속 전환
- 다양한 효과 (페이드, 큐브, 카드 등)
- 반응형 지원
- 무한 루프 옵션
- 자동 재생 기능
- 페이지네이션과 네비게이션 버튼
- 터치/마우스 드래그 지원

**사용 예시**

```
const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
```

**설치**

- npm

```
$ npm install swiper
```

- CDN

```
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
/>

<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
```
