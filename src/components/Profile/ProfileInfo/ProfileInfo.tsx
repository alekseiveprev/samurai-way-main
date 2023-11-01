import s from "./ProfileInfo.module.css";

const ProfileInfo:React.FC<any> = (props) => {
  return (
    <div>
      <div className={s.imgSize}>
        {/*  <div className={s.imgSize}> */}
        <img
          src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"
          alt=""
        />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
