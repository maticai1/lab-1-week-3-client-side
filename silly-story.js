/* STEP 1: Declare and initialize variables */
const customName = document.getElementById("customName");
const randomize = document.getElementById("randomize");
const story = document.getElementById("story");

/* STEP 3: Create the variable that contains the story string that will be modified */
var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

/* STEP 4: Create arrays for the placeholders */
var insertX = ['Donald Trump', 'Jackie Chan', 'Santa Claus'];
var insertY = ['Area 51', 'Death Valley', 'Aruba'];
var insertZ = ['spontaneously combusted', 'rapidly sublimated', 'evaporated instantly'];

/* STEP 2: Function to randomly select a value from an array */
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/* STEP 6: Result function */
function result() {
    // STEP 7: Create a new variable called newStory and set it to the value of storyText
    var newStory = storyText;

    /* STEP 8: Generate random items for xItem, yItem, and zItem */
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    // STEP 9: Replace placeholders with random values
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    /* STEP 10: Replace 'Bob' with the custom name if provided */
    if (customName.value !== "") {
        var userName = customName.value;
        newStory = newStory.replace('Bob', userName);
    }

    /* STEP 11: Convert to metric if selected */
    if (document.getElementById("metric").checked) {
        // STEP 11a: Convert 300 pounds to kg (1 lb = 0.453592 kg)
        var weightInKg = (300 * 0.453592).toFixed(2);
        newStory = newStory.replace('300 pounds', `${weightInKg} kg`);

        // STEP 12a: Convert 94 fahrenheit to celsius (C = (F - 32) * 5/9)
        var tempInCelsius = ((94 - 32) * 5 / 9).toFixed(1);
        newStory = newStory.replace('94 fahrenheit', `${tempInCelsius} celsius`);
    }

    /* STEP 13: Output the final story */
    story.textContent = newStory;

    // Make the story visible
    story.style.visibility = "visible";
}

/* STEP 5: Add click event listener to generate the story */
randomize.addEventListener("click", result);
