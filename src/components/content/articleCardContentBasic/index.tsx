import { ArticleCardContentBasicProps } from "./types";

const ArticleCardContentBasic = ({
  label,
  value,
}: ArticleCardContentBasicProps): JSX.Element => {
  return (
    <div className="p-4 text-left text-sm leading-normal text-blue-gray-500/80">
      {label}: {value}
    </div>
  );
};

export default ArticleCardContentBasic;
