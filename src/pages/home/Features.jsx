import React from 'react';

const Features = () => {
    return (

        <div className='p-4'>

            <h1 className='text-5xl font-semibold mb-8'>What Makes <span className='text-[#ff4136] playwrite-au-sa-font'>BloodConnect</span> a Lifesaving Platform</h1>
            {/* <p className='mb-8 text-xl text-[#333333]'>We make donating blood simple, meaningful, and impactful—empowering everyday heroes to save lives through connection, convenience, and compassion.</p> */}

            <div className='flex justify-center items-center gap-2'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 my-8'>

                    <div className="card bg-base-100 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://i.ibb.co/N6gK6M1Y/blood-booking.png"
                                alt="Shoes"
                                className="rounded-xl w-1/2" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Easy Online Booking</h2>
                            <p>Book your donation appointment effortlessly through our platform—fast, user-friendly, and available anytime from any device.</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://i.ibb.co/r2y17whw/Blood-Requests.png"
                                alt="Shoes"
                                className="rounded-xl w-1/2" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Real-Time Blood Requests</h2>
                            <p>Get live updates on urgent blood needs in your area and step in when your blood type matches.</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://i.ibb.co/FLfW2hYf/blood-notification.png"
                                alt="Shoes"
                                className="rounded-xl w-1/2" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"> Donor History & Reminders</h2>
                            <p>Easily track your donation history and receive timely reminders when you're eligible to donate again.</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://i.ibb.co/B5td5JWn/blood-blog.png"
                                alt="Shoes"
                                className="rounded-xl w-1/2" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Life Stories Shared</h2>
                            <p>Read heartfelt stories from real recipients and donors, showing the powerful impact of your lifesaving contribution.</p>
                        </div>
                    </div>



                </div>

            </div>
        </div>

    );
};

export default Features;