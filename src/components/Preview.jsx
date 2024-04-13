import React from "react";

const Preview = ({ data, setData, toPreview, setToPreview }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex justify-between">
        {toPreview?.job_title && (
          <h3 className="text text-3xl font-bold">{data?.job_title}</h3>
        )}
        <div className="flex gap-2">
          {toPreview?.job_labels &&
            data?.job_labels.length > 0 &&
            data?.job_labels.map((elem) => {
              return (
                <div className="rounded-3xl bg-blue-200 p-2 text-sm">
                  {elem?.label}
                </div>
              );
            })}
        </div>
      </div>
      {toPreview?.introduction && (
        <div className="w-full">
          <h3 className="text text-lg font-semibold text-gray-700">
            Introduction:{" "}
            <span className="text-gray-600 text-sm font-light">
              {data?.introduction}
            </span>
          </h3>
        </div>
      )}

      {toPreview?.roles_responsibilities && (
        <div className="w-full">
          <h3 className="text text-lg font-semibold text-gray-700">
            Roles & Responsibilities
          </h3>
          <p className="text-gray-600 text-sm font-light">
            {data?.roles_responsibilities}
          </p>
        </div>
      )}

      {toPreview?.experience && (
        <div className="w-full">
          <h3 className="text text-lg font-semibold text-gray-700">
            Preffered Experience:{" "}
            <span className="text-gray-600 text-sm font-light">
              {data?.min_exp} to {data?.max_exp} yrs
            </span>
          </h3>
        </div>
      )}

      {toPreview?.qualifications && (
        <div className="w-full">
          <h3 className="text text-lg font-semibold text-gray-700">
            Qualifications:{" "}
            <span className="text-gray-600 text-sm font-light">
              {data?.qualifications}
            </span>
          </h3>
        </div>
      )}
      {toPreview?.salary && (
        <div className="w-full">
          <h3 className="text text-lg font-semibold text-gray-700">
            Salary:{" "}
            <span className="text-gray-600 text-sm font-light">
              {data?.salary}
            </span>
          </h3>
        </div>
      )}
      {toPreview?.conclusion && (
        <div className="w-full">
          <h3 className="text text-lg font-semibold text-gray-700">
            Conclusion Statement:{" "}
            <span className="text-gray-600 text-sm font-light">
              {data?.conclusion}
            </span>
          </h3>
        </div>
      )}
      {toPreview?.company && (
        <div className="w-full">
          <h3 className="text text-lg font-semibold text-gray-700">
            Company:{" "}
            <span className="text-gray-600 text-sm font-light">
              {data?.company}
            </span>
          </h3>
        </div>
      )}
      {toPreview?.job_location && (
        <div className="w-full">
          <h3 className="text text-lg font-semibold text-gray-700">
            Location:{" "}
            <span className="text-gray-600 text-sm font-light">
              {data?.job_location}
            </span>
          </h3>
        </div>
      )}
      {toPreview?.job_types && (
        <div className="w-full">
          <h3 className="text text-lg font-semibold text-gray-700">
            Job Type:{" "}
            <span className="text-gray-600 text-sm font-light">
              {data?.job_types?.label}
            </span>
          </h3>
        </div>
      )}
    </div>
  );
};

export default Preview;
