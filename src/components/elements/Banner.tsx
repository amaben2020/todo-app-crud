import Trophy from './../../assets/trophy.svg';

type TBanner = {
  text: string;
  price: number;
};

const Banner = ({ text, price }: TBanner) => {
  return (
    <div className="bg-lemon w-full h-[116px] relative shadow-custom-primary border-2 border-lemon-primary flex items-center">
      <div className="flex items-center gap-x-7 ml-6">
        <img src={Trophy} alt="Trophy" />
        <p className="text-lg font-bold text-blue-base">{text}</p>
      </div>

      <p className="w-[66.11px] h-[71px] absolute right-3 top-0 bg-blue-secondary text-center text-gold flex items-center justify-center">
        ${price ?? 1}
      </p>
    </div>
  );
};

export default Banner;
