import React, { ReactNode } from "react";
import styles from "./modal.module.css";
interface ModalType {
  isOpen: boolean;
  toggle: () => void;
  movieDetail: any;
}

const modal = (props: ModalType) => {
  let imgUrl = `/heroImages/${props.movieDetail?.id}.jpeg`;
  let defaulImgUrl = `/Images/defaultImage.jpeg`;
  function addDefaultSrc(ev: any) {
    ev.target.src = defaulImgUrl;
   
  }
 console.log(props.movieDetail)
  return (
    <>
      {(props.isOpen&&props.movieDetail) && (
        <div className={styles.modalOverlay} onClick={props.toggle}>
          <div className={styles.modalBox}>
            <h2>{props.movieDetail.title}</h2>
            <div className={styles.movieHeroImageBox}>
            <img
              className={styles.movieHeroImage}
              src={imgUrl}
              onError={addDefaultSrc}
              alt={props.movieDetail.title}
            />
            </div>
            
            <p>{props.movieDetail.description}</p>
            <p>Release Date: {props.movieDetail.releaseDate}</p>
            <p>Release Year:{props.movieDetail.releaseYear}</p>
            <ul><h5> Top Cast
              </h5>
              {props.movieDetail.topCast.map((cast:any)=>{
               return <li>{cast.name} ({cast.characterName})</li>
              })}</ul>
          </div>
        </div>
      )}
    </>
  );
};

export default modal;
