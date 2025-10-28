import React from 'react'

function Title({ title, description }) {
    return (
        <div className='text-center mt-6 text-slate-700'>
            <h2 className='text-3xl sm:text-4xl font-medium'>{title}</h2>
            <p className='max-w-2xl mt-4 text-slate-500 mx-auto text-left md:text-center'>{description}</p>

        </div>
    )
}

export default Title
