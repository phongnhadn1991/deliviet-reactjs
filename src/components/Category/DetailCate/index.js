import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getCategoryByID,
  selectItemCate,
} from "../../../features/post/postSlice";

export default function DetailCate() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const itemCate = useSelector(selectItemCate);
  const { name, slug } = itemCate;

  useEffect(() => {
    dispatch(getCategoryByID(id));
  }, [dispatch, id]);

  return (
    <div className="main-content flex flex-col flex-grow p-8">
      <h1 className="font-bold text-2xl text-gray-700">Category {id}</h1>
      <div className="flex flex-col flex-grow bg-white mt-4 p-8">
        <div className="main_content">
          <div className="overflow-x-auto">
            <div className="flex items-center justify-center overflow-hidden">
              <div className="w-full">
                <div className="bg-white">
                  <form>
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
                          readOnly
                          value={name}
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
                          readOnly
                          value={slug}
                        />
                      </div>
                    </div>
                    {/* <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
