

# Image processing API

## Requires Changes
### Modify the prettier script 
### 

_an application that take a picture from the existing ones and resize it to any dimensions_

_walk through with the following steps_

- initialize files and directories structures:

--images
--processed_images

--src
  --routes
    resizeImageRoute.ts

  --tests
    --app.Spec.ts
      
    --utilities
      --is_image_there.Spec.ts
      --validate.Spec.ts
      
    --helpers
      --reporter.ts

    --utilities
      --error_parameters.ts
      --is_image_exist.ts
      --logger.ts
      --resize_image.ts
      --validate.ts
  --app.ts  
 


- __check the validation of the image using express-validation package:__
  - check image name that is exist in those images [
    'encenadaport',
    'fjord',
    'icelandwaterfall',
    'palmtunnel',
    'santamonica',
  ]
  - check image's width convert to number toInt() and is number isInt() exist as well exist()
  - check image's height convert to number toInt() and is number isInt() exist as well exist()

- check of there are any errors occurred from the validation queries

- check the image if is it already been processed before 

- resize the image to the new dimensions then move it to processed_images dir

- in the logger file:
  - initialize the query parameters with their types
  - check if the image not exist then wait for resizing the image
  - send the file

- in route file:
  - import validations 
    - add the query validations to api route.
  - import error parameters if there any error with query parameters
    - add the checker to api/route
  - import logger to add its logger function that send resized image 

- in app file:
  - import the route file and let app use it 
 
## ENDPOINT
 localhost:5000/api/resize/?imageName={string}&width={number}&height={number}

    
## Scripts 
- pretest: compile the application before testing ==> npx tsc
- jasmine: test the units ===> jasmine
- lint: check coding errors ===> eslint . --ext .ts
- lint-fix: fix coding errors ===> eslint . --ext .ts --fix
- formate : stylish code ===> "prettier --config .prettier --write src/**/*.ts"
- start : dev tool of nodemon ===> nodemon src/app.ts
- test: compile the code then test units ===> npm run pretest && npm run jasmine
