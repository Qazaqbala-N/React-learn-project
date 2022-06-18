import s from './ProfileInfo.module.css'
const ProfileInfo = () => {
  return (
      <div>
      <div>
        <img
          src="https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg"
          width={740}
          alt=""
        />
      </div>
      <div className={s.descriptionBlock}>avatar+description</div>
    </div>
  );
};
export default ProfileInfo;
