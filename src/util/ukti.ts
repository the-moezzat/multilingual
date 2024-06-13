import { createUktiTranslator } from "ukti";

type Definition = {
  name: undefined;
};
type Languages = "es" | "fr" | "hi";
type LanguagesDefault = "es";

const translator = createUktiTranslator<
  Definition,
  Languages,
  LanguagesDefault
>({
  languageDefault: "es",
  translations: {
    es: {
      name: "Nombre",
    },
    fr: {
      name: "Nom",
    },
  },
});

export const translationsList = [];

const t = translator("hi");

console.log(t.name()); // 'Nombre'
