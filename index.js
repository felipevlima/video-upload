
const Vimeo = require('vimeo').Vimeo

let clientId = "6d0dcf3523fd4d90d347e52dafc6fb2a48e5054a"
let clientSecret = "LZLu7+5fvdiazGMcsKOHvY3p3mmmsSAMAqNAjzOich0DK/toyl4DFkNT4+6ZN5WTJEpQy7Eju8hfX1irEvW4gNEuPp519BHBa1CAV6mkfNEox4ay8kL5SkeYWV+Bi5uh"
let accessToken = "5a44d7f76fe08ecf329ee37152d61e56"

const client = new Vimeo(clientId, clientSecret, accessToken)

async function uploadVideo() {
  let file_name = "./example.mp4"
  client.upload(
  file_name,
  {
    'name': 'Untitled23',
    'description': 'The description goes here.',
    'privacy': {
      "view": 'nobody'
    }
  },
  function (uri) {
    console.log('Your video URI is: ' + uri);
  },
  function (bytes_uploaded, bytes_total) {
    var percentage = (bytes_uploaded / bytes_total * 100).toFixed(2)
    console.log(bytes_uploaded, bytes_total, percentage + '%')
  },
  function (error) {
    console.log('Failed because: ' + error)
  }
)
}

uploadVideo()
