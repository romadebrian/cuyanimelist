import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`,
  );

  const seachAnime = await response.json();
  // console.log("daftar anime", topAnime);

  return (
    <>
      <section>
        <Header
          title={`Pencarian untuk ${keyword}....`}
          linkHref="/populer"
          linkTitle="Lihat Semua"
        />
        <AnimeList api={seachAnime} />
      </section>
    </>
  );
};

export default Page;
