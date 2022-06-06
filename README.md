# 📦 useModal

### Install

add the following line into **index.html** body.
```html
<div id="portal-root"></div>
```
Then add the Modal provider to your app.
```jsx
...
import { ModalProvider } from './useModal';
...

root.render(
  <ModalProvider>
    <App/>
  </ModalProvider>
);
```

add **Modal.jsx**, **Modal.css** and **useModal.jsx** to your **src** folder.

### Usage
Import *setModal* from *useModal* then call it with your content as param.


```jsx
import { useModal } from './useModal';

function App() {
  const { setModal } = useModal();
  const openModal = () => {
    setModal(<div>My content</div>);
  };
  return(
    <>
      <button onClick={openModal}>OPEN MODAL</button>
    </>
  ...
```