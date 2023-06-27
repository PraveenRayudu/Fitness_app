export const exerciseOptions = {
    method: 'GET',
    headers: {
      
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '7de6c126f9mshb929fe72bcf1a62p187e70jsn970a814cb7ea'
    }
  };

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'e43b8ea77bmsh3aa60340c82e96ap1e4452jsn8408500e3e8d'
      
    }
  };



export const fetchData = async (url, options) => {
    const response = await fetch(url, options);  
    const data = await response.json();

    return data;
};