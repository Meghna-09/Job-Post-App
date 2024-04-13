import React, { useEffect, useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import { IoMdArrowDropdown } from "react-icons/io";
import MultiSelect from "./MultiSelect";
import Checkbox from "./Checkbox";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { handleUpdateCheckedFields, handleUpdatePost, setAllPosts, setCheckedFields, setSelectedCheckedField, setSelectedPost } from "../redux/reducers/postsReducer";
import { initialCheckedFields, initialFormFields } from "../data/initialData";

const Forms = ({data, setData, toPreview, setToPreview}) => {
  const dispatch = useDispatch();
  const totalPosts = useSelector((state) => state.job_posts);
  const { allPosts, checkedFields, selectedPost, selectedCheckedField } = totalPosts;
  const handleChange = (e) => {
    const { name, value } = e.target;
    let temp = {...data};
    temp[name] = value;
    setData(temp);
  }

  useEffect(() => {
    if(selectedPost){
       setData(selectedPost);
       setToPreview(selectedCheckedField)
    }else if(allPosts.length == 0 || checkedFields.length == 0){
      setData(initialFormFields);
      setToPreview(initialCheckedFields)
    }
    // else{
    //   setData(initialFormFields);
    //   setToPreview(initialCheckedFields)
    // }
  }, [allPosts, selectedPost, selectedCheckedField, setData, setToPreview]);

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex justify-between items-end">
        <div className="w-2/4 flex gap-4">
          <Checkbox data={toPreview} name="job_title" setData={setToPreview} />
          <Input
            title="Job Title"
            id="job_title"
            name="job_title"
            placeholder="Job Title"
            value={data?.["job_title"]}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex gap-3">
          <label className="block text-gray-500 text-sm font-semibold mb-1">
            Active ?
          </label>
          <label className="inline-flex items-center mb-5 cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={data?.is_active} value={data?.is_active} onChange={(e) => {
              let temp = {...data};
              temp.is_active = e.target.checked;
              setData(temp);
            }} />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
          </label>
        </div>
      </div>
      <div className="w-full flex gap-4">
        <Checkbox data={toPreview} name="introduction" setData={setToPreview} />
        <Textarea
          title="Introduction"
          id="introduction"
          name="introduction"
          rows="2"
          value={data?.["introduction"]}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="w-full flex gap-4">
        <Checkbox data={toPreview} name="roles_responsibilities" setData={setToPreview} />
        <Textarea
          title="Roles & Responsibilities"
          id="roles_responsibilities"
          name="roles_responsibilities"
          rows="3"
          value={data?.["roles_responsibilities"]}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="w-full flex justify-between items-end gap-3">
        <div className="w-2/4 flex gap-4">
          <Checkbox data={toPreview} name="experience" setData={setToPreview} />
          <label className="block text-gray-500 text-sm font-semibold mb-1">
            Experience Range (yrs)
          </label>
        </div>
        <div className="w-3/4 flex justify-center items-center gap-4">
          <div className="relative">
            <select value={data?.["min_exp"]}
              name='min_exp' id='min_exp'
              onChange={(e) => handleChange(e)}
              className="appearance-none border border-gray-200 bg-white rounded-lg px-3 py-2 pr-8">
              {[...Array(41).keys()].map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 bg-gray-200 flex items-center pr-2 pointer-events-none">
              <IoMdArrowDropdown />
            </div>
          </div>
          <div>-</div>
          <div className="relative">
            <select value={data?.["max_exp"]}
              name='max_exp' id='max_exp'
              onChange={(e) => handleChange(e)} className="appearance-none border border-gray-200 bg-white rounded-lg px-3 py-2 pr-8">
              {[...Array(51).keys()].map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 bg-gray-200 flex items-center pr-2 pointer-events-none">
              <IoMdArrowDropdown />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-4">
        <Checkbox data={toPreview} name="qualifications" setData={setToPreview} />
        <Input
          title="Qualifications"
          id="qualifications"
          name="qualifications"
          value={data?.["qualifications"]}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="w-full flex gap-4">
        <Checkbox data={toPreview} name="salary" setData={setToPreview} />
        <Input
          title="Salary Range"
          id="salary"
          name="salary"
          value={data?.["salary"]}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="w-full flex gap-4">
        <Checkbox data={toPreview} name="conclusion" setData={setToPreview} />
        <Textarea
          title="Concluding Statement"
          id="conclusion"
          name="conclusion"
          rows="4"
          value={data?.["conclusion"]}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="w-full flex gap-4">
        <Checkbox data={toPreview} name="company" setData={setToPreview}/>
        <Input
          title="Company"
          id="company"
          name="company"
          value={data?.["company"]}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="w-full flex gap-4">
        <Checkbox data={toPreview} name="job_location" setData={setToPreview} />
        <Input
          title="Job Location"
          id="job_location"
          name="job_location"
          value={data?.["job_location"]}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="w-full flex gap-3">
        <div className="w-full flex gap-4 items-center">
          <Checkbox data={toPreview} name="job_types" setData={setToPreview} />
          <label className="block text-gray-500 text-sm font-semibold mb-1 whitespace-nowrap">
            Job Type
          </label>
          <MultiSelect labels={jobTypes} selected={data} setSelected={setData} name='job_types' />
        </div>
        <div className="w-full flex gap-4 items-center">
          <Checkbox data={toPreview} name="job_labels" setData={setToPreview} />
          <label className="block text-gray-500 text-sm font-semibold mb-1 whitespace-nowrap">
            Job Labels
          </label>
          <MultiSelect labels={jobLabels} multiple selected={data} setSelected={setData} name='job_labels' />
        </div>
      </div>
        <div className="flex justify-end gap-2 mt-5">
          {!selectedPost ? <>
          <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-400 hover:border-blue-700 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={async(e) => {
            await setData(initialFormFields);
            await setToPreview(initialCheckedFields);
          }}>Cancel</button>
          <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={async(e) => {
            await dispatch(setAllPosts(data));
            await dispatch(setCheckedFields(toPreview));
            await setData({...initialFormFields, id: nanoid()});
            await setToPreview({...initialCheckedFields, id: nanoid()});
            alert('Your job post saved successfully!');
          }}>Save</button>
          </> :  <button type="button" className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={async(e) => {
            await dispatch(handleUpdatePost(data));
            await dispatch(handleUpdateCheckedFields(toPreview));
            await setData(initialFormFields);
            await setToPreview(initialCheckedFields);
            await dispatch(setSelectedPost(null));
            await dispatch(setSelectedCheckedField(null));
            alert('Your job post updated successfully!');
          }}>Update Post</button>}
        </div>
    </div>
  );
};

export default Forms;

const jobTypes = ['Full Time', 'Part Time', 'Contract', 'Internship'];
const jobLabels = ['Remote', '5 Day week'];