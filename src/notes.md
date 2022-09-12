this will be an app that will help me to keep track of when i need to change my pattern.

FUNCTIONALITY:
For now i'm thinking i will make it just be able to take two inputs: how often do i need a reminder, and what reminder do i wanna display. (and possibly how many rounds.) For desktop the app will listen for the space bar and know when a round was completed. 

STYLE: 
8bit, pink lavender and white. pale yellow star as the mascot, with little stars as decprators.
    Desktop: 
        - Hero is 100 vh,
        - Has a cute gif that matches the aesthetic(if not i can settle for just an image.), WELCOME 2 KNITTING BUDDY. - You scroll down and you see a for and a canvas dispaying "READY TO KNIT?" or a message from an array of fun introduction messages.
        - Form asks for the reminder you want displayed, how often, and optionally, for how many rounds. The submit button will diplay "Let's begin!" before the form is submitted, and "Happy knitting!" when the form is submitted. Immidiately after submitting a new project flow, the canvas says happy knitting, and waits for the user to hit space bar, indicating that they are finished with the round.

    Mobile: (i may not actualy make the mobile version)
        - also has 100vh hero,
        - has canvas and form in a column, ofc

CODE PLAN:
build this in react to take advantage of state.

for the main part, i will have a row containing a div that will be filled based on the state of 'canvasText', this will be set based on wether the form is submitted or not, SO upon submit it will change the text to something else.

    

Expansion can include: 
[]having a selection option but you can type in your own reminder.
[]planning out the entire project with knit buddy and setting up a form to generate a project flow. It will have a more complex form. like do what? (knit, purl, other (text input pops up if this is chosen)), how often?, how often, and a button to add another cycle with new instructions, to be ran after the first cycle. Cycles can be named? The projects can be saved and named to be done again another time, or for others to follow along to? That'd require some backend/databases.


DEV NOTES:

- yellow star png cred: <a target="_blank" href="https://icons8.com/icon/QyZp4Pat02yK/pixel-star">Pixel Star</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

- black star creds: <a target="_blank" href="https://icons8.com/icon/HAgRMYbvePOy/pixel-star">Pixel Star</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>