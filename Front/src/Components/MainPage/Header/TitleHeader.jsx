import React from "react";

import s from "./Header.module.sass";

class TitleHeader extends React.Component {
  langSelector = (ru, eng) => {
    if (this.props.language){
      return ru
    }else{
      return eng
    }
  }
  render() {
    return (
      <div className={s.TitleHeader}>
          <div className={s.Name}>
          <h1>VLADISLAV BLIZNYUK</h1>
          {
            this.langSelector(
              <p>
                Я фронтендер, самоучка. Пишу качественный фронт и копашусь в бэкенде.
                Приобретаю неимоверное удовольствие, когда все начинает работать. Иногда занимаюсь
                хардвером (ардуинки). Попутно снимая весь процесс в вк стори или на ютуб. Также начал вести заметки в телеграм канале.
                <br />
                <br />
                П.С. Этот сайт - мое портфолио, с уймой технических терминов. О себе простым языком я рассказал <a href="https://sepezho.com">здесь</a>.
              </p>,
              <p>
                I'm a self-taught frontend developer. I like writing good frontend code and doing some backend stuff as well.
                I get so much pleasure when things start working properly after hours and hours of debugging.
                Sometimes I manage to work with a hardware (arduino) recording all the process for YouTube or VK stories.
                I also write the notes in my Telegram Channel.
                <br />
                <br />
                P.S This is my portfolio site with a bunch of technical terms. About me in plain language you can read <a href="https://sepezho.com">here</a>.
              </p>
            )
          }
        </div>
      </div>
    );
  }
};

export default TitleHeader;
