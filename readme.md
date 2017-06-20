# Node Reps! With Disgruntled Avians.

![angry birds](https://media.giphy.com/media/fKACOQcJ6LnTa/giphy.gif)

Today we learned how to organize an Express app using MVC (**M**odel **C**ontroller **V**iews) format. Express has a lot of setup. It can become easy to get lost, especially once we start adding more controllers and models. Constructing everything in an organized way is **key** to keeping track of everything. Lets practice by creating an app from scratch!

## Setup

The only file that has been provided is the data. The rest is up to you to make!

## Assignment

### Set Up Your App

- `npm init` - Hit enter a bunch of times to accept the defaults
- `npm install express --save` and `npm install mustache-express` --save
- Set up your file structure
    - Make the following directories:
        - `controllers`
        - `models`
        - `public`
        - `views`
    - Create your `index.js` file
- Set up your `index.js` file. Require your packages, set up your app and view engine, and listen on your port. Look back at the planets example we did today as a reference for the syntax.

### Models

You will have 1 model. It will handle the angry bird data. It should include these functions:
- `getAll()` - Will get all of the angry birds.
- `getById(id)` - Will get the angry bird with the inputted id.

### Views

You should end up with 3 views.
- `index.html` a home page with a link to `/angry-birds`
- `angry-birds.html` This view should have each bird's name, ability, image, and group visible on the page, as well as a link to /angry-birds/BIRDS_ID. There should also be a link back to /.
- `angry-bird.html` This should have the bird's name, ability, image, and group visible on the page, as well as links back to / and /angry-birds


### Controllers

You will have 1 controller. It will handle all of the `/angry-birds` routes.
- When you go to `/angry-birds/` it should get all of the angry birds from the model and render the `angry-birds.html` view.
- When you go to `/angry-birds/:id` it should get that individual bird from the model and render the `angry-bird.html` view.

### Styling

- Create a `style.css` file in your public directory
- Link the file to your views
- Style your pages! Make it look nice. Include any images you want or other elements you want (e.g. marquee). Maybe some CSS Hover effects and gradients too. [Aim for this](https://www.lingscars.com/) if you need inspiration.

### Bonus

Now we're going to expand the filtering capabilities of the Angry Birds app

- Look up how to use [query parameters](https://expressjs.com/en/api.html#req.query) in express.
- Edit the /angry-birds route to handle query parameters of 'group', 'species', and 'feels'
- Start with testing just one parameter, then increment to exactly two, and then all three
- The page should render an angry bird that matches ALL the criteria of our query parameters - this is not about sorting them into any particular order

## Submission

Homework is due by **11:00 Tonight**! Remember to work with each other and go to TAs when you need it, but follow the [guidelines](https://git.generalassemb.ly/wdi-nyc-5-22/course-information/blob/master/how-to-queue-with-TAs.md) for queuing. Follow the normal [rules for homework submission](https://git.generalassemb.ly/wdi-nyc-5-22/course-information/blob/master/homework-policy.md), remember to include a link to your **repo**.
