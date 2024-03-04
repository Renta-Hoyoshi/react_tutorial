import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

// コンポーネントは大文字始まり
export const App = () => {
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState();
  const onClickCountUp = () => {
    // setNum(num + 1);
    // setNum(num + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };
  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  }
  return (
    // React.Fragment タグで全体囲まなくてもエラーにならない
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>(^^)/</p>}
    </>
  )
};