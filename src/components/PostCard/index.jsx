import P from 'prop-types';
import './styles.css';

export const PostCard = ({ post }) => (
  // const { post } = props;
  <div className="post">
    <img src={post.cover} alt={post.title}></img>
    <div className="post-content">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  post: P.object.isRequired,
};
