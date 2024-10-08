$(document).ready(function() {
    $('#calendar').evoCalendar({

        
        theme: "Midnight Blue",
            calendarEvents: [
              {
                id: 'Presentation', // Event's ID (required)
                name: "Group-A", // Event name (required)
                description:"Sachin & Yash, Topic-Generative AI",
                date: "Octobar/3/2024", // Event date (required)
                type: "holiday", // Event type (required)
                everyYear: true // Same event every year (optional)
              },
              {
                id: 'Presentation', // Event's ID (required)
                name: "Group-B", // Event name (required)
                description:"Subhlakshya Tyagi & Rishi Pandey, Topic-Metaverse",
                date: "Octobar/3/2024", // Event date (required)
                type: "holiday", // Event type (required)
                everyYear: true // Same event every year (optional)
              },
              {
                id: 'Presentation', // Event's ID (required)
                name: "Group-C", // Event name (required)
                description:"Nitish Kumar & Ujjwal Sharma, Topic-Neuralink: A Neuro-Technology",
                date: "Octobar/3/2024", // Event date (required)
                type: "holiday", // Event type (required)
                everyYear: true // Same event every year (optional)
              },
              {
                id: 'Presentation', // Event's ID (required)
                name: "Group-D", // Event name (required)
                description:"Vasvi soni & Saloni, Topic-BlockChain",
                date: "Octobar/9/2024", // Event date (required)
                type: "holiday", // Event type (required)
                everyYear: true // Same event every year (optional)
              },
              {
                id: 'Presentation', // Event's ID (required)
                name: "Group-C", // Event name (required)
                description:"Rajat dubey & Sourabh Chetan, Topic-Data Science",
                date: "Octobar/10/2024", // Event date (required)
                type: "holiday", // Event type (required)
                everyYear: true // Same event every year (optional)
              },
              {
                id: 'Presentation', // Event's ID (required)
                name: "Group-C", // Event name (required)
                description:"Rekhansh & Paras, Topic-Cyber-Security",
                date: "Octobar/10/2024", // Event date (required)
                type: "holiday", // Event type (required)
                everyYear: true // Same event every year (optional)
              },
              {
                name: "Vacation Leave",
                badge: "02/13 - 02/15", // Event badge (optional)
                date: ["February/13/2024", "February/15/2024"], // Date range
                description: "Vacation leave for 3 days.", // Event description (optional)
                type: "event",
                color: "#63d867" // Event custom color (optional)
              }
            ]
    })
})
