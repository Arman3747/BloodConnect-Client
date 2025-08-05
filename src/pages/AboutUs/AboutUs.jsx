import React from 'react';

const AboutUs = () => {
    return (
        <div className='min-h-screen max-w-[1600px] mx-auto px-4 py-2 lg:py-8'>

            <div className='py-16'>
                <h1 className='text-5xl font-bold'><span className='border-b-2 border-[#ff4136]'>Who We Are & What We Do</span></h1>
                <br />
                <p className='text-2xl text-justify'>
                    Blood Connect is a life-saving platform designed to bring blood donors, recipients, and healthcare volunteers together in one connected, digital space. Whether you're someone in urgent need of blood or a donor ready to help, Blood Connect makes the process faster, smarter, and more accessible — right from your device.
                    <br />
                    <br />
                    We believe that no one should have to struggle to find a blood donor during a medical emergency. Our goal is to bridge that gap by using technology to connect the right people at the right time.
                </p>
                <br />
                <br />

                <h1 className='text-5xl font-bold'><span className='border-b-2 border-[#ff4136]'>Our Mission</span></h1>
                <br />
                <p className='text-2xl text-justify'>
                    Our mission is simple but vital:
                    <br />
                    To save lives by making blood donation faster, safer, and easier through smart, location-based search and verified donor profiles. We aim to create a trusted and transparent network that supports patients, donors, and medical communities every step of the way.
                </p>
                <br />
                <br />

                <h1 className='text-5xl font-bold'><span className='border-b-2 border-[#ff4136]'>Why Choose Blood Connect?</span></h1>
                <br />

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-[#ff4136] text-3xl font-medium">✓</span></div>
                    <div className='text-2xl'>
                        Find blood donors by group, district, and upazila
                    </div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-[#ff4136] text-3xl font-medium">✓</span></div>
                    <div className='text-2xl'>
                        Submit blood requests with full recipient details
                    </div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-[#ff4136] text-3xl font-medium">✓</span></div>
                    <div className='text-2xl'>
                        View complete donor profiles before reaching out
                    </div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-[#ff4136] text-3xl font-medium">✓</span></div>
                    <div className='text-2xl'>
                        Instant, real-time search results powered by efficient data handling
                    </div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-[#ff4136] text-3xl font-medium">✓</span></div>
                    <div className='text-2xl'>
                        Clean, mobile-friendly interface for easy use on the go
                    </div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-[#ff4136] text-3xl font-medium">✓</span></div>
                    <div className='text-2xl'>
                        Secure role-based access for donors, volunteers, and admins
                    </div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-[#ff4136] text-3xl font-medium">✓</span></div>
                    <div className='text-2xl'>
                        Read blogs and health tips to stay informed and inspired
                    </div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-[#ff4136] text-3xl font-medium">✓</span></div>
                    <div className='text-2xl'>
                        In-app notifications and pop-ups for instant feedback
                    </div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-[#ff4136] text-3xl font-medium">✓</span></div>
                    <div className='text-2xl'>
                        Admin-controlled dashboard to manage requests and users
                    </div>
                </div>

                <br />
                <br />

                <h1 className='text-5xl font-bold'><span className='border-b-2 border-[#ff4136]'>Our Team</span></h1>
                <br />
                <p className='text-2xl text-justify'>Blood Connect was developed by a dedicated team of developers and designers who are passionate about solving real-world problems through technology. Inspired by the power of community and the urgency of healthcare needs, we built this platform to make a real impact — one donation at a time.
                    <br />
                    <br />
                    Whether you're here to give or receive, you're part of something bigger:
                    <br />
                    <br />
                    <span className='text-[#ff4136] font-bold text-3xl text-center'>A network that saves lives.</span>
                </p>
            </div>
        </div>
    );
};

export default AboutUs;