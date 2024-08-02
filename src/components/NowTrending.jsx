function NowTrending() {
  return (
    <>
      <div className="container">
        <h1 className="flex font-bold text-2xl justify-center items-center">
          now trending
        </h1>
        <div className="grid grid-cols-2 items-center justify-center gap-2">
          <div className="bg-slate-300 p-20">DISPLAY A</div>
          <div className="bg-green-300 p-20">DISPLAY B</div>
          <div className="bg-red-300 p-20">DISPLAY C</div>
          <div className="bg-blue-300 p-20">DISPLAY D</div>
        </div>
      </div>
    </>
  );
}

export default NowTrending;
