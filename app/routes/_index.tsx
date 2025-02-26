import type { Route } from "./+types/home"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Soar: Front-End Task" },
    { name: "description", content: "Front-End Developer Assessment Task" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return Promise.resolve({});
}

export default function Overview({ loaderData }: Route.ComponentProps) {
  return <></>;
}
