import Image from "next/image";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <div className="px-5 pt-6">
        <CategoryList />
      </div>

      <div className="px-5 pt-6">
        <Image
          src="/banner-01.png"
          alt="Desconto de até 30% em pizza"
          width={0}
          height={0}
          className="h-auto w-full object-contain"
          sizes="100hw"
          quality={100}
        />
      </div>
    </>
  );
}
