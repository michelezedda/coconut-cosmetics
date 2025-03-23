function SkeletonCard() {
  return (
    <>
      <div className="relative bg-white rounded-lg border border-gray-300 mx-2 hover:bg-gray-50">
        <img
          src="/media/empty-img.png"
          className="rounded-t-lg"
          loading="lazy"
        />
        <div className="flex flex-col p-4">
          <div className="mb-3 h-2"></div>
          <div className="bg-neutral-300 rounded-full mb-3 h-2 w-2/4"></div>
          <div className="bg-neutral-300 rounded-full mb-3 h-3 w-3/4"></div>
          <div className="bg-neutral-300 rounded-full mb-3 h-4 w-1/2"></div>
          <div className="bg-neutral-300 rounded-full mb-3 h-2 w-1/2"></div>
        </div>
        <button className="absolute top-43 right-2 rounded-full bg-neutral-300 p-6"></button>
      </div>
    </>
  );
}

export default SkeletonCard;
