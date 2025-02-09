Input

The application takes user input through a text field where users can enter their tasks. 
The input is handled using the useState hook under React to store the task text. Users interact
with the input field by typing their task and clicking the Add Task button to submit it.Additionally,
users can remove a task by clicking the Delete button associated with each task under the list.

Process

When a user enters a task and clicks the Add Task button, the input is processed and added to an array of
tasks managed by the useState hook. The application dynamically updates the UI using React state management. 
If a user clicks Delete, the selected task is removed from the array, and the UI re-renders accordingly.

Output

The output is a dynamically updated list of tasks displayed on the screen. Each task appears as a styled item with
a delete button. Users see real-time updates when adding or removing tasks.
