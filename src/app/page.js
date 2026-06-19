import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`,
  );

  const topAnime = await response.json();
  // console.log("daftar anime", topAnime);

  return (
    <>
      <section>
        <Header
          title="Paling Populer"
          linkHref="/populer"
          linkTitle="Lihat Semua"
        />
        <AnimeList api={topAnime} />
      </section>

      <section>
        <Header
          title="Paling Terbaru"
          linkTitle="Ikuti Sekarang"
          linkHref="/new"
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
