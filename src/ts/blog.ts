import type { PortableTextBlock } from '@portabletext/types';

export default interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author: string;
  mainImage: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt: string;
  };
  publishedAt: string;
  excerpt: string;
  body: PortableTextBlock[];
}
