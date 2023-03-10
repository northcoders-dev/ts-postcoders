# Postcoders

This is the take-home tech test for the R2 Factory / Northcoders Dev Incubator 2023 Front-end Software Engineer role.

We need you to fix some bugs and build some new features for our React app - Postcoders.

Please _read all the instructions_ before you start writing any code.

## The App - Postcoders

Postcoders is a React app that provides users with information about UK postcodes, by fetching data from the Zippopotamus API (https://api.zippopotam.us).

## Local Setup

-   You'll need node version 16 or above
-   Fork and clone this repo
-   Install dependencies (`npm install`)
-   Run locally (`npm run dev`)
-   Create a feature branch called `tech_test`, all changes you make should be committed to this branch (not the `main` branch).

## Your Tasks

After completing local setup and familiarising yourself with the code, there are six tasks to complete.

It’s important that you make individual commits for each task.

Please don’t spend more than 2 hours in total on the tasks. If you’re close to completing a task and running out of time, leave any comments relating to what you would have done with more time in the COMMENTS.md file.

### Firstly, three bugs:

1. The app doesn’t load properly, a pesky alert keeps popping up. Find out why and fix the root cause.

2. The output from the API call doesn't match the defined type for the data. Figure out what's wrong and fix the type.

3. Once the above is fixed, the app should display the number of areas/places per postcode but it’s stuck at 0. Debug it and find a fix.

### Then two features:

4. The app is pretty useless as it’s hard-coded to always return search results for “BB10”. Create a way for the user to provide the postcode they want results for. Only the “outcode” part of the postcode needs to be provided (e.g. “M1” rather than the full “M1 7ED”).

5. In addition to displaying the number of areas/places for a given outcode, display the data for each area/place and render it in a MUI Card (https://mui.com/material-ui/react-card/). You'll need to install a new npm package for this.

### And one performance improvement:

6. Reduce the number of API calls being made by using a cache. If the user queries “BB10” twice, couldn’t the user just be presented with the data from the first request when they make the second one?

## Submitting Your Tech Test

Open a pull request to the main branch of your repo (not the Northcoders repo!). This pull request will be reviewed, so please don’t merge it. Once you're ready for it to be reviewed, follow the instructions sent in the tech test invite email you've already received.

Reviewers will also clone your repo to check it works ok. They should only have to check out the “tech_test” branch and run “npm install” and “npm run dev” to start using the app.

## What We’re Looking For

✅ Completing all tasks is not a requirement, just do as much as you can in the 2 hour window

✅ Complete the tasks in order

✅ Your code should work and meet the requirements for each task

✅ Your code should be easy to read and have a clear control flow

✅ You should use version control correctly

✅ The UI doesn’t need to be beautiful to look at, only functional, consistent and clear. You may alter the existing CSS if needed

✅ Ask yourself ‘how difficult would it be for other software engineers to pick up where you left off and continue coding?’

✅ Leave comments such as "I would have done this if I had more time" in COMMENTS.md, if you wish.

❌ Additional features are fun, but in two hours you have enough work to get on with, and any further work will not score you additional points

❌ Solutions using alternative languages, libraries or frameworks (e.g. Angular, Vue) will not be considered.
