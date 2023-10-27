const PrimaryButton = ({ name, css }) => {
  return (
    <button
      className={`px-[1.5rem] bg-[#D01C28] text-white  font-[700] py-[.3rem] rounded-md ${css} hover:bg-red-700 duration-100`}
    >
      {name}
    </button>
  );
};

export default PrimaryButton;
