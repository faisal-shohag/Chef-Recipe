import PropTypes from 'prop-types'
import { GoClock } from "react-icons/go";
import { AiOutlineFire } from "react-icons/ai";
import { useState } from 'react';
const Post = ({cook, handleCook}) => {
    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = cook

    const [click, setClick] = useState(false)



    return (
        <div className='border-[1px] flex flex-col items-center px-5 py-5 rounded-2xl max-w-[379px]'>
            <img className='w-[331px] max-h-[250px] rounded-xl' src={recipe_image}/>
            <div className='mt-3'>
                <div className=' text-xl font-semibold text-[#282828]'>{recipe_name}</div>
                <div className='text-sm text-[#878787] mb-3 fira-sans mt-3'>{short_description}</div>
                <hr/>
                <div className=' mt-2 mb-2 font-semibold text-[#282828]'>Ingredients: {ingredients.length}</div>
                <ul className='list-disc pl-7 mb-1 text-[#878787] fira-sans'>
                    {ingredients.slice(0, more).map((ing, index)=><li key={index}>{ing}</li>)}
                </ul>
                <hr/>
                <div className='flex items-center gap-10 mt-3 text-[#282828CC]'>
                    <div className='flex items-center gap-1'><span className='text-xl'><GoClock /></span> {preparing_time} minutes</div>
                    <div className='flex items-center gap-1'><span className='text-xl'><AiOutlineFire /></span> {calories} calories</div>
                </div>
                <button onClick={()=>handleCook(cook)} className='btn bg-[#0BE58A] mt-5 font-semibold rounded-full px-6 py-3'>Want to Cook</button>
            </div>
        </div>
    );
};

Post.propTypes = {
    cook: PropTypes.object.isRequired,
    handleCook: PropTypes.func.isRequired
}

export default Post;
