import { useDispatch, useSelector } from "react-redux";
import PostRow from "./PostRow";
import CreatePostModal from "./CreatePostModal";
import { createPostFetch, deletePostFetch, updatePostFetch } from "../../store/actions/actionCreators";
const PostsTable = ({ posts, users }) => {
  const createPostUI = useSelector((state) => state.dashboardReducer.createPostUI);
  const dispatch = useDispatch();

  const handleOnSave = (newPost) => {
   //Logic to handle post creation
    console.log("New post created:", newPost);
    dispatch(createPostFetch(newPost));
  }

  const handleOnUpdate = (updatedPost) => {
    // Logic to handle post update
    console.log("Post updated:", updatedPost);
    dispatch(updatePostFetch(updatedPost));
  };
  const handleOnDelete = (postId) => {
    // Logic to handle post deletion
    console.log("Post deleted:", postId);
    dispatch(deletePostFetch(postId));
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <div className="w-full">
            {posts.map((post) => (
              <PostRow 
                onUpdate={handleOnUpdate}
                onDelete={handleOnDelete}
                key={post.id} 
                post={post} 
              />
            ))}
        </div>
      </div>
      {createPostUI && (
      <CreatePostModal onSave={handleOnSave} users={users}></CreatePostModal>
      )}
    </div>

  );
};

export default PostsTable;