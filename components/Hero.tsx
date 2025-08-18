import React from "react";

type HeroProps = {
  title: string;
  subtitle: string;
  imageOn?: boolean;
};

export default function Hero({ title, subtitle, imageOn = false }: HeroProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {imageOn && <figure> [画像] </figure>}
    </div>
  );
}
