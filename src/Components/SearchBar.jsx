
function SearchBar({searchMovie,setSearchMovie,fetchMovieData}) {
    return (
        <div className="main flex justify-center py-5 px-4">
            <input type="text" placeholder="Search" value={searchMovie} onChange={(e)=>setSearchMovie(e.target.value)} className="bg-gray-200  w-[500px]  rounded-l-lg px-2 py-2 outline-none border-gray-500 text-black" />
            <button 
            onClick={fetchMovieData}
            className="bg-zinc-900 px-4  rounded-r-lg text-white shadow-md 
            border-b-2 border-r-2 border-t-2 border-gray-500">Search</button>
        </div>
    )
}

export default SearchBar