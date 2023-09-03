const SkillsCardSkeleton = () => {
  return (
    <div className="rounded-lg p-3 pt-2 w-full h-44 text-sm shadow dark:border dark:border-neutral-800">
        <div className="animate-pulse">
            {/* <div className="mx-auto h-8 w-32 bg-gray-200 dark:bg-gray-600 rounded mb-2"></div> */}
            <div className="flex flex-row items-center justify-center p-1">
                <div className="w-6 h-6 bg-gray-200 dark:bg-gray-600 rounded mr-1"></div>
                <div className="text-lg bg-gray-200 dark:bg-gray-600 w-24 h-6 rounded"></div>
            </div>
        </div>

        {/* <div className="rounded-lg p-3 pt-2 w-full h-44 text-sm shadow dark:border dark:border-neutral-800">
                <div className="flex flex-row items-center justify-center text-green-500">
                {svg}
                <p className="text-lg text-green-500 p-1">
                    {topic}
                </p>
                </div>
                <ul className="text-md space-y-1 text-center">
                    {skills.map(skill => (
                    <li key={skill} className="">{skill}</li>
                    ))}
                </ul>
            </div> */}

        <ul className="text-md space-y-1">
            <li className="animate-pulse">
                <div className="mx-auto w-40 h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
            </li>
            <li className="animate-pulse">
                <div className="mx-auto w-32 h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
            </li>
            <li className="animate-pulse">
                <div className="mx-auto w-40 h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
            </li>
            <li className="animate-pulse">
                <div className="mx-auto w-32 h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
            </li>
            <li className="animate-pulse">
                <div className="mx-auto w-40 h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
            </li>
            <li className="animate-pulse">
                <div className="mx-auto w-24 h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
            </li>
        </ul>
    </div>
  )
}

export default SkillsCardSkeleton

{/* <div className="rounded-lg p-3 pt-2 w-full h-44 text-sm shadow dark:border dark:border-neutral-800">
    <p className="text-center text-lg text-green-500 p-1">{topic}</p>
    <ul className="text-md space-y-1 text-center">
        {skills.map(skill => (
            <li key={skill} className="">{skill}</li>
        ))}
    </ul>
</div> */}