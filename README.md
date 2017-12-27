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

### Tool design
The tool's structure was based on a combination of [my national Congress lookup tool](http://www.nj.com/opinion/index.ssf/2017/05/are_your_interests_being_served_in_congress_use_this_tool_to_keep_track.html) and [my property taxes lookup tool](http://www.nj.com/data/2017/10/find_out_how_much_youd_save_if_you_had_amazons_mon.html). Backed by JQuery, I added in an autocomplete feature from [Pixabay](https://goodies.pixabay.com/jquery/auto-complete/demo.html), making it easier to automate town names rather than worry about correct spelling and terminology. With 565 towns, New Jersey has too many options for town names to let readers come up with their unique version — and the fact that there are four towns called Washington doesn't help.

The Javascript file reads in a JSON with the town names, districts and legislator info on page load. When a person fills in the textbox and clicks, the JS corresponds their entry to a key in the JSON and uses JQuery to insert new html information on that individual's reps.

### Exceptions (and future plans)
New Jersey has two municipalities where districts cross town lines: Newark and Jersey City. While I would have liked to return the exact reps for those municipalities based on ward or geographic information, I basically ran out of time. Instead, I had the code raise exceptions to those two towns, popping up a warning with a link to a NJ government map and adding the two different options for what district they could be in.
