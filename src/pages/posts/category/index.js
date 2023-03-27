import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCate from "../../../components/Category/ItemCate";
import ItemCateSkeleton from "../../../components/Category/ItemCateSkeleton";
import {
  fetchDataCategory,
  selectListCate,
} from "../../../features/post/postSlice";

export default function CategoryPost() {
  const listCategory = useSelector(selectListCate);
  const isLoadingSkeleton = useSelector((state) => state.post.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataCategory());
  }, [dispatch]);

  return (
    <div className="main-content flex flex-col flex-grow p-8">
      <h1 className="font-bold text-2xl text-gray-700">Category</h1>
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
                        <th className="py-3 px-6 text-left">Name</th>
                        <th className="py-3 px-6 text-left">Slug</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                      {!isLoadingSkeleton &&
                        listCategory &&
                        listCategory.length > 0 &&
                        listCategory.map((item) => (
                          <ItemCate key={item.id} data={item} />
                        ))}
                      {isLoadingSkeleton &&
                        [...Array(5)].map((_, index) => (
                          <ItemCateSkeleton key={index} />
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
