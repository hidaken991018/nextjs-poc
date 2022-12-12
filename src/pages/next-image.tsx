import { NextPage } from "next";
import Image from "next/image";


/**
 * next/imageのPOC
 * @remark
 * 1.外部画像の表示
 */
const NextImg : NextPage = () => {
    return(<>
    <h1>next/image 外部画像取得に関して</h1>
    <h2>外部画像の取得①</h2>
    <Image src={"https://placehold.jp/32/003060/e0e0e0/300x200.png?text=Title"} alt={""} width={"140"} height={"140"}></Image>
    <img src="https://placehold.jp/32/003060/e0e0e0/300x200.png?text=Title" alt="" />
    <br></br>
    <Image src={"https://storage.googleapis.com/nextjs-arbitrary-image-path/wanchan.jpg"} alt={""} width={"140"} height={"140"}></Image>
    <img src="https://storage.googleapis.com/nextjs-arbitrary-image-path/wanchan.jpg" alt="" />
    <h2>外部画像の取得②</h2>
    <p>第2ドメイン</p>
    <Image src={"https://example.com/sample.jpg"} alt={""} width={"140"} height={"140"}></Image>
    <img src="https://example.com/sample.jpg" alt="" />
    <p>第3ドメイン</p>
    <Image src={"https://third.example.com/sample.jpg"} alt={""} width={"140"} height={"140"}></Image>
    <img src="https://example.com/sample.jpg" alt="" />
    <p>第4ドメイン</p>
    <Image src={"https://forth.third.example.com/sample.jpg"} alt={""} width={"140"} height={"140"}></Image>
    <img src="https://example.com/sample.jpg" alt="" />
    <p>第5ドメイン</p>
    <Image src={"https://fifth.forth.third.example.com/sample.jpg"} alt={""} width={"140"} height={"140"}></Image>
    <img src="https://example.com/sample.jpg" alt="" />
    <p>ハイフン付き第3</p>
    <Image src={"https://def-sample.sample.com/sample.jpg"} alt={""} width={"140"} height={"140"}></Image>
    <img src="https://def-sample.sample.com/sample.jpg" alt="" />
    <p>ハイフン付き第4</p>
    <Image src={"https://def-sample.sample.sample.sample.com/sample.jpg"} alt={""} width={"140"} height={"140"}></Image>
    <img src="https://def-sample.sample.com/sample.jpg" alt="" />
    <p>ハイフン付き第4</p>
    <Image src={"https://def-sample.sample.sample.sample.sample.com/sample.jpg"} alt={""} width={"140"} height={"140"}></Image>
    <img src="https://def-sample.sample.com/sample.jpg" alt="" />
    </>)
}
export default NextImg;