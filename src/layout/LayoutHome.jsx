import PostsList from '../components/PostsList';
import Filter from '../components/Filter';
import Trends from '../components/Trends';

const LayoutHome = () => {
  return ( 
    <div className="w-100 min-h-100 p-5 mt-5 flex-end">
      <Trends/>
      <Filter />
      <PostsList />
    </div>
   );
}
 
export default LayoutHome;