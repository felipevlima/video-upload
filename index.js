// AIzaSyCol8EbGHBX-xr0b_hXrZrXbnVDaojSAcQ
const { google } = require('googleapis');
const fs = require('fs')

const serviceAccount = require('./youtube.json')

const jwtClient = new google.auth.JWT(
  serviceAccount.client_email,
  null,
  serviceAccount.private_key,
  ['https://www.googleapis.com/auth/youtube.upload']
);

jwtClient.authorize((err) => {
  if (err) {
    console.error('Authorization error:', err);
    return;
  }

  // Now, you can use jwtClient to upload a video
  const youtube = google.youtube('v3');
  const videoPath = './example.mp4'; // Update with your video path
  const videoMetadata = {
    snippet: {
      title: 'Your Video Title',
      description: 'Your Video Description',
      tags: ['tag1', 'tag2'], // Optional: Add tags
      categoryId: '22', // Optional: Set the video category (Entertainment in this case)
    },
    status: {
      privacyStatus: 'private', // Set video privacy status (private, public, unlisted)
    },
  };

  youtube.videos.insert(
    {
      auth: jwtClient,
      part: 'snippet,status',
      resource: videoMetadata,
      media: {
        body: fs.createReadStream(videoPath),
      },
    },
    (err, response) => {
      if (err) {
        console.error('Error uploading video:', err);
        return;
      }
      console.log('Video uploaded successfully. Video ID:', response.data.id);
    }
  );
});