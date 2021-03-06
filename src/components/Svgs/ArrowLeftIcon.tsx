const ArrowLeftIcon: React.FC<{ color?: string }> = ({ color }) => {
  return (
    <svg
      style={{ marginRight: '1rem' }}
      width='8'
      height='10'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        className='left-arrow'
        d='M6 9L2 5l4-4'
        stroke={color || '#4661E6'}
        strokeWidth='2'
        fill='none'
        fillRule='evenodd'
      ></path>
    </svg>
  );
};
export default ArrowLeftIcon;
