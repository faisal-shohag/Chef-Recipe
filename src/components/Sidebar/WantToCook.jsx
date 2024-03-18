
import PropTypes from 'prop-types'
const WantToCook = ({wishcooks, handleCooking}) => {

    if(wishcooks.length == 0){
        return <div className="flex flex-col items-center">
        <div className=" pb-2 pt-5 text-xl font-semibold">Want to cook</div>
        <hr className="w-1/2 bg-[#28282826] mb-3"/>
        <div className='px-5 text-center text-[#878787] text-sm'>There is no food to cook! Add some.</div>
        </div>
    }

    return (
        <div className="flex flex-col items-center">
            <div className=" pb-2 pt-5 text-xl font-semibold">Want to cook: {wishcooks.length < 10 && wishcooks.length>0 ? "0"+wishcooks.length : wishcooks.length}</div>
            <hr className="w-1/2 bg-[#28282826] mb-3"/>

            <table className="px-0 w-full">
                <thead className="text-[#878787] fira-sans">
                    <tr className="">
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                
                <tbody className="fira-sans text-[#282828B3] bg-[#28282808]">
                    {
                        wishcooks.map((cook, index)=><tr key={cook.recipe_id}>
                            <td className="text-[#282828CC] font-bold">{index+1}</td>
                            <td>{cook.recipe_name}</td>
                            <td>{cook.preparing_time} minutes</td>
                            <td>{cook.calories} calories</td>
                            <td><button onClick={()=>{handleCooking(cook)}} className="btn font-semibold lexend bg-[#0BE58A] rounded-full text-black lg:block">Preparing</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

WantToCook.propTypes = {
    wishcooks: PropTypes.array.isRequired,
    handleCooking: PropTypes.func.isRequired,
}

export default WantToCook;