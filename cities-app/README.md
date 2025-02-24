Input, Process, and Output Analysis

Input

The user can enter the city details such as name of the city, country and population in a form using AddCity component. When a user fills out the form and clicks Add, the data that is input is saved into the component’s state with the help of the useState hook. The Submit function Disables page reload and adds the new city list from the child component through the onAddCity function.

Process

The city data processed in the form enters the parents App component cities array through an array-building loop that creates the updated list. The application shows city data by using the functionality of React Router. User interaction on CitiesList enables CityDetails to obtain city data from URL parameters including Index to show the details.

Output

The application will display city details including the name and country and population data through nested routing after selecting a city.Benefits of having a nested rotuing is that the city details can be displayed the same page without navigating through a different page .The app uses state management together with routing to update its content dynamically.
