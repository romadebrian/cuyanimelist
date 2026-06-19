"use client";

import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const serachRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = serachRef.current.value;
    router.push(`/search/${keyword}`);
  };
  return (
    <div className="relative">
      <input
        placeholder="cari anime...."
        className="w-full p-2 rounded"
        ref={serachRef}
      />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlassIcon size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
