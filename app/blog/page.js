

import BlogArticlesFilter from '../components/bloghome/BlogArticlesFilter'
import BlogFeature from '../components/bloghome/BlogFeature'

export default function Blog() {

  return (
    <div>
      <div className='mx-auto max-w-[100rem] px-3 py-6 lg:px-8  space-y-2'>
       
        <div className='hidden sm:block'>
          <BlogFeature/>
        </div>
        
        <BlogArticlesFilter />
      </div>
    </div>
  )
}
