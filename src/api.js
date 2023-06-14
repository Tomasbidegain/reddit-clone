import { useQuery } from 'react-query';

const API_BASE_URL = 'https://www.reddit.com';

export const fetchPosts = async (filter) => {
  const response = await fetch(`${API_BASE_URL}/${filter.toLowerCase()}.json?limit=4`);
  const data = await response.json();
  const posts = data.data.children.map((child) => {
    const post = child.data;
    return {
      title: post.title,
      author: post.author,
      postUrl: `https://www.reddit.com${post.permalink}`,
      imageUrl: post.is_video ? post.media.reddit_video.fallback_url : post.url,
      created_utc: post.created_utc,
      isVideo: post.is_video,
    };
  });
  return posts;
};

export const fetchTrends = async () => {
  const response = await fetch(`${API_BASE_URL}/top.json?limit=4`);
  const data = await response.json();
  const trends = data.data.children.map((child) => {
    const trend = child.data;
    return {
      title: trend.title,
      author: trend.author,
      created_utc: trend.created_utc,
      postUrl: `https://www.reddit.com${trend.permalink}`,
      url: trend.url,
      image: trend.thumbnail,
    };
  });
  return trends;
}

export const usePostsQuery = (filter) => {
  return useQuery(['posts', filter], () => fetchPosts(filter));
};

export const useTrendsQuery = () => {
  return useQuery(['trends'], () => fetchTrends());
}