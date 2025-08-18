import tw from '@/utils/tw';

type CardProps = {
  type: 'primary' | 'secondary' | 'tertiary';
  logoSrc: string;
  rate: string;
  title: string;
  company: string;
};

function Card({ type, logoSrc, rate, title, company }: CardProps) {
  return (
    <div className="rounded-lg max-w-65 p-2 bg-white">
      <div
        className={tw(
          'relative bg-[#FDF4E5;] rounded-t-lg p-3 min-h-[163px]',
          type === 'primary' ? 'bg-[#FDF4E5]' : '',
          type === 'secondary' ? 'bg-[#F9F7FE]' : '',
          type === 'tertiary' ? 'bg-[#F8FCEE]' : ''
        )}
      >
        <div className="flex  justify-between">
          <span className="font-bold">{rate}</span>
          <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="18"
              viewBox="0 0 14 18"
              fill="none"
            >
              <path
                d="M2 14.95L7 12.8L12 14.95V2H2V14.95ZM0 18V2C0 1.45 0.196 0.979 0.588 0.587C0.979333 0.195667 1.45 0 2 0H12C12.55 0 13.021 0.195667 13.413 0.587C13.8043 0.979 14 1.45 14 2V18L7 15L0 18Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <h2 className="pr-10 mt-6">{title}</h2>
        <button type="button" className="absolute right-0 top-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <div className="flex mt-2">
        <img src={logoSrc} />
        <div className="ml-4">{company}</div>
        <button
          type="button"
          className="ml-auto bg-black text-white px-2 px-1 rounded-2xl"
        >
          View
        </button>
      </div>
    </div>
  );
}
export default Card;
