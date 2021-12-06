import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */
  app.get("/filteredimage/", (req: Request, res: Response) => {

    let { image_url } = req.query;

    // validate the image_url query
    if(!image_url){
      return res.status(400)
         .send(`You need specify the specific image url in order to complete your request`);
    }


    // filter the image
    filterImageFromURL(image_url).then(filtered_image_path => {
      res.status(200)
      // send the resulting file in response
      .sendFile(__dirname + `/util/tmp/${filtered_image_path}`, error => {
        // output any error message to user
        // delete the file on the server after sending the file
        if (error) {
          return res.status(400).send( { error_message: error })
        }
        else {
          deleteLocalFiles([__dirname + `/util/tmp/${filtered_image_path}`]);
        }
      });
    })
    .catch(error => {
      // output any error occured while processing the image
      return res.status(422).send( { message: error } );
    }); 
  });

  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();