Input

The application starts with a pre-made list of films, each of which is represented as an object with properties like title, genre, and year of release. 
Additionally, a dropdown menu allows the user to filter movies by genre. The user can view all movies or choose particular genres with this interactive input.

Process

React's useState hook controls the state variable (selectedGenre), 
which is used by the application to process the input. The status is updated and the 
movie list is dynamically filtered to only show films that fit the user's chosen genre when they do so. 
No filtering is used if "All Genres" is chosen. Additionally, the program interprets user input, such as clicking a movie card, 
to produce an alert that shows the title of the film.

Output

Results
The software produces a list of films that are arranged visually. 
Each film's title, genre, and year of release are shown on a card. Depending on the genre the user chooses,
this list is updated dynamically. When a movie is clicked, alerts offer more interaction.

