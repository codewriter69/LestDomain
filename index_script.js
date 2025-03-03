//------------------Add dynamic quotes to the homepage------------------------------//

document.addEventListener('DOMContentLoaded', function() {
    // Comic and funny motivational quotes
    const quotes = [
        "You’re like a cloud. When you disappear, it’s a beautiful day!",
        "Don’t worry if you’re not where you want to be. Just stay there until you’re ready to run!",
        "If you don’t know where you’re going, any road will get you there.",
        "I’m on a seafood diet. I see food, and I eat it, but also I’m going to conquer my goals!",
        "I can’t adult today. But I can still change the world tomorrow.",
        "Coffee in one hand, confidence in the other, and a list of things I’ll ignore all day.",
        "You can’t be both fabulous and tired. Choose one, and I choose fabulous!",
        "Dream big, work hard, nap often.",
        "Procrastinate now, don’t put it off.",
        "If at first you don’t succeed, then skydiving definitely isn’t for you!",
        "My superpower is making to-do lists and then ignoring them.",
        "It’s never too late to become the person you could’ve been... or to take a nap.",
        "You don’t have to be great to start, but you do have to start to be great—eventually.",
        "Your mind is like a parachute; it works best when open—unless it’s skydiving day!",
        "Today is a good day to start fresh… after you finish that second cup of coffee.",
        "If life gives you lemons, make lemonade. Then find someone whose life gave them vodka and have a party.",
        "I’m not lazy, I’m just on energy-saving mode.",
        "You did a good job today. Or, at least, you didn’t set anything on fire.",
        "Running late is my cardio.",
        "Sometimes you just have to take a break, recharge, and remember you’re a boss!",
        "The road to success is always under construction. Hope you have a good car!",
        "You know what they say, if you don’t laugh, you’ll cry. But I prefer laughter!",
        "Get out there and live your best life. Or take a nap and live your best life from your couch.",
        "Why do we need to worry about the future? The future doesn’t have WiFi anyway.",
        "Follow your dreams… unless they’re in your bed, in which case, sleep in!",
        "Wake up with determination. Go to bed with satisfaction—or at least a good snack.",
        "Life is short, so make it sweet… or at least try to make it slightly less chaotic.",
        "It’s okay to not be okay, but it’s also okay to have a pizza as your therapy session.",
        "Remember, the early bird gets the worm… but the second mouse gets the cheese.",
        "You got this! Or at least, you’ll figure it out when you remember you got this.",
        "If at first you don’t succeed, try doing what your teacher told you to do.",
        "Don’t let yesterday take up too much of today, unless it was really good pizza.",
        "Chase your dreams, but be sure to take your coffee with you.",
        "Do what makes you happy, unless it’s eating an entire pizza alone—then do that, too.",
        "The best way to get ahead is to take a nap first. Priorities.",
        "The more you weigh, the harder you are to kidnap. Stay safe, eat cake!",
        "If you can’t convince them, confuse them. And then convince them you’ve got it under control.",
        "You're not weird, you're a limited edition!",
        "Work hard in silence, let your success make all the noise… but a little bit of jazz hands help.",
        "Your potential is endless… but don’t forget to take breaks.",
        "Life is short. Smile while you still have teeth.",
        "If you think nobody cares, try missing a couple of payments.",
        "Never trust a dog to watch your food.",
        "A day without sunshine is like, you know, night.",
        "If you can't convince them, confuse them.",
        "If you’re not supposed to eat midnight snacks, why is there even a light in the fridge?",
        "An apple a day keeps anyone away if you throw it hard enough.",
        "I am on a seafood diet. I see food, and I eat it.",
        "The early bird gets the worm, but the second mouse gets the cheese.",
        "Why don’t skeletons fight each other? They don’t have the guts.",
        "Why do they call it fast food when nothing about it is fast?",
        "The only time to be positive you’re in the right place is when you’re at the dentist.",
        "There are no bad days, only bad hair days.",
        "If you don’t like the road you’re walking, start paving another one.",
        "Exercise? I thought you said extra fries.",
        "Laziness is nothing more than the habit of resting before you get tired.",
        "A balanced diet means a cupcake in each hand.",
        "I used to play sports. Then I realized you can buy trophies. Now I’m good at everything.",
        "The road to success is dotted with many tempting parking spaces.",
        "I’m writing a book. I’ve got the page numbers done.",
        "I’m not procrastinating, I’m doing side quests.",
        "If at first you don’t succeed, skydiving is not for you.",
        "I may be a nightmare, but I’m your nightmare.",
        "The best time to plant a tree was 20 years ago. The second best time is now.",
        "Some graduate with honors, I am the honor.",
        "Behind every successful person is a substantial amount of coffee."
    ];

    // Select the container where the random message will be displayed
    const messageContainer = document.querySelector('.random-message-container');

    // Function to generate a random quote
    function getRandomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    // Function to animate typing effect
    function typeMessage(message) {
        let index = 0;
        messageContainer.textContent = ""; // Clear any existing text
        const typingInterval = setInterval(() => {
            messageContainer.textContent += message[index];
            index++;
            if (index === message.length) {
                clearInterval(typingInterval); // Stop the animation once all characters are typed
            }
        }, 100); // 100ms delay between each character
    }

    // Generate the random funny motivational quote and animate it
    const randomQuote = getRandomQuote();
    typeMessage(randomQuote);
});


//------------------End of Add dynamic quotes to the homepage------------------------------//

//------------------Paginate Posts-----------------------------//
const posts = [
    { title: "Post 1", url: "posts/post1.html" },
    { title: "Post 2", url: "posts/post2.html" },
    { title: "Post 3", url: "posts/post3.html" },
    { title: "Post 4", url: "posts/post4.html" },
    { title: "Post 5", url: "posts/post5.html" },
    { title: "Post 6", url: "posts/post6.html" },
    { title: "Post 7", url: "posts/post7.html" },
    { title: "Post 8", url: "posts/post8.html" }
];

const postsPerPage = 4;
let currentPage = 1;

function displayPosts() {
    const postList = document.getElementById("postList");
    postList.textContent = ""; // Clear list

    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    const paginatedPosts = posts.slice(start, end);

    paginatedPosts.forEach(post => {
        const li = document.createElement("li");
        li.insertAdjacentHTML("beforeend", `<a href="${post.url}">${post.title}</a>`);
        postList.appendChild(li);
    });

    document.getElementById("pageNumber").textContent = `Page ${currentPage}`;
    document.getElementById("prevPage").disabled = currentPage === 1;
    document.getElementById("nextPage").disabled = end >= posts.length;
}

document.getElementById("prevPage").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayPosts();
    }
});

document.getElementById("nextPage").addEventListener("click", () => {
    if (currentPage * postsPerPage < posts.length) {
        currentPage++;
        displayPosts();
    }
});

displayPosts(); // Load the first page