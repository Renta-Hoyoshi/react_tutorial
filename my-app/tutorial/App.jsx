import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

// コンポーネントは大文字始まり
export const App = () => {
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(false);
  const onClickCountUp = () => {
    // setNum(num + 1);
    // setNum(num + 1);
    setNum((prev) => prev + 1);
  };
  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };
  
  // 第二引数に変更があった場合にのみuseEffect内を通る
  useEffect(() => {
    console.log("--useEffect--");
    if (num > 0) {
      if (num % 3 === 0) {
        isShowFace || setIsShowFace(true);
      } else {
        isShowFace && setIsShowFace(false);
      };
    }
  }, [num]);

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