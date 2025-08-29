1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
The difference between them is:
**getElementById:** It selects an element with its unique ID. It returns an HTMLElement or null.
**getElementsByClassName:** It selects all of the elements with the same class name. It returns HTMLCollection.
**querySelector:** t selects the first element of its CSS selector. It returns HTMLElement and null.
**querySelectorAll:** It selects all the elements of the CSS selector. It returns a NodeList. 

2. How do you **create and insert a new element into the DOM**?
TO create a new element in the DOM, write `const newElementName = document.createElement('tagName');`. Here, tagName will be the element's tag which we want to create and the newElementName is where the element will stay.
To insert this into an element, write `parentEl.appendChild(newElementName);`. This will add the new element to the parentEl.

3. What is **Event Bubbling** and how does it work?
Events start from a target element,than it bubbles up or propagates to it's parent than grand-parent....document(The DOM tree).This process is called Event Bubbling and this is how it works.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Event Delegation is a technique where event listener is added to parent element rather than child element. There could be huge number of child element which can make the debug process log and takes a lot memory. By using event delegation, it could be reduced to just one single function.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
preventDefault() and stopPropagation() are method of event. preventDefault() prevent the browser's default behaviour and stopPropagation() stops the event bubbling in the dom tree.
