import girl_img from "../../assets/images/why_choose_girl.png";
import bg_1 from "../../assets/images/bg_1.jpeg";
import { MdOutlineWifiCalling3 } from "react-icons/md";

const WhyChooseUs = () => {
  return (
    <>
    <section 
    style={{
            background: 'linear-gradient(180deg, #f7f7f7, transparent)'
        }}
        >
        <div className="mx-auto py-14 max-w-7xl px-4 sm:px-8">
            <h1 className="text-4xl font-bold text-center mb-8">
            Why <span className="text-emerald-500">Choose Us</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
            {/* Left Section */}
            <div className="w-full md:w-1/2">
                <p className="text-lg mb-8 text-center md:text-left">
                It is a long established fact that a reader will be distracted the
                readable content of a page when looking at layout the point of
                using lorem the is Ipsum less normal.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-5">
                <div className="flex items-center justify-center gap-4 rounded-lg">
                    <div className="bg-gray-100 rounded-xl p-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11 text-emerald-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M17 11.25l-6.375-6.375a2 2 0 0 0-2.828 0l-2.828 2.828m12.172 8.172l-2.828-2.828a2 2 0 0 0 0 2.828m-12.172-8.172l-2.828-2.828a2 2 0 0 0-2.828 0l6.375 6.375a2 2 0 0 0 2.828 0l2.828-2.828z" />
                    </svg>
                    </div>
                    <h2 className="text-xl font-bold mt-4 text-center">
                    Business <br /> Growth
                    </h2>
                </div>
                <div className="flex items-center justify-center gap-4 rounded-lg">
                    <div className="bg-gray-100 rounded-xl p-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12 text-emerald-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 2l9 9-9 9-9-9 9-9z" />
                    </svg>
                    </div>
                    <h2 className="text-xl font-bold mt-4 text-center">
                    Technology <br /> Consultancy
                    </h2>
                </div>
                </div>

                <hr className="my-6" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-5">
                <div className="flex items-center justify-center gap-4 rounded-lg">
                    <div className="p-3">
                    <img
                        className="rounded-full"
                        src="https://jthemes.net/themes/html/growim/assets/images/resources/why-choose-three-author.jpg"
                        alt=""
                    />
                    </div>
                    <h2 className="text-xl font-semibold mt-4 text-center sm:text-left">
                    Ronald Richards <br />
                    <span className="font-normal text-sm">Co-Founder</span>
                    </h2>
                </div>
                <div className="flex items-center justify-center gap-4 rounded-lg">
                    <div className="bg-emerald-600 rounded-full p-4">
                    <MdOutlineWifiCalling3 className="text-white w-6 h-6" />
                    </div>
                    <h2 className="text-lg text-gray-500 font-semibold mt-4 text-center sm:text-left">
                    Call us now <br />
                    <span className="font-medium text-xl text-gray-800">
                        +208-555-0112
                    </span>
                    </h2>
                </div>
                </div>
            </div>

            {/* Right Section (Image + Girl Animation) */}
            <div className="w-full md:w-1/2 relative pl-0 md:pl-28">
                <img src={bg_1} className="w-full md:w-10/12" alt="Background" />
                <div>
                <img
                    src={girl_img}
                    alt="Why Choose Us"
                    className="w-10/12 bottom-0 -left-12 absolute"
                />
                </div>
            </div>
            </div>
        </div>
        </section>
        </>
    );
    };

    export default WhyChooseUs;
