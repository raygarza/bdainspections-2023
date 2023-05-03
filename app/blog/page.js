import React from 'react'
import BlogArticlesFilter from '../components/bloghome/BlogArticlesFilter'
import BlogFeature from '../components/bloghome/BlogFeature'

export default function Blog() {
  return (
    <div>
      <div className='mx-auto max-w-7xl px-6 py-4 lg:px-8  space-y-2'>
        <div className='hidden sm:block'>
          <BlogFeature/>
        </div>
        
        <BlogArticlesFilter/>
      </div>
    </div>
  )
}
