import {
  type UktiLanguages, // Language code list of ISO 639-1
  type UktiRegions, // Countries code list of ISO 3166-1 alpha-2
  type UktiTranslations, // UktiTranslations<Definition, Languages?, DefaultLocale = 'en', Regions?>
  type UktiTranslation, // UktiTranslation<Definition, Regions?> // UktiTranslationDataPartial<Definition>
  createUktiTranslator,
} from "ukti";

type Definition = {
  friend: undefined;
  title: undefined;
  description: undefined;
};

const translation_ES: UktiTranslation<Definition> = {
  friend: "Amigo",
  title: "Título",
  description: "Descripción",
};

const translation_AR: UktiTranslation<Definition> = {
  friend: "صديق",
  title: "عنوان",
  description: "وصف",
};

const translation_EN: UktiTranslation<Definition> = {
  friend: "Friend",
  title: "Title",
  description: "Description",
};

type LanguageDefault = "en";

const translations: UktiTranslations<
  Definition,
  UktiLanguages,
  LanguageDefault,
  UktiRegions
> = {
  en: translation_EN,
  es: translation_ES,
  ar: translation_AR,
};

export const translator = createUktiTranslator<
  Definition,
  UktiLanguages,
  LanguageDefault,
  UktiRegions
>({
  translations,
});
