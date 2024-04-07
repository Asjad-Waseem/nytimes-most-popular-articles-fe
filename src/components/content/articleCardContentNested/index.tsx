import { ArticleCardContentNestedProps } from "./types.ts";

const ArticleCardContentNested = ({
  label,
  options,
}: ArticleCardContentNestedProps): JSX.Element => {
  return (
    <div className="p-4 text-left text-sm leading-normal text-blue-gray-500/80">
      {label}
      {options?.map((option, index) => (
        <p key={index}>{option}</p>
      ))}
    </div>
  );
};

export default ArticleCardContentNested;
