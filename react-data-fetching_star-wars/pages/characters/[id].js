import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";
//const url = "https://swapi.dev/api/people/1;";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(
    `https://swapi.dev/api/people/${id}`,
    fetcher
  );
  console.log(data);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
