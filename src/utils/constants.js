export const USER_AVATAR = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_API_ACCESS_TOKEN,
    }
  };

export const IMG_CDN = "https://image.tmdb.org/t/p/w500/"

export const SUPPORTED_LANGUAGES = [{identifier: "en", name: "English"},{identifier: "hindi", name: "Hindi"},{identifier: "spanish", name: "Spanish"},{identifier: "nepali", name: "Nepali"},]