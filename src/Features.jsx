import React from "react";
import css from "./Features.module.css";

const Features = () => {
  const featureList = [
    {
      emoji: "🌿",
      title: "100% натуральний льон",
      description: "Мʼякий, приємний до тіла та без синтетики.",
    },
    {
      emoji: "💨",
      title: "Дихаючий матеріал",
      description: "Забезпечує комфорт навіть у найспекотніші дні.",
    },
    {
      emoji: "🌍",
      title: "Екологічне виробництво",
      description: "Мінімальний вплив на довкілля.",
    },
  ];

  return (
    <section id="features" className={css.features}>
      <h3>Чому льняні рубашки?</h3>
      <div className={css.grid}>
        {featureList.map((item, index) => (
          <div className={css.card} key={index}>
            <span className={css.emoji}>{item.emoji}</span>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
