function checkWords() {
    // Get the entered sentence from the input field and convert it to lowercase
    var sentence = document.getElementById('inputField').value.toLowerCase();

    // Check if the sentence contains specific words
    var hasWhat = sentence.includes('what');
    var hasName = sentence.includes('name');
    var hasWhere = sentence.includes('where');
    var hasLive = sentence.includes('live');
    var hasWaifu = sentence.includes('waifu');
    var hasFriend = sentence.includes('friend');
    var hasCollege = sentence.includes('college');
    var hasHow = sentence.includes('how');
    var hasWho = sentence.includes('who');
    var hasYou = sentence.includes('you');

    // Determine the response based on the presence of specific words
    if (hasWhat && hasName) {
        document.getElementById('response').textContent = 'My name is Dimas Aditya Pancasakti.';
    } else if (hasWhat && hasWaifu) {
        document.getElementById('response').textContent = "no, waifu is no";
    } else if (hasWhere && hasLive) {
        document.getElementById('response').textContent = "Nice try, i will not be doxxed, unless you asked for it very nicely";
    } else if (hasWho && hasWaifu) {
        document.getElementById('response').textContent = "no, waifu is no";
    } else if (hasWho && hasYou) {
        document.getElementById('response').textContent = "I am a person, trying to better the world, one step at a time";
    } else if (hasHow && hasYou) {
        document.getElementById('response').textContent = "";
    } else {
        document.getElementById('response').textContent = "i have no idea, try asking different, basic things";
    }
}
document.getElementById("altimage").addEventListener("click", function() {
    var image1 = document.getElementById("wesanderson");
    var image2 = document.getElementById("wesanderson2");

    image1.style.display = image1.style.display === "none" ? "block" : "none";
    image2.style.display = image2.style.display === "none" ? "block" : "none";
});

