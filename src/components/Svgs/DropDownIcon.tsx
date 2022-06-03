

const DropDownIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <svg
      width='10'
      height='7'
      xmlns='http://www.w3.org/2000/svg'
      transform={isOpen ? 'rotate(180)' : undefined}
    >
      <path
        className='dd-btn__down-arrow'
        d='M1 1.5l4 4 4-4'
        stroke='#fff'
        strokeWidth='2'
        fill='none'
        fillRule='evenodd'
      ></path>
    </svg>
  );
};
export default DropDownIcon;
