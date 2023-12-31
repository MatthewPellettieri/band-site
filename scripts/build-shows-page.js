const api_key = "e7acfc16-afed-48d0-a469-a0a6c9fa3bd1";
const shows_url = 'https://project-1-api.herokuapp.com/showdates';

const concertsData = [
    {
       Date: "Mon Sept 06 2021",
       Venue: "Ronald Lane",
       Location: "San Francisco, CA" 
    },
    {
        Date: "Tue Sept 21 2021",
        Venue: "Pier 3 East",
        Location: "San Francisco, CA" 
    },
    {
        Date: "Fri Oct 15 2021",
        Venue: "View Lounge",
        Location: "San Francisco, CA"
    },
    {
        Date: "Sat Nov 06 2021",
        Venue: "Hyatt Agency",
        Location: "San Francisco, CA"
    },
    {
        Date: "Fri Nov 26 2021",
        Venue:"Moscow Center",
        Location: "San Francisco, CA"
    },
    {
        Date: "Wed Dec 15 2021",
        Venue:"Press Club",
        Location: "San Francisco, CA"
    }
]
const row = document.querySelector(".row--header");
// Creates Shows Header
const showsSection = document.querySelector(".shows");
const showsHeader = document.createElement("h1");
showsHeader.classList.add("shows__header");
showsHeader.textContent = "Shows";
showsSection.appendChild(showsHeader);

// Creates table
const tableDiv = document.createElement("div");
tableDiv.classList.add("table");
showsSection.appendChild(tableDiv);

// creates table header info and appends to showsSection
const tableHeader = document.createElement("div");
tableHeader.setAttribute("id", "table--header");
tableDiv.appendChild(tableHeader);
const tableDate = document.createElement("div");
const tableVenue = document.createElement("div");
const tableLocation = document.createElement("div");
tableDate.classList.add("header--cell");
tableVenue.classList.add("header--cell");
tableLocation.classList.add("header--cell");
tableDate.textContent = "DATE";
tableVenue.textContent = "VENUE";
tableLocation.textContent = "LOCATION";
tableHeader.appendChild(tableDate);
tableHeader.appendChild(tableVenue);
tableHeader.appendChild(tableLocation);

function createRowOnTable(showData) {
    const row = document.createElement("div");
    row.classList.add("row--header");
    tableDiv.appendChild(row);

    const dateCell = document.createElement("div");
    dateCell.classList.add("date--cell");
    const venueCell = document.createElement("div");
    venueCell.classList.add("cell");
    const locationCell = document.createElement("div");
    locationCell.classList.add("cell");
    const buttonCell = document.createElement("div");
    buttonCell.classList.add("button--cell");

    dateCell.textContent = showData.date;
    venueCell.textContent = showData.place;
    locationCell.textContent = showData.location;
    buttonCell.textContent = "BUY TICKETS";

    row.appendChild(dateCell);
    row.appendChild(venueCell);
    row.appendChild(locationCell);
    row.appendChild(buttonCell);
}

axios.get(`${shows_url}?api_key=${api_key}`)
.then((response) => {
    for (let i = 0; i < response.data.length; i++) {
        createRowOnTable(response.data[i]);
    }
    console.log(response.data);
});

row.addEventListener("click", (changeColor) => {
    row.backgroundColor = "#afafaf";
});
    