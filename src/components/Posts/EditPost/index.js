import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  return (
    <div className="main-content flex flex-col flex-grow p-8">
      <div className="header_box flex gap-5 items-center">
        <div
          className="cursor-pointer flex items-center mt-1"
          onClick={() => navigate(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <span>Go Back</span>
        </div>
      </div>
      <div className="flex flex-col flex-grow bg-white mt-4 p-8">
        <div className="main_content">
          <div className="overflow-x-auto">
            <div className="flex items-center justify-center overflow-hidden">
              <div className="w-full">
                <div className="bg-white shadow-md">
                  <div classname="c-post_edit">
                    <div className="editor gap-3 mx-auto flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg">
                      <div className="flex flex-col">
                        <label class="leading-loose">Title</label>
                        <input
                          className="title bg-gray-100 border border-gray-300 p-2 outline-none"
                          spellCheck="false"
                          placeholder="Title"
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label class="leading-loose">Body</label>
                        <textarea
                          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
                          spellCheck="false"
                          placeholder="Describe everything about this post here"
                          defaultValue={""}
                        />
                      </div>
                      <div className="flex flex-col">
                        <label class="leading-loose">Category</label>
                        <select data-te-select-init data-te-select-size="lg">
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Four</option>
                          <option value="5">Five</option>
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <label class="leading-loose">Thumbnail</label>
                        <div class="flex items-center justify-start w-full">
                          <div className="bg-indigo-300 ...">
                            <img
                              className="object-cover h-48 w-96"
                              alt=""
                              src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"
                            />
                          </div>

                          {/* <label
                            for="dropzone-file"
                            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                          >
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                              <svg
                                aria-hidden="true"
                                class="w-10 h-10 mb-3 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                ></path>
                              </svg>
                              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span class="font-semibold">
                                  Click to upload
                                </span>{" "}
                                or drag and drop
                              </p>
                              <p class="text-xs text-gray-500 dark:text-gray-400">
                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                              </p>
                            </div>
                            <input
                              id="dropzone-file"
                              type="file"
                              class="hidden"
                            />
                          </label> */}
                        </div>
                      </div>
                      <div className="buttons flex mt-4">
                        <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">
                          Cancel
                        </div>
                        <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">
                          Post
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
