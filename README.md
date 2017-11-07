Stopwatch is a web application developed to hold timing features such as:
-Start
-Pause
-Resume
-Reset
The application itself is able to add multiple instances of a stopwatch while
following a numbered naming convention. These provided names for each stopwatch
instance can be changed by the user if desired by simply clicking on the name
itself. Added stopwatch instances perform independently with responsive use
of buttons that affect each instance separately. The start/pause button was
contained to a single button to assist with issues of hitting the start button
when the stopwatch was already running. If the reset button is pressed while
the stopwatch is running and not paused, the stopwatch will reset but instantly
begin timing again. To reset the stopwatch to zero without an auto start,
pause the stopwatch and then proceed to reset. At first I thought this to be an
error but decided to leave it as the user may have a need for this action.

The development process itself was both challenging but also enjoyable. I very
much enjoy developing user interface experiences that are both pleasing to the
eyes and provide simple use but powerful results. As stated on the phone, I
do not have much experience with CSS outside of similar React Native styling.
The project presented itself as a good opportunity to delve into the styling
and I began to notice tremendous similarities. The stopwatch idea itself proved
to be an excellent demonstration of OOP that required method use but outside
function manipulation as well.

An issue I ran into was updating the DOM indefinitely but maintaining element
state. Originally I was using the element feature .innerHTML to update the
elements on the screen as the Add button was pressed. However, all state with
previously created stopwatch instances was lost. After looking through the DOM
web APIs I was able to find the insertAdjacentHTML() method to resolve this
issue. This is one major difference between web development and mobile
development element state that I have come across. The entire process of
updating in pieces that change like in React Native v. updating the entire DOM
like with web development is fascinating and a relatively simple fix as I
feel I understand DOM manipulation that much more.
