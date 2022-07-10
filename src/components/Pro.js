import React from 'react'

export default function Pro({ data }) {
  return (
    <div className='flex justify-center text-left mb-12'>
        <div className='flex flex-col sm:flex-row  bg-gray-100 w-[95%] lg:w-[70%] rounded-2xl justify-between'>
            <div className='flex flex-col w-full sm:w-[55%] p-5 pb-0 justify-between'>
                <div>
                    <h1 className='text-xl font-bold'>{data.name}</h1>
                    <h1 className='text-lg'>{data.exp}</h1>
                </div>
                <p className=''>
                    {data.text}
                </p>
                <div className='flex flex-wrap items-center justify-between mt-4 mb-1'>
                    <div className='flex flex-wrap'>
                        <p className='boten  flex flex-wrap'>
                            {data.tools.map((tool) => <span key={tool} className='m-[1.5px]'>{tool}</span>)}
                        </p>
                    </div>
                    <div className='flex mt-2 md:mt-0'>
                        <a className="hoverEffect" aria-label="External Link" href={data.link.github} target='_blank'>
                            <svg className='w-6' xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                        {data.link.website && (
                            <a className="hoverEffect" aria-label="GitHub" href={data.link.website} target='_blank'>
                                <svg className='w-6' xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className='w-full sm:w-[45%] flex justify-center p-5 pt-0 sm:px-0 sm:p-0 '>
                <img
                    className='object-cover rounded-b-2xl sm:rounded-l-sm sm:rounded-r-2xl border-2 border-gray-100' 
                    src={`${process.env.PUBLIC_URL}/images/${data.image}`}
                    alt="project-image"
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80";
                    }}
                />
            </div>
        </div>
    </div>
  )
}
