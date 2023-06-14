import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css"
import { useSelector } from 'react-redux';

const PostSkeleton = () => {

  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div className={`card mb-3 mt-4 shadow-sm ${darkMode && "bg-dark"}`}>
      <div className="card-body">
        <Skeleton height={20} />
        <Skeleton count={3} />
      </div>
    </div>
  );
};

export default PostSkeleton;
