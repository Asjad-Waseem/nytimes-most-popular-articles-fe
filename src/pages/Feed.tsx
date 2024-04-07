import { useState, useEffect } from "react";

import Dropdown from "@components/buttons/dropdown";
import Article from "@sections/article";
import { MostPopularArticlesService } from "@api/services";

import { ArticleProps } from "@sections/article/types";

const Feed = (): JSX.Element => {
  const { fetchMostPopularArticles } = MostPopularArticlesService;

  const dayOptions: number[] = [1, 7, 30];

  const [period, setPeriod] = useState<number>(dayOptions[0]);
  const [mostPopularArticles, setMostPopularArticles] = useState([]);

  const getMostPopularArticles = async () => {
    fetchMostPopularArticles(period)
      .then((response) => {
        const data = response?.data?.results; // Access data from the response object
        if (data) {
          setMostPopularArticles(data);
        } else {
          console.error("Error: No data received from API");
        }
      })
      .catch((err) => {
        console.error("Error fetching project list:", err);
      });
  };

  useEffect(() => {
    getMostPopularArticles();
  }, [period]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold tracking-tight mb-8">
        NY Times Most Popular Articles 📝
      </h1>
      <h4>How far back in days do you want to see the articles from?</h4>
      <Dropdown
        options={dayOptions}
        selectedOption={period}
        handleSelectedChange={(val) => setPeriod(val)}
      />
      <hr className="my-1 w-full" />
      <div>
        {mostPopularArticles?.map((item: ArticleProps, index) => (
          <Article
            key={index}
            title={item?.title}
            published_date={item?.published_date}
            id={item?.id}
            uri={item?.uri}
            url={item?.url}
            asset_id={item?.asset_id}
            source={item?.source}
            updated={item?.updated}
            section={item?.section}
            subsection={item?.subsection}
            nytdsection={item?.nytdsection}
            adx_keywords={item?.adx_keywords}
            column={item?.column}
            byline={item.byline}
            type={item?.type}
            abstract={item?.abstract}
            des_facet={item?.des_facet}
            org_facet={item?.org_facet}
            per_facet={item?.per_facet}
            media={item?.media}
            eta_id={item?.eta_id}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
