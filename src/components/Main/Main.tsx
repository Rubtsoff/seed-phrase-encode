import React, { useEffect, useState } from "react";

import styles from "./styles.scss";

enum ACTION {
  PLUS = "PLUS",
  MULTIPLY = "MULTIPLY",
}

const Main = (): JSX.Element => {
  const [phrase, setPhrase] = useState("");
  const [resultObject, setResultObject] = useState({});
  const [resultPhrase, setResultPhrase] = useState("");

  const [actionForIndexOfWord, setActionForIndexOfWord] = useState(ACTION.PLUS);
  const [actionForIndexOfLetter, setActionForIndexOfLetter] = useState(ACTION.PLUS);

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

  const onDecipher = () => {
    const splitPhrase = phrase.split("\n");
    const obj = {};
    const decipherPhrase = [];
    splitPhrase.forEach(item => {
      const [letter, positions] = item.split(":").map(item => item.trim()); // ["a", "1, 2; 1, 3"]
      const positionsArray = positions?.split(";").map(item => item.trim()); // ["1, 2", "1, 3"]
      positionsArray?.forEach(item => {
        const positionsNumbers = item.split(" ");
        if (positionsNumbers[0] && positionsNumbers[1]) {
          const f = +positionsNumbers[0] - 1;
          const s = +positionsNumbers[1] - 1;
          if (!decipherPhrase[f]) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            decipherPhrase[f] = [];
          }
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          decipherPhrase[f][s] = letter;
        }
      })
    })

    let result = "";
    decipherPhrase.forEach(item => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      result += item.join("");
      result += " ";
    })
    setResultPhrase(result);
  }

  useEffect(() => {
    let resultString = "";
    for (const [key, value] of Object.entries(resultObject)) {
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
      {/*Порядковый номер слова <button>умножить</button> или <button>прибавить</button> к числу <input type="text"/>*/}
      {/*Порядковый номер буквы в слове <button>умножить</button> или <button>прибавить</button> к числу <input type="text"/>*/}
      <p>Введите фразу:</p>
      <textarea
        className={styles["main-textarea"]}
        value={phrase}
        onChange={onTextareaChange}
      />
      <button
        onClick={onGenerate}
        className={styles["generate-btn"]}
      >
        Сгенерировать
      </button>

      <button
        onClick={onDecipher}
        className={styles["generate-btn"]}
      >
        Расшифровать
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
