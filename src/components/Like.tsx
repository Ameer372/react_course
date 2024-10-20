import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface LikeProps {
  onClick: () => void;
}

const Like = ({ onClick }: LikeProps) => {
  const [like, setLike] = useState(false);

  const toggle = () => {
    setLike(!like);
    onClick();
  };

  if (like) return <AiFillHeart size={30} onClick={toggle} color="#ff6b81" />;
  return <AiOutlineHeart size={30} onClick={toggle} color="#ff6b81" />;
};

export default Like;
