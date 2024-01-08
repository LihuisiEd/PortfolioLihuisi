const Message = ({ children }) => {
    return (
      <div className="bg-zinc-800/50 rounded-lg text-white cursor-default w-fit py-2 px-4">
        {children}
      </div>
    );
  };
  
  export default Message;