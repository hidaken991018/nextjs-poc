import { NextPage } from "next";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../../utils/axiosInstance";
import async from "../async";

type display = {
  token?: string;
  name?: string;
  age?: number;
  best?: string;
  better?: string;
  finally?: string
}

/**
 * 非同期処理の順序を定めたい
 * 
 * @remark - 複数のAPI通信を意図した順序通りに行いたい。reactのuseStateの状態変化による制御では問題があるので別の手段を探ってみた。
 * 
 * @problem -  状態変数制御による問題、下記のどちらかまたは両方が引きおこる
 * 　 1. 数個以上のの非同期処理を行う際はその分の状態変数が必要になる。→TODO本質的な問題を記載
 *    2. useEffectの第二引数に状態変数を設定することで、不要なタイミングにレンダリングが起きる。
 * 
 * @method - async-awaitによる制御
 * 
 * @example -　下記の処理順序を制御
 *   1.ベース取得
 *   2.個人情報取得・趣味取得（2件並列）
 *   3.最後の一言取得
 *  
 * @reference
 * - https://zenn.dev/lollipop_onl/articles/mistake-promise-all
 * - https://qiita.com/hinako_n/items/e2cf6fd9dc6e9d069901
 */
const ApiOrder: NextPage = () => {

  const [display, setDisplay] = useState<display>({});

  //処理順序1.ベース
  const baseApi = async () => {
    return await (await axiosInstance('/user/token')).data;
  }

  //処理順序2-1.：個人情報取得　※2-1,2-2は並列処理
  const getPersonalName = async () => {
    const personalNameInfo = await (await axiosInstance('/user/personal/name')).data;
    const personalAgeInfo = await (await axiosInstance('/user/personal/age')).data;
    return { ...personalNameInfo, ...personalAgeInfo};
  };

  //処理順序2-2：趣味取得
  const getHobby = async () => {
    const bestHobby = await (await axiosInstance('/user/hobby/best')).data;
    const betterHobby = await (await axiosInstance('/user/hobby/better')).data;
    return {...bestHobby, betterHobby};
  };

  //処理順序3.：最後の一言取得
  const getFinally = async () => {
    return await (await axiosInstance('/user/finally')).data;
  }

  //処理順序を指定
  const concat = async () => {
    const token = await baseApi()
    //下記並列処理
    const data = await Promise.all([
      getPersonalName(),
      getHobby()
    ])
    const finall = await getFinally();
    return await {...token, ...data[0], ...data[1], ...finall}
  }
  const setDisplayInfo = async () => {
    const displayInfo = await concat()
    setDisplay(displayInfo);
  }

  useEffect( () => {
    //下記のようにやりたかったが
    setDisplayInfo()
  }, [])

  useEffect(() => {
    console.log("ディスプレイ", display);
  }, [display])

  return (<>
    <p>トークン：{display.token}</p>
    <p>名前：{display.name}</p>
    <p>年齢：{display.age}</p>
    <p>一番好きなこと：{display.best}</p>
    <p>ちょっと好きなこと：{display.better}</p>
    <p>最後に：{display.finally}</p>
  </>)
}
export default ApiOrder;