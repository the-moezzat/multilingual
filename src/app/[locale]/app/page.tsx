export default function Page({
  params: { local },
}: {
  params: { local: string };
}) {
  console.log(local);
  return <div>{local}</div>;
}
