const cardDeck = [
    '1.GIF',
    '2.GIF',
    '3.GIF',
    '4.GIF',
    '5.GIF',
    '6.GIF',
    '7.GIF',
    '8.GIF',
    '9.GIF',
    '10.GIF',
    '11.GIF',
    '12.GIF',
    '13.GIF',
    '14.GIF',
    '15.GIF',
    '16.GIF',
    '17.GIF',
    '18.GIF',
    '19.GIF',
    '20.GIF',
    '21.GIF',
    '22.GIF',
    '23.GIF',
    '24.GIF',
    '25.GIF',
    '26.GIF',
    '27.GIF',
    '28.GIF',
    '29.GIF',
    '30.GIF',
    '31.GIF',
    '32.GIF',
    '33.GIF',
    '34.GIF',
    '35.GIF',
    '36.GIF',
    '37.GIF',
    '38.GIF',
    '39.GIF',
    '40.GIF',
    '41.GIF',
    '42.GIF',
    '43.GIF',
    '44.GIF',
    '45.GIF',
    '46.GIF',
    '47.GIF',
    '48.GIF',
    '49.GIF',
    '50.GIF',
    '51.GIF',
    '52.GIF',
    "jdeck.gif",
    "blank.gif"    
];

function generateRandomCard() {
    const randomIndex = Math.floor(Math.random() * cardDeck.length);
    const randomCard = cardDeck[randomIndex];
    
    document.getElementById('card-display').innerHTML = `<img src="./assets/images/${randomCard}" alt="Random Card">`;
}

function reset() {
    document.getElementById('card-display').innerHTML = '';
}
