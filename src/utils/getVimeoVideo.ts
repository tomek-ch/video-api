import makeReq from "./makeRequest";

async function fetchFromVimeo(id: string) {
  const key = process.env.VIMEO_API_KEY;
  const url = `https://api.vimeo.com/videos/${id}?access_token=${key}`;
  return makeReq(url);
}

async function getVimeoVideo(id: string) {
  const video = await fetchFromVimeo(id);

  if (!video) {
    return null;
  }

  const data = {
    id,
    title: video.name,
    views: video.stats.plays,
    likes: video.metadata.connections.likes.total,
    thumbnail: video.pictures.sizes[3].link,
  };
  return data;
}

export default getVimeoVideo;
