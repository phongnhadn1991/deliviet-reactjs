import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileFromLS } from "../../features/authentication/authenSlice";
import { fetchDataPost, selectListPost, deleteDataPost } from "../../features/post/postSlice";
import ItemPost from "../../components/ItemPost/ItemPost";

export default function PostPage() {
  const listPost = useSelector(selectListPost);
  const isLoadingSkeleton = useSelector((state) => state.post.isLoading);
  const dispatch = useDispatch();
  const profileUser = getProfileFromLS();
  const { id } = profileUser;

  useEffect(() => {
    dispatch(fetchDataPost(id));
    dispatch(deleteDataPost(id));
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
