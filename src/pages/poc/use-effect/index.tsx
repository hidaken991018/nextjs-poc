/* eslint-disable react-hooks/rules-of-hooks */
import { NextPage } from "next"
import { useEffect, useState } from "react";

type Content = {
    name: string;
    gender: string;
    age: number;
    email: string;
}

type Order = {
    first:number;
    second: number;
    third: number;
    fourth: number;
}


/**
 * useEffect 
 * @remark
 * 1.非同期処理の順序 
 * 2.第二引数オブジェクト オブジェクトの要素を第二引数に設定した場合その要素の変化時に処理が走る
 */
const useeffect: NextPage = () => {
    const [contents, setContents] = useState<Content[]>([]);
    const initialOrder: Order = {
        first:0,
        second: 0,
        third:0,
        fourth:0,
    }
    const [order, setOrder] = useState<Order>(initialOrder);

    const addName = () => {
        const createContent:Content[] = [
            {name:"太郎", gender: "" , age : 0 , email: ""},
            {name:"花子", gender: "" , age : 0 , email: ""}
        ]
        setContents(createContent);
        setOrder((prevState) => ({...prevState, first: 1}));
    };

    const addGender = () => {
        const contentInstance = contents;
        const remakeContent: Content[] = contentInstance.map((content) => {
            switch(content.name){
                case "太郎":
                    return {
                        ...content,
                        gender: "男"
                    }
                case "花子":
                    return {
                        ...content,
                        gender: "女"
                    }
            }
            return content;
        })
        setTimeout(() => setContents((remakeContent)),100);
        setOrder((prevState) => ({...prevState, second: 1}));  
    };

    const addAge = () => {
        const contentInstance = contents;
        const remakeContent: Content[] = contentInstance.map((content) => {
            switch(content.name){
                case "太郎":
                    return {
                        ...content,
                        age: 20
                    }
                case "花子":
                    return {
                        ...content,
                        age: 18
                    }
            }
            return content;
        })
        setContents(remakeContent);
        setOrder((prevState) => ({...prevState, third: 1}));
    };

    const addEmail = () => {
        const contentInstance = contents;
        const remakeContent: Content[] = contentInstance.map((content) => {
            switch(content.name){
                case "太郎":
                    return {
                        ...content,
                        email: "example"
                    }
                case "花子":
                    return {
                        ...content,
                        email: "sample"
                    }
            }
            return content;
        })
        setContents(remakeContent)
        setOrder((prevState) => ({...prevState, fourth: 1}));
    };

    //name追加
    useEffect(() => {
        addName()
    },[]);

    //gender追加
    useEffect(() => {
        if(order.first === 1){
            addGender()
        }
    },[order.first]);

    //age追加
    useEffect(() => {
        if(order.second === 1){
            addAge()
        }
    },[order.second]);

    //emal追加
    useEffect(() => {
        if(order.third === 1){
            addEmail()
        }
    },[order.third]);

    useEffect(() => {
        console.log(contents);
    },[contents])
    return(<></>)
}

export default useeffect;