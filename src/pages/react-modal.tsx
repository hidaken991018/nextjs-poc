/** @jsxImportSource @emotion/react */
import { NextPage } from "next"
import { useState } from "react";
import Modal, { Styles } from "react-modal";
import { css } from "@emotion/react";

const ReactModal: NextPage = () => {
  const [modalFlag, setModalFlag] = useState<boolean>(false);

  // modalcss
  // TODO Style
  const closeButton = css`
  position: fixed;
  top :0 ;
  right :0;
  
  `
  const modalStyle: Styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    // content: {
    //   position: 'absolute',
    //   top: '40px',
    //   left: '40px',
    //   right: '40px',
    //   bottom: '40px',
    //   border: '1px solid #ccc',
    //   background: '#fff',
    //   overflow: 'auto',
    //   WebkitOverflowScrolling: 'touch',
    //   borderRadius: '4px',
    //   outline: 'none',
    //   padding: '20px'
    // }
  }
  const open = () => {
    setModalFlag(true)
  }
  const close = () => {
    setModalFlag(false)
  }

  return (
    <>
      <button onClick={open}>モーダルオープン</button>
      <Modal
        isOpen={modalFlag}
        style={modalStyle}
        onRequestClose={close}
      >
        <p>モーダル</p>
        <button css={closeButton} onClick={close}>close</button>

      </Modal>
    </>

  )
};
export default ReactModal;