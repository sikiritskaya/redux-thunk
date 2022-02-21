import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import postData from '../../api/postData'
import { addPost } from '../../store/actions/addPostAction'
import { createPost, deletePost } from '../../store/store'
import Preloader from '../commonComponents/Preloader'
import ModalNewPost from './NewPost'
import Posts from './Posts'

const PostsContainer = () => {
  //const value = useContext(Context);
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)
  const [isModalActive, setIsModalActive] = useState(false)

  /* const onSubmit = (values) => {
    postData(values)
      .then(() => setIsModalActive(false))
      .then((values) => dispatch(createPost(values)));
  }; */
  const onSubmit = async (values) => {
    console.log(posts)
    await dispatch(addPost(values))
    console.log(posts)
    await setIsModalActive(false)
  }
  const handleDelete = (id) => {
    dispatch(deletePost(id))
  }

  if (!posts) {
    return <Preloader />
  }

  return (
    <section>
      <button onClick={() => setIsModalActive(true)}>Create new post</button>
      {isModalActive && (
        <ModalNewPost onSubmit={onSubmit} setIsModalActive={setIsModalActive} />
      )}
      <Posts posts={posts} handleDelete={handleDelete} />
    </section>
  )
}

export default PostsContainer
