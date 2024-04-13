import React, { useState } from "react";
import Forms from "../components/Forms";
import TotalPost from "./TotalPost";
import Preview from "../components/Preview";
import { initialCheckedFields, initialFormFields } from "../data/initialData";
import { FaRegCopy } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { handleDeletePost, setAllPosts, setCheckedFields, setSelectedCheckedField, setSelectedPost } from "../redux/reducers/postsReducer";
import { nanoid } from "nanoid";

const HomePage = () => {
  const dispatch = useDispatch();
  const totalPosts = useSelector((state) => state.job_posts);
  const { allPosts, checkedFields, selectedPost } = totalPosts;
  const [data, setData] = useState(initialFormFields);
  const [toPreview, setToPreview] = useState(initialCheckedFields)

  function checkAnyTrue(obj) {
    return Object.values(obj).some(value => value === true);
}

  return (
    <div className="w-full">
      <div className="w-full flex justify-center">
        <div className="w-3/4">
          <h2 className="w-full text-center text-2xl text-red-900 font-extrabold mb-2">
            JOB Post Manager
          </h2>
          <div className="w-full flex">
          <div className="w-1/4">
            <TotalPost data={data} setData={setData} toPreview={toPreview} setToPreview={setToPreview} />
          </div>
          <div className="w-full">
            <div className="w-full border-2 border-gray-300 rounded-lg p-4">
              <Forms data={data} setData={setData} toPreview={toPreview} setToPreview={setToPreview} />
            </div>
          </div>
          <div className="w-1/4 flex flex-col">
            {selectedPost && <button onClick={async() => {
              dispatch(handleDeletePost(selectedPost));
              setData(initialFormFields);
              setToPreview(initialCheckedFields);
            }} type="button" className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg p-2.5 text-center inline-flex items-center me-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500 w-10" title="Delete">
              <RiDeleteBin5Line />
            </button>}
            {selectedPost && <button onClick={async() => {
              // await dispatch(setAllPosts(data));
              // await dispatch(setCheckedFields(toPreview));
              await dispatch(setSelectedPost(null));
              await dispatch(setSelectedCheckedField(null));
              setData({ ...data, id: nanoid() });
              setToPreview({ ...toPreview, id: nanoid() });
              alert('A duplicate copy of your job post is created.')
            }} type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 w-10" title="Duplicate">
              <FaRegCopy />
            </button>}
          </div>
          </div>
        </div>
        {checkAnyTrue(toPreview) && <div className="w-2/4">
        <h2 className="w-full text-center font-[cursive] text-2xl text-teal-900 font-extrabold mb-2">
          Live Preview
        </h2>
          <div className="w-full border-2 border-gray-300 rounded-lg p-4">
          <Preview data={data} setData={setData} toPreview={toPreview} setToPreview={setToPreview} />
          </div>
        </div>}
      </div>
    </div>
  );
};

export default HomePage;
