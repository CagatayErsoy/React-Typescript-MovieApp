import React, { ReactNode } from "react";
import styles from "./modal.module.css";
interface ModalType {
  isOpen: boolean;
  toggle: () => void;
  movieDetail: any;
}

const modal = (props: ModalType) => {
  let imgUrl = `/heroImages/${props.movieDetail}.jpeg`;
  let defaulImgUrl = `/Images/defaultImage.jpeg`;
  function addDefaultSrc(ev: any) {
    ev.target.src = defaulImgUrl;
  }
  return (
    <>
      {props.isOpen && (
        <div className={styles.modalOverlay} onClick={props.toggle}>
          <div className={styles.modalBox}>
            {/* <h2>{props.movieDetail.title}</h2>
            <img
              className={styles.moviePoster}
              src={imgUrl}
              onError={addDefaultSrc}
              alt={props.movieDetail.title}
            />
            <p>{props.movieDetail.description}</p> */}
          </div>
        </div>
      )}
    </>
  );
};

export default modal;
