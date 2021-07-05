## hook

### `useCallback()`

해당 컴포넌트가 계속 호출이 되어도(props가 바뀐다거나..) useCallback()안에 있는 함수는 동일한 데이터를 쓴다.

### [maker.jsx](./src/components/maker/maker.jsx)

```jsx
// maker.jsx :17
const Maker = ({ FileInput, authService, cardRepository }) => {
  // ...

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);
  // authService라는 props가 변경이 되면 그때 이 함수를 실행한다.
};
```
