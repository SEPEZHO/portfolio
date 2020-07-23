import React from "react";

import s from "./Header.module.sass";

const TitleHeader = () => {
  return (
    <div className={s.TitleHeader}>
      <div className={s.Name}>
        <h1>VLADISLAV BLIZNYUK</h1>Я веб-программист, самоучка. Пишу код
        и копашусь в бэкенде. Приобретаю неимоверное удовольствие, когда все
        начинает работать. Иногда занимаюсь хардвером (ардуинки). Попутно снимая весь процесс в вк-стори или на ютуб.
      </div>
    </div>
  );
};

export default TitleHeader;
