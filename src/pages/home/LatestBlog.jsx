import React from 'react';

import { Link, useNavigate } from 'react-router';
import useAxios from '../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Loading from '../shared/Loading';
import Swal from 'sweetalert2';
import { FaArrowRightLong } from "react-icons/fa6";


const LatestBlog = () => {

    const axiosInstance = useAxios();
    const navigate = useNavigate();

    const { data: blogs = [], isLoading, isError, error } = useQuery({
        queryKey: ['publicBlogs'],
        queryFn: async () => {
            const res = await axiosInstance.get('/publicBlogs');
            return res.data;
        },
        staleTime: 1000 * 60 * 2,
    });

    if (isLoading) {
        return <Loading></Loading>;
    }

    if (isError) {
        Swal.fire({
            icon: "error",
            title: error,
            showConfirmButton: false,
            timer: 1500
        });
        navigate('/');
    }


    return (
        <div className='p-4 my-8'>
            <h1 className='text-5xl font-semibold mb-8'>Latest Blogs</h1>
            <div>
                {blogs.length === 0 ? (
                    <p className="text-gray-500">No blogs available.</p>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {blogs.slice(-3).reverse().map(blog => (
                            <div key={blog._id} className="card bg-base-100 shadow p-4">
                                <img
                                    src={blog.thumbnail}
                                    alt={blog.title}
                                    className="rounded mb-3 h-48 w-full object-cover"
                                />
                                <h3 className="text-xl font-semibold my-4">{blog.title}</h3>
                                {/* <p className='truncate'>{blog.content}</p>
                           */}

                                <div
                                    className="prose max-w-full mb-4 line-clamp-3"
                                    dangerouslySetInnerHTML={{ __html: blog.content }}
                                />


                                <Link to={`/blogs/${blog._id}`} className="btn btn-neutral mt-2">
                                    Read More
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className=' flex justify-center items-center my-8'>
                <Link to="/blogs" className='btn bg-[#ff4136] px-24'>
                    All Blogs 
                    <FaArrowRightLong className='text-xl' />
                </Link>
            </div>

        </div>
    );
};

export default LatestBlog;