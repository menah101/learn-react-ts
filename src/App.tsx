import { env } from 'process';
import { useState, useEffect } from 'react'
import { Directus } from '@directus/sdk'

type Posts = {
  title: string;
  slug: string;
}

type Schema = {
  posts: Posts;
}

const sdk = new Directus<Schema>('https://3feh5eqz.directus.app/');

function App() {
  const [listPosts, setListPosts] = useState<Posts|null>(null)

  useEffect(() => {
    const getPosts = async () => {
      const result = await sdk.items('posts').readByQuery()
      console.log('result', result)
      // setListPosts(result)
    }
    getPosts();
  }, [])

  // console.log('listPosts', listPosts)

  return (
    <div className="App">
      
    </div>
  )
}

export default App
