import Skeleton from "react-loading-skeleton"

export const SkeletonCard = () => {
  return (
    <div className="block mb-3 max-w-7xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-black dark:border-gray-700 dark:hover:bg-gray-800">
      <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ <Skeleton /> }</h5>
      <p className="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400">{ <Skeleton count={3} /> }</p>
      <div className="flex justify-between">
        <span className="text-sm font-medium dark:text-gray-200 bg-sky-850 py-1 px-3 rounded-md">{ <Skeleton width="70px" /> }</span>
      </div>
    </div>
  )
}
