
const vimeo = require('vimeo').Vimeo

let clientId = "6d0dcf3523fd4d90d347e52dafc6fb2a48e5054a"
let clientSecret = "LZLu7+5fvdiazGMcsKOHvY3p3mmmsSAMAqNAjzOich0DK/toyl4DFkNT4+6ZN5WTJEpQy7Eju8hfX1irEvW4gNEuPp519BHBa1CAV6mkfNEox4ay8kL5SkeYWV+Bi5uh"
let accessToken = "5a44d7f76fe08ecf329ee37152d61e56"

async function uploadVideo() {
  const client = new vimeo(clientId, clientSecret, accessToken)

  client.request({
    method: 'GET',
    path: '/tutorial'
  }, function (error, body, status_code, headers) {
    if (error) {
      console.log(error);
    }

    console.log(body);
  })
}

uploadVideo()
// const jwtClient = new google.auth.OAuth2(
//   serviceAccount.client_email,
//   null,
//   serviceAccount.private_key,
//   ['https://www.googleapis.com/auth/youtube.upload']
// );

// jwtClient.authorize((err) => {
//   if (err) {
//     console.error('Authorization error:', err);
//     return;
//   }

//   // Now, you can use jwtClient to upload a video
//   const youtube = google.youtube('v3');
//   const videoPath = './example.mp4'; // Update with your video path
//   const videoMetadata = {
//     snippet: {
//       title: 'Your Video Title',
//       description: 'Your Video Description',
//       tags: ['tag1', 'tag2'], // Optional: Add tags
//       categoryId: '22', // Optional: Set the video category (Entertainment in this case)
//     },
//     status: {
//       privacyStatus: 'private', // Set video privacy status (private, public, unlisted)
//     },
//   };

//   youtube.videos.insert(
//     {
//       auth: jwtClient,
//       part: 'snippet,status',
//       resource: videoMetadata,
//       media: {
//         body: fs.createReadStream(videoPath),
//       },
//     },
//     (err, response) => {
//       if (err) {
//         console.error('Error uploading video:', err);
//         return;
//       }
//       console.log('Video uploaded successfully. Video ID:', response.data.id);
//     }
//   );
// });