import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getCategoryByID,
  selectItemCate,
  updateCategory,
} from "../../../features/post/postSlice";
import LoadingScreen from "../../Loading/loadingScreen";

export default function EditCate() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const itemCate = useSelector(selectItemCate);
  const { name, slug } = itemCate;

  const [isLoading, setIsLoading] = useState(false);

  const [nameCate, setNameCate] = useState("");
  const [slugCate, setSlugCate] = useState("");

  useEffect(() => {
    const getCateDetail = async (idCate) => {
      await dispatch(getCategoryByID(idCate));
    };
    getCateDetail(id);
  }, [dispatch, id]);

  useEffect(() => {
    setNameCate(name);
    setSlugCate(slug);
  }, [name, slug]);

  const submitForm = async (e) => {
    e.preventDefault();
    const dataForm = { id: id, name: nameCate, slug: slugCate };
    setIsLoading(true)
    await dispatch(updateCategory(dataForm));
    navigate(-1);
  };

  return (
    <>
      {itemCate !== null && (
        <div className="main-content flex flex-col flex-grow p-8">
          <AlertText />
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
                    <div className="bg-white">
                      <form onSubmit={(e) => submitForm(e)}>
                        <div className="grid gap-6 mb-6 md:grid-cols-1">
                          <div>
                            <label
                              htmlFor="first_name"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Category name
                            </label>
                            <input
                              type="text"
                              id="first_name"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                              onChange={(e) => setNameCate(e.target.value)}
                              value={nameCate}
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="last_name"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Category slug
                            </label>
                            <input
                              type="text"
                              id="last_name"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                              onChange={(e) => setSlugCate(e.target.value)}
                              value={slugCate}
                              required
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {(itemCate === "" || isLoading) && <LoadingScreen />}
    </>
  );
}

export const AlertText = () => {
  return (
    <div
      id="alert-2"
      className="flex p-4 mb-4 text-yellow-800 rounded-lg bg-yellow-50"
      role="alert"
    >
      <svg
        aria-hidden="true"
        className="flex-shrink-0 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        />
      </svg>
      <span className="sr-only">Info</span>
      <div className="ml-3 text-sm font-medium">
        Category name & Category slug is required.
      </div>
    </div>
  );
};
