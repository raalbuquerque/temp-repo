import P from 'prop-types';
import './styles.css';

import { PostCard } from '../PostCard';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard
        /*
        title={post.title}
        body={post.body}
        id={post.id}
        cover={post.cover}
        */
        key={post.id}
        post={post}
      />
    ))}
  </div>
);

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      id: P.number.isRequired,
      post: P.object.isRequired,
    }),
  ),
};
