
const Banner = () => {
    return (
        <div className="w-full h-full lg:h-[600px] text-center text-white flex flex-col lg:items-center gap-5 lg:justify-center bg-no-repeat bg-cover bg-center rounded-xl lg:rounded-none lg:bg-cover px-5" style={{backgroundImage: "url('https://i.postimg.cc/SNfcxcCG/banner.png')"}}>
            <div className="lg:w-[933px] flex flex-col items-center gap-5 lg:gap-10 mb-10">
                <div className="text-3xl lg:text-5xl font-bold mt-10 lg:mt-0">Discover an exceptional cooking class tailored for you!</div>
                <div className="text-sm">
                Welcome to Chef Recipe, your ultimate destination for culinary inspiration! Explore a world of flavors, techniques, and delicious creations crafted by expert chefs.
                </div>
                <div className="flex gap-5 items-center">
                    <button className="btn border-none bg-[#0BE58A]  rounded-full  text-black font-bold text-xl">Explore Now</button>
                    <button className="btn bg-transparent text-white border-2 border-white rounded-full  text-xl font-bold">Our Feedback</button>
                </div>
            </div>


        </div>
    );
};

export default Banner;