## Video API

Fetch information about YouTube and Vimeo videos.

### Usage

Use the `GET /video?q=<your query>` endpoint to fetch information about a video. The query can be a video id or a url. The returned data is in the following shape:

```
{
  id: string,
  title: string,
  views: number | null,
  likes: number,
  thumbnail: string,
}
```

Views of Vimeo videos are `null` because of [API key scope issues](https://github.com/vimeo/vimeo.php/issues/209#issuecomment-617482744).

### Running locally

#### Installation

To clone and install the project, run:

```
git clone https://github.com/tomek-ch/video-api
cd video-api
yarn
```

#### Environment variables

##### API keys

You need to provide YouTube and Vimeo API keys in order for the API to work. To do that create a `.env` file in the root directory and set the appropriate variables:

```
touch .env
echo "YT_API_KEY=<your yt api key>" >> .env
echo "VIMEO_API_KEY=<your vimeo api key>" >> .env
```

##### Client app

If you wish to connect a client app to the API, you also need to add its url as an environment variable to handle CORS:

```
echo "CLIENT_URL=<your app's url>" >> .env
```

If you are using [my front-end](https://github.com/tomek-ch/video-app-redux), set the variable to `http://localhost:3000`.

#### Run in development mode

To watch the TypeScript files, do:

```
yarn watch
```

And to run the compiled JavaScript on `http://localhost:4000`, run this command from another terminal:

```
yarn dev
```
