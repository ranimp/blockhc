import Image from 'next/image';

const Search = () => (
  <div className="flex justify-center items-center container mx-auto">
    <div className="flex gap-4 border-2 border-slate-300 w-3/4 p-3 rounded-md">
      <figure>
        <Image src="/icons/search.svg" alt="search" width={24} height={24} />
      </figure>
      <input type="text" placeholder="Pencarian" className="w-full focus:outline-none" />
    </div>
  </div>
);

export default Search;
