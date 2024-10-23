import { useState } from "react";

interface ExpandableTextProps {
  maxChars?: number;
  children: string;
}

const ExpandableText = ({ maxChars = 100, children }: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars);

  return (
    <p>
      {text}...
      <button
        onClick={() => {
          toggleExpand();
        }}
      >
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
