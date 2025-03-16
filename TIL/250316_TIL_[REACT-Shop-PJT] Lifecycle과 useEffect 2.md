# 25-03-16 TIL

## [REACT-Shop-PJT] Lifecycle과 useEffect 2

---
## useEffect에 넣을 수 있는 실행조건

```
useEffect(()=>{ 실행할코드 }, [count])
```

useEffect()의 둘째 파라미터로 \[ \] 를 넣을 수 있는데

변수나 state 같은 것들을 넣을 수 있다

그렇게 하면 **\[ \] 에 있는 변수나 state가 변할 때만 useEffect 안의 코드를 실행**해준다.

그래서 위의 코드는 count라는 변수가 변할 때만 useEffect안의 코드가 실행된다.

(참고) \[ \] 안에 state 여러개 넣을 수 있음

```
useEffect(()=>{ 실행할코드 }, [])
```

아무것도 안넣으면 컴포넌트 mount시 (로드시) 1회 실행하고 영영 실행해주지 않는다.

## clean up function

useEffect 동작하기 전에 특정코드를 실행하고 싶으면

 return ()=>{} 안에 넣을 수 있다.

```
useEffect(()=>{ 
  그 다음 실행됨 
  return ()=>{
    여기있는게 먼저실행됨
  }
}, [count])
```

그럼 useEffect 안에 있는 코드를 실행하기 전에

return ()=>{} 안에 있는 코드를 실행해준다.

참고로 저걸 clean up function 이라고 부른다.

왜 저런 기능이 있냐면

[##_Image|kage@347Ib/btsMLut6TE2/B6OAwUkEonSH1KtFsK18NK/img.jpg|CDM|1.3|{"originWidth":800,"originHeight":571,"style":"alignCenter","width":362,"height":258}_##]

복잡하고 어려운 숙제할 때

책상을 싹 치우고 하면 잘되는 것처럼

useEffect안에 있는 코드를 실행할 때도

싹 치우고 깔끔한 마음으로 실행하는게 좋을 때가 있다.

예를들면 숙제로 했던 setTimeout 타이머인데

setTimeout() 쓸 때마다 브라우저 안에 타이머가 하나 생긴다.

근데 useEffect 안에 썼기 때문에 컴포넌트가 mount 될 때마다 실행된다.

그럼 잘못 코드를 짜면 타이머가 100개 1000개가 생길 수도 있다

나중에 그런 버그를 방지하고 싶으면 useEffect에서 타이머 만들기 전에 기존 타이머를 싹 제거하라고 코드를 짜면 되는데

그런거 짤 때 return ()=>{} 안에 짜면 된다.

```
useEffect(()=>{ 
  let a = setTimeout(()=>{ setAlert(false) }, 2000)
  return ()=>{
    clearTimeout(a)
  }
}, [])
```

타이머 제거하고 싶으면 clearTimeout(타이머)

이렇게 코드를 짜면 된다.

타이머 장착하기 전에 기존 타이머가 있으면 제거를 해준다.

(참고1) clean up function에는 타이머제거, socket 연결요청제거, ajax요청 중단 이런 코드를 많이 작성합니다.

(참고2) 컴포넌트 unmount 시에도 clean up function 안에 있던게 1회 실행됩니다.

## 정리시간

1\. 재렌더링마다 코드 실행

```
useEffect(()=>{ 실행할코드 })
```

2\. 컴포넌트 mount시 (로드시) 1회만 실행

```
useEffect(()=>{ 실행할코드 }, [])
```

3\. useEffect 안의 코드 실행 전에 항상 실행

```
useEffect(()=>{ 
  return ()=>{
    실행할코드
  }
})
```

4\. 컴포넌트 unmount시 1회 실행

```
useEffect(()=>{ 
  return ()=>{
    실행할코드
  }
}, [])
```

5\. state 1이 변경될 때만 실행

```
useEffect(()=>{ 
  실행할코드
}, [state1])
```