# Node Reps! With Disgruntled Avians.

![angry birds](https://media.giphy.com/media/fKACOQcJ6LnTa/giphy.gif)

Today we learned how to organize an Express app using controllers and views. Express has a lot of setup. It can become easy to get lost. Constructing everything in an organized way is **key** to keeping track of everything. Lets practice by creating an app from scratch!

## Setup

The only file that has been provided is a module with the data. The rest is up to you to make!

## Completion

Parts 1 and 2.

## Assignment

### Part 1 - Set Up Your App

- `npm init` - Hit enter a bunch of times to accept the defaults
- `npm install express --save` and `npm install mustache-express --save`
- Set up your file structure
    - Make the following directories:
        - `controllers`
        - `public`
        - `views`
    - Create your `index.js` file
- Set up your `index.js` file. Require your packages, set up your app and view engine, and listen on your port. Create a root route to render a homepage. Look back at the grocery example we did today as a reference for the syntax.

### Part 2 - Functionality

Below is a description of what your app should contain. Reference the grocery lab we did in class to put all the parts together. 

#### Controllers

You will have 1 controller. It will handle all of the `/angry_birds` routes.
- When you go to `/angry_birds/` it should get all of the angry birds from the angry bird module and render the `angry_birds/index.html` view.
- When you go to `/angry_birds/:id` it should get that individual bird from the angry bird module and render the `angry-birds/show.html` view.


#### Views

You should end up with 3 views.
- `index.html` a home page with a link to `/angry_birds`
- `angry_birds/index.html` This view should have each bird's name and image visible, as well as a link to each bird's show page (`/angry_birds/:id`). There should also be a link back to `/`.
- `angry_birds/show.html` This should have a individual bird's name, ability, image, and group visible on the page as well as links back to `/` and `/angry_birds`

### Bonus - Filtering

Expand the filtering capabilities of the Angry Birds app

- Look up how to use [query parameters](https://expressjs.com/en/api.html#req.query) in express.
- Edit the `/angry_birds` route to handle query parameters of 'group', 'species', and 'feels'. It should render the angry birds that match ALL the criteria of our query parameters. For example `/angry_birds?feels=Cupcakes` will render a list with all of the birds that have feels that are equal to `Cupcakes`
- Start with testing just one parameter, then increment to exactly two, and then all three

## Submission

Homework is due by midnight tonight! Remember to work with each other and ask questions when you need it! 