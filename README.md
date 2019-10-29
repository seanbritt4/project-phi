# project-phi
sean brittingham

NOTE: Project Phi is currently under development
  Project Phi is a web app using Node.js and its framework Express that will generate custom playlists for its users based on 
  input provided. These playlists may be exported to a users Spotify account if they wish to do so. Additionally, every playlist
  generated helps the neural net understand what our users enjoy the most, and is updated after every use.

features:
CURRENTLY Project Phi IS ABLE TO:
    *deploy a live version of the app to its heroku address (project-phi.herokuapp.com)
    *accept user input and send the to the server
    *parse received data and format for use
    *utilize its connected database
    *connect to Spotify via the spotify-web-node-api wrapper
    *return and display information on the webpage
  
Dev notes:
  -Project Phi is hosted on Heroku, a web app and server hosting platform (heroku.com). Its database is provisioned as a Heroku add-on
  by JawsDB.
  -Project Phi is developed in Node.js, using Express
  -Additional libraries that we are using at the moment include TensorFlow.js, and micheal thelin's spotify-web-node-api, a wrapper 
  for Spotify's web api.
  -Further, we have been granted access to use the Spotify api.
  -At this moment, due to limited database resources, we have limited the songs available to each playlist. We hope to someday expand
  our capacity in the regard.
  

  
TODO:
  \n-!!!database must be populated asap!!!
  \n-spotify stuff(user log in, export playlist to user profile, api calls on server)
  \n-neural net stuff (have placeholder nn for now, will need serious attention)
  \n-refined user input
  \n-*polish, polish, polish
  
