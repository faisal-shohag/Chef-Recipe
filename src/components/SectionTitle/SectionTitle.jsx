import PropTypes from 'prop-types'

const SectionTitle = ({title, subtitle}) => {
    return (
        <div className='mt-10 mb-10 flex flex-col items-center text-center'>
            <div className='text-4xl mb-5 font-bold'>{title}</div>
            <div className='text-[#150B2B99] text-sm lg:w-[823px]'>{subtitle}</div>
        </div>
    );
};

SectionTitle.propTypes={
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

export default SectionTitle;