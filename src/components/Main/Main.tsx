import React, { useEffect, useState } from "react";

import styles from "./styles.scss";

const Main = (): JSX.Element => {
  const [phrase, setPhrase] = useState("");
  const [resultObject, setResultObject] = useState({});
  const [resultPhrase, setResultPhrase] = useState("asd \nasda");

  const onTextareaChange = (e) => {
    setPhrase(e.target.value);
  };

  const onGenerate = () => {
    const result = {};
    const words = phrase.split(" ");

    words.forEach((word, indexOfWord) => {
      const cpy = word.split("");
      cpy.forEach((symbol, indexOfSymbol) => {
        if (typeof result[symbol] === "undefined") {
          result[symbol] = "";
        }

        result[symbol] += `${indexOfWord + 1} ${indexOfSymbol + 1}; `;
      });
    });

    setResultObject(result);
  };

  useEffect(() => {
    let resultString = "";
    for (const [key, value] of Object.entries(resultObject)) {
      console.log(`${key}: ${value}`);
      resultString += `${key}: ${value}\n`;
    }
    setResultPhrase(resultString);
  }, [resultObject]);

  return (
    <div className={styles.holder}>
      <p className={styles["title"]}>
        Закодируйте seed-фразу таким образом, чтобы ее можно было хранить в своих заметках и не бояться, что кошелек
        будет украден
        <br /> Введите каждое слово через пробел и без номерований
      </p>
      <p>Введите фразу:</p>
      <textarea
        className={styles["main-textarea"]}
        onChange={onTextareaChange}
      />
      <button
        onClick={onGenerate}
        className={styles["generate-btn"]}
      >
        Сгенерировать
      </button>
      <textarea
        className={styles["result-textarea"]}
        value={resultPhrase}
        readOnly
      ></textarea>
    </div>
  );
};

export default Main;
