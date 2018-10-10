# AJAX/API lab

## WEATHER ACTIVITY

1. make a route that takes a :zip as a URL param (`'/weather/:zip'`)
and `res.send()`s weather for that zip similarly ("The temperature for ... is ...")

2. make a `start.ejs` (in the views folder? yea! make a `views` folder and put it in there!). it should have a form where user can type in a zip and press enter or hit a button.

3. make your route from #1 render a template (instead of just res.send()ing a sentence) that has weather data put into it with EJS
    temperature
    current conditions
    an icon representing the weather 

4. make a route at `'/weather-five-day/:zip'` that renders a template with the forecast and the same info as the template for #3

### NICE YOU MADE A FULL STACK WEATHER APP

## PART TWO

* Find another API about something you are interested in. Suggestions (google them):
  * pokeapi.co -- all the info you ever needed about pokemon
  * newsApi.org
  * Chicago Open Data

* Do a little research and figure out what endpoint(s) has (or have) data that is of interest to you. Register and get a key or whatever.

* While you wait for the key to activate: 

  * Move all your weather stuff into a "weather controller" like we did in class today. 
  * Use partials to make a header for your site that should be there on every ejs page from now on.
  * In the header there'll be a link to the entire weather "section" of the site.
  * Also add a link to the new "section"

* Set up a controller for the new section, then build a "section" of the site that's similar to the weather:  It lets the user enter a query into a form on one page, then renders a different page with the data from the API based on that query displayed in some meaningful way.


