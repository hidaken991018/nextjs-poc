/** @jsxImportSource @emotion/react */
import { NextPage } from "next";
import { ToastContainer, toast, cssTransition, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from "@emotion/react";
import styles from "../styles/toast.module.css"

const ReactToastify: NextPage = () => {
    const Custom = () => (
        <button>テストです</button>
    )

    const content = css`
    height:100px;
    background-color:red;
    `

    

    const Zoom = cssTransition({
        enter: 'zoomIn',
        exit: 'zoomOut',
        appendPosition: false,
        collapse:true,
        collapseDuration: 100, 
      });

      const options : ToastOptions<{}>= {
        // onOpen: props => console.log(props.foo),
        // onClose: props => console.log(props.foo),
        autoClose: false,
        closeButton: false,
        // type: toast.TYPE.INFO,
        hideProgressBar: true,
        position: toast.POSITION.TOP_CENTER,
        // pauseOnHover: true,
        // transition: Zoom,
        // className: styles.content,
        // bodyClassName: styles.body,
        // toastClassName: styles.toast,
        // style:{ backgroundColor: 'red' }
        // progress: 0.2
        // and so on ...
    };
      
    const notify = () => toast('カテゴリ登録完了しました', options);

    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
};
export default ReactToastify;