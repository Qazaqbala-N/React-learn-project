import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo'
const Profile = (props) =>{
    return (
      <div>
        <ProfileInfo/>
        <MyPosts dataPost ={props.dataPost}/>
      </div>
    )
}
export default Profile;
