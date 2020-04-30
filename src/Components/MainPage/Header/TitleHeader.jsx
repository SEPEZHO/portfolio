import React from "react";

import s from "./Header.module.sass";

const TitleHeader = () => {
  return (
    <div className="TitleHeader">
      <div className={s.Name}>
        <h1>VLADISLAV BLIZNYUK</h1>Я веб-программист, самоучка. Пишу сайты для
        себя и копашусь в бэкенде. Приобретаю неимоверное удовольствие, когда все
        начинает работать. В момент решения сложной я получаю
        экстаз на неделю вперед.
      </div>
    </div>
  );
};

export default TitleHeader;
