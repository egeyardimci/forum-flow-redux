import { useDispatch, useSelector } from "react-redux";
import PostRow from "./PostRow";
import CreatePostModal from "./CreatePostModal";
import { createPostFetch, deletePostFetch, updatePostFetch } from "../../store/actions/actionCreators";
import { getCreatePostUI } from "../../store/selectors/dashBoardSelectors";
import { Loader2 } from "lucide-react";
const PostsTable = ({ posts, users }) => {
  const createPostUI = useSelector(getCreatePostUI);
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

  const isLoading = posts.length === 0;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-4">
        <Loader2 className={`text-blue-500 animate-spin`} size={72} />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-colors duration-300">
      <div className="overflow-x-auto">
        <div className="w-full p-4">
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