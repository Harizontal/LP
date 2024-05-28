import style from './Lenguage.module.scss'


function Language({id,title, description, urlImage, handleLanguageClick}) {
  return (
    <div className={style.lenguageBox} onClick={() => handleLanguageClick(id, title)}>
      <img src={urlImage} alt="" />
      <div className={style.boxContent}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Language;
