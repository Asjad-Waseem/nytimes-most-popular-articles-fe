interface MediaMetaData {
  url: string;
  format: string;
  height: number;
  width: number;
}

interface Media {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  "media-metadata": MediaMetaData[];
}

export interface ArticleProps {
  title: string;
  published_date?: string;
  id?: string;
  uri?: string;
  url?: string;
  asset_id?: string;
  source?: string;
  updated?: string;
  section?: string;
  subsection?: string;
  nytdsection?: string;
  adx_keywords?: string;
  column?: string;
  byline?: string;
  type?: string;
  abstract?: string;
  des_facet?: string[];
  org_facet?: string[];
  per_facet?: string[];
  media?: Media[];
  eta_id?: number;
}
