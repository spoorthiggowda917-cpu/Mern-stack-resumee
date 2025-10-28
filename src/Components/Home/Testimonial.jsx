import { BookUser, BookUserIcon } from 'lucide-react'
import React from 'react'
import Title from './Title'

function Testimonial() {
  return (
      <div id='testimonial' className='flex-flex-col items-center my-10 scroll-mt-12'>
            <div className="flex justify-center">
                <div className="flex items-center gap-2 text-sm text-green-600 bg-green-400/10 rounded-full px-6 py-1.5">
                    <BookUserIcon className='size-4.5 stroke-green-600'  />{/*It represents a user with a book*/}
                    <span>Testimonials</span>
                </div>
            </div>
            <Title title="Don't just take our words" description="Hear what our users say about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review." />
    </div>
  )
}

export default Testimonial
