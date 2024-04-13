import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedCheckedField, setSelectedPost } from '../redux/reducers/postsReducer';
import { initialCheckedFields, initialFormFields } from '../data/initialData';

const TotalPost = ({ data, setData, toPreview, setToPreview }) => {
  const dispatch = useDispatch();
  const totalPosts = useSelector((state) => state.job_posts);
  const { allPosts, checkedFields, selectedPost } = totalPosts;
  return (
    <div className='flex flex-col'>
      <div className={`border-2 border-gray-300 rounded-md p-2 cursor-pointer ${!selectedPost && 'bg-green-300'}`} onClick={() => {
        dispatch(setSelectedPost(null));
        dispatch(setSelectedCheckedField(null));
        setData(initialFormFields);
        setToPreview(initialCheckedFields);
      }} ><p className={`text text-gray-500 text-sm  ${!selectedPost && 'text-white'}`}>New Job Post ....</p>
      </div>
      {
        allPosts.length > 0 && allPosts.map((elem, index) => {
          return (
            <div onClick={() => {
              dispatch(setSelectedPost(elem));
              dispatch(setSelectedCheckedField(checkedFields[index]))
            }} key={elem?.id} className={`border-2 border-gray-300 rounded-md p-2 cursor-pointer ${elem.id == selectedPost?.id ? 'bg-blue-600' : ''}`}>
              <p className={`text text-gray-700 text-sm ${elem.id == selectedPost?.id ? ' text-white font-bold' : ''}`}>{elem.job_title}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default TotalPost