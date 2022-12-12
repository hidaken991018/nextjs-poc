/** @jsxImportSource @emotion/react */
import { NextPage } from "next"
import { useForm } from "react-hook-form";
import { validationErrorTextStyle } from "../styles/styles";
import { css } from "@emotion/react";

const validation: NextPage = () => {
  const {
    // フィールド登録
    register,
    // 送信受信
    handleSubmit,
    // 値取得
    getValues,
    // エラー登録
    // TODO なぜeslintに怒られる?
    // eslint-disable-next-line react-hooks/rules-of-hooks
    formState: { errors } } = useForm();
  const onSubmit = (data: any)  => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("example")} />
        <input {...register("exampleRequired", {required: true})} />
        {errors.exampleRequired && <span css={validationErrorTextStyle}>入力してください</span>}
        {/* <input type="submit" /> */}
        
        <button type="submit"></button>
      </form>
    </>
  );
}
export default validation