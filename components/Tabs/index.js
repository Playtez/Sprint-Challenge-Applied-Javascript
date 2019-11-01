// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const insertTopic = document.querySelector(".topics");
// function append

axios //
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(res => {
        res.data.topics.map(item => {
            insertTopic.appendChild(Tab(item));
        });
    })
    .catch(err => {
        console.log("the error lies after this ", err);
    });

function Tab(text) {
    const topic_D = document.createElement("div");
    topic_D.classList.add("tab");
    topic_D.textContent = text;

    return topic_D;
}