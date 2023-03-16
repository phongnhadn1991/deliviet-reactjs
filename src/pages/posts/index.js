import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileFromLS } from "../../features/authentication/authenSlice";
import { fetchDataPost, selectListPost } from "../../features/post/postSlice";

export default function PostPage() {
  const listPost = useSelector(selectListPost);
  const isLoadingSkeleton = useSelector((state) => state.post.isLoading);
  const dispatch = useDispatch();
  const profileUser = getProfileFromLS();
  const { id } = profileUser;

  useEffect(() => {
    dispatch(fetchDataPost(id));
  }, [dispatch, id]);

  return (
    <div className="main-content flex flex-col flex-grow p-8">
      <h1 className="font-bold text-2xl text-gray-700">List Post</h1>
      <div className="flex flex-col flex-grow bg-white mt-4 p-8">
        <div className="main_content">
          <div className="overflow-x-auto">
            <div className="flex items-center justify-center overflow-hidden">
              <div className="w-full">
                <div className="bg-white shadow-md">
                  <table className="min-w-max w-full table-auto">
                    <thead>
                      <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">ID</th>
                        <th className="py-3 px-6 text-left">Image</th>
                        <th className="py-3 px-6 text-left">Title</th>
                        <th className="py-3 px-6 text-center">Category</th>
                        <th className="py-3 px-6 text-center">Status</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                      {!isLoadingSkeleton &&
                        listPost &&
                        listPost.length > 0 &&
                        listPost.map((item) => (
                          <ItemPost key={item.id} item={item} />
                        ))}
                      {isLoadingSkeleton &&
                        [...Array(5)].map((_, index) => (
                          <ItemPostSkeleton key={index} />
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const ItemPost = ({ item }) => {
  const { id, title, status, _embedded } = item;
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <span className="font-medium">{id}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-left">
        {_embedded["wp:featuredmedia"] && (
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded"
              src={
                _embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail
                  .source_url
              }
              alt=""
            />
          </div>
        )}
      </td>
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span className="font-medium">{title.rendered}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex items-center justify-center">
          {_embedded["wp:term"][0].map((cate) => cate.name).join(", ")}
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
          {status}
        </span>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex item-center justify-center">
          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </div>
          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        </div>
      </td>
    </tr>
  );
};

export const ItemPostSkeleton = () => (
  <tr className="animate-pulse border-b border-gray-200">
    <td className="py-3 px-6 text-left">
      <div className="flex items-center">
        <span className="w-10 h-5 bg-gray-200"></span>
      </div>
    </td>
    <td className="py-3 px-6 text-left">
      <div className="flex items-center">
        <span className="w-10 h-10 bg-gray-200 rounded"></span>
      </div>
    </td>
    <td className="py-3 px-6 text-left whitespace-nowrap">
      <div className="flex items-center">
        <span className="bg-gray-200 h-5 w-full"></span>
      </div>
    </td>
    <td className="py-3 px-6 text-center">
      <div className="flex items-center justify-center">
        <span className="bg-gray-200 h-5 w-20"></span>
      </div>
    </td>
    <td className="py-3 px-6 text-center">
      <div className="flex items-center justify-center">
        <span className="bg-gray-200 h-5 w-20"></span>
      </div>
    </td>
    <td className="py-3 px-6 text-center">
      <div className="flex item-center justify-center gap-1">
        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
          <span className="h-20 bg-gray-200 py-1 px-3 rounded-full text-xs"></span>
        </div>
        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
          <span className="h-20 bg-gray-200 py-1 px-3 rounded-full text-xs"></span>
        </div>
        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
          <span className="h-20 bg-gray-200 py-1 px-3 rounded-full text-xs"></span>
        </div>
      </div>
    </td>
  </tr>
);
