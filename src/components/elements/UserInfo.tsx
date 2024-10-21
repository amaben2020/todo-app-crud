import User from './../../assets/user.png';

type TUserInfo = {
  username: string;
  details: string;
};

const UserInfo = ({ username, details }: TUserInfo) => {
  return (
    <div className="flex gap-x-4 my-5">
      <div>
        <img alt="" src={User} />
      </div>
      <div className="w-[292px] space-y-2 text-shadow-2">
        <h3 className="font-medium text-base text-white">Hello, {username}</h3>

        <p className="font-thin italic text-[25px] text-shadow text-white leading-[26.46px]">
          {details}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
