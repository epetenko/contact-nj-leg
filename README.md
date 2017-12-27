# contact-nj-leg
A tool to lookup your New Jersey reps by your town.

This is a JQuery-based tool that allows New Jersey residents to enter their town and find their legislators. An example here: https://s3.amazonaws.com/nj-apps/Contact_nj_legislator/Contact_leg.html

Basic notes:
- The csv contains the data for the tool, as well as the json
- Contact_leg and Contact_sans_header are different designs of the same tool. Same with custom_2.css vs custom_3.css
- Main js code is in get_the_reps.js
- Used jquery.auto-complete.js for auto-complete, but there are plenty of other autocomplete libraries around. 

## How I built this
### Getting the reps
The [New Jersey legislature](http://www.njleg.state.nj.us/downloads.asp) publishes representation maps, but they do not have a simple way to get legislators by geographic area. To do that, I had to build the tool in a somewhat haphazard way. I downloaded the list of legislators for each district, which had to be manually updated, and manually added in emails based on an advocacy website. Then Chris Baxter copypasta'ed the list of municipalities and their districts to match up with the legislators. 
