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
    const getCateDetail = async (idCate) => {
      await dispatch(getCategoryByID(idCate));
    };
    getCateDetail(id);
  }, [dispatch, id]);

  return (
    <>
      {itemCate !== "" && itemCate !== null && (
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
      )}
      {itemCate === "" && (
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </>
  );
}
