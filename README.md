# Connect to Spotify Playlist API

## About This Project
This project is based on Codecademy project - Jamming. 

The purpose is to build a website that can allow users to search for songs on Spotify and choose some of them to create a playlist in their Spotify accounts.

### Features
- Connect with Spotify via Oauth 2.0
- Implement multiple pages with React Router
- Responsive Website Design
- Use Redux to manage states
- Show 10 songs after searching by keywords
- Add and delete songs in a playlist easily
- Assign a name for your new playlist

### Built With
- HTML
- CSS
- React.js
- Redux

### Environment
- node - v18.17.1
- npm - 10.2.0

## Getting Started
1. Clone this repo
    ```
    git clone git@github.com:milan0801/connect-spotify-playlist.git
    ```
2. Change path
    ```
    cd connect-spotify-playlist
    ```
3. Install npm packages
    ```
    npm install
    ```
4. Create your own Spotify app in accordance with [this doc](https://developer.spotify.com/documentation/web-api/tutorials/getting-started#create-an-app)

    Note: We set Redirect URL as ```http://localhost:3001/spotify-playlist```.
5. Replace the variable of clientID with your own Client ID in ./src/pages/login.js
6. Execute
    ```
    npm start
    ```

## Demo


https://github.com/milan0801/connect-spotify-playlist/assets/65116786/a25a1997-01f6-40a0-9051-09a528d9a487

