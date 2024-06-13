import { UktiLanguages } from "ukti";
import { translator } from "./_translations/content";

export default function Page({
  params: { locale },
}: {
  params: { locale: UktiLanguages };
}) {
  // const language = local;
  const { friend, description, title } = translator(locale);

  console.log(friend()); // 'Buddy'
  console.log(locale);
  return <div>{title()}</div>;
}
