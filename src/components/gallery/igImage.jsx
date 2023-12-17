import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IgImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Replace 'YOUR_ACCESS_TOKEN' with the actual access token obtained from Instagram API
    const accessToken = 'YOUR_ACCESS_TOKEN';

    // Replace 'USER_ID' with the actual Instagram user ID
    const userId = 'USER_ID';

    // Make a request to the Instagram Graph API to get the user's media
    //axios.get(`https://graph.instagram.com/v12.0/${userId}/media?fields=media_url,thumbnail_url,permalink&access_token=${accessToken}`)
    axios.get(`https://www.instagram.com/p/CrGdQqFNWT0/?img_index=1`)
      .then(response => {
        // Get the first media item from the response
        const firstMedia = response.data.data[0];

        // Set the image URL to the media URL
        setImageUrl(firstMedia.media_url);
      })
      .catch(error => {
        console.error('Error fetching Instagram data:', error);
      });
  }, []);

  return (
    <div>
      <img src={imageUrl} alt="Instagram" />
    </div>
  );
};

export default IgImage;