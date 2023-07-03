import useSWR from "swr";
//import ArtPieces from "../components/ArtPieces";
import Image from "next/image";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  console.log(data);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <ul>
        {data.map(({ artist, imageSource, name }) => (
          <li key={name}>
            <h1>{name}</h1>
            <br />
            <p>
              Artist: <h2> {artist}</h2>
            </p>

            <br />
            <p>Image:</p>
            <Image src={imageSource} alt={name} width={140} height={230} />
          </li>
        ))}
      </ul>

      {/* <ArtPieces /> */}
    </div>
  );
}
