document.addEventListener('DOMContentLoaded', () => {
    const facts = [
        { "fact": "Cats can make over 100 different sounds, while dogs can only make about 10." },
        { "fact": "A group of cats is called a clowder." },
        { "fact": "Cats sleep for 70% of their lives, which is why they are often seen lounging around." },
        { "fact": "The world's oldest cat lived to be 38 years old." },
        { "fact": "Cats have a special reflective layer behind their retinas called the tapetum lucidum, which helps them see in low light." },
        { "fact": "A cat's nose print is unique, much like a human's fingerprint." },
        { "fact": "Cats can rotate their ears 180 degrees, allowing them to hear in all directions." },
        { "fact": "The world's largest cat measured 48.5 inches long." },
        { "fact": "Cats have five toes on their front paws but only four on their back paws." },
        { "fact": "The average cat can jump up to six times its body length in one leap." }
    ];

    const factDisplay = document.getElementById('fact-display');
    const factButton = document.getElementById('fact-button');

    factButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * facts.length);
        factDisplay.style.transform = 'scale(0.9)';
        setTimeout(() => {
            factDisplay.textContent = facts[randomIndex].fact;
            factDisplay.style.transform = 'scale(1)';
        }, 150);
    });
});
