const GIFS = [
  "https://cdn4.chrono24.com/images/topmodels/2846-alz5vjoi11mxlc54imf27mlj-Original.png?auto=compress&amp;h=305",
  "https://cdn4.chrono24.com/images/topmodels/2846-alz5vjoi11mxlc54imf27mlj-Original.png?auto=compress&amp;h=305",
];

const API_KEY = "3bFHlFy2ctScUWnf5WEZBFAwJefL1d0P";
const API_URL = "https://api.giphy.com/v1";

export default async function getGifs({ keyword = "morty" } = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=9&offset=0&rating=g&lang=es`;
  const res = await fetch(apiURL);
  const response = await res.json();
  const { data = [] } = response;
  if (Array.isArray(data)) {
    const gifs = data.map((image) => {
      const { images, title, id } = image;
      const { url } = images.downsized_medium;
      return { title, id, url };
    });
    return gifs;
  }
}
