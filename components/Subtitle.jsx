const Subtitle = ({ children }) => {
    return (
        <div className='text-3xl text-white font-light w-fit cursor-default'>
            {children}
            <hr className='py-6' />
        </div>
    );
};

export default Subtitle;