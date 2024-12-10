import React from "react";
import Language from "../Lenguage/Lenguage";
import style from "./ListLenguagePrograming.module.scss";
import { Link} from "react-router-dom";

function ListLenguagePrograming({LanguageClick}) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    try {
      fetch("http://localhost:3001/api/languages")
        .then((response) => response.json())
        .then((resdata) => setData(resdata));
    } catch (error) {
      console.log(console.error);
    }


  }, []);
  return (
    <div className={style.List}>
      <div className="container">
        <h1 className="text-center mb-5">Языки программирования</h1>
        <div className="inner-list d-flex justify-content-between flex-wrap">
          {data.map((item) => (
            <Link  key={item.id_languages} to='/Theory'>
              <Language
                id={item.id_languages}
                title={item.name}
                description={item.description}
                urlImage={item.photo_url}
                handleLanguageClick={LanguageClick}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListLenguagePrograming;
