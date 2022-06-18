import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div className={s.postsBlock}>
      <h3>My post</h3> 
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add Post</button>
      </div>
      <div className={s.posts}>
        {props.dataPost.map(post=><Post message={post.message} like={post.like} id={post.id} />)}

      </div>
    </div>
  );
};
export default MyPosts;
