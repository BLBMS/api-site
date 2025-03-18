async function getData() {
    const response = await fetch('https://apicc.42web.io/proxy.php?url=https://oneuser.com/data.json');
    if (!response.ok) {
        console.error("Napaka pri pridobivanju podatkov");
        return;
    }
    const data = await response.json();
    console.log("Prejeti podatki:", data);
}
getData();
