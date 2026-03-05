/* ---------------- LOAD DISTRICTS ---------------- */

async function loadDistricts(){
  const res = await fetch("/api/districts");
  const districts = await res.json();

  const select = document.getElementById("district");
  select.innerHTML = "";

  districts.forEach(d=>{
    const option = document.createElement("option");
    option.value = d;
    option.textContent = d.charAt(0).toUpperCase() + d.slice(1);
    select.appendChild(option);
  });
}

loadDistricts();


/* ---------------- GENERATE PLAN ---------------- */

document.getElementById("generate-btn").addEventListener("click", async ()=>{

  const district = document.getElementById("district").value;
  const days = document.getElementById("days").value;
  const startDate = document.getElementById("startDate").value;

  const res = await fetch("/api/itinerary",{
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({ district, days })
  });

  const data = await res.json();
  const resultBox = document.getElementById("itinerary-result");
  resultBox.innerHTML = "";

  if(!data.plan || data.plan.length===0){
    resultBox.innerHTML = "<p>No places found for this district.</p>";
    return;
  }

  let baseDate = new Date(startDate);

  data.plan.forEach((day,index)=>{

    let currentDate = new Date(baseDate);
    currentDate.setDate(baseDate.getDate()+index);

    const formattedDate = currentDate.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });

    const dayCard = document.createElement("div");
    dayCard.className="day-card";

    dayCard.innerHTML = `<h2>🗓️ Day ${day.day} – ${formattedDate}</h2>`;

    day.places.forEach(place => {

      const placeBlock = document.createElement("div");
      placeBlock.className="place-block";

      placeBlock.innerHTML = `
        <h3>📍 ${place.name}</h3>
        <p>${place.short || ""}</p>

        ${place.activities ? `
          <div class="info-section">
            <strong>🎯 Activities:</strong>
            <ul>
              ${place.activities.slice(0,3).map(a=>`<li>${a}</li>`).join("")}
            </ul>
          </div>` : ""}

        ${place.food ? `
          <div class="info-section">
            <strong>🍽 Nearby Food:</strong>
            <ul>
              ${place.food.slice(0,2).map(f=>`<li>${typeof f === "string" ? f : f.name}</li>`).join("")}
            </ul>
          </div>` : ""}

        ${place.stay ? `
          <div class="info-section">
            <strong>🏨 Stay Options:</strong>
            <ul>
              ${place.stay.slice(0,2).map(s=>`<li>${typeof s === "string" ? s : s.name}</li>`).join("")}
            </ul>
          </div>` : ""}

        <div class="button-row">
          <button onclick="window.open('https://www.google.com/maps?q=${place.location}','_blank')">
            📍 View Map
          </button>

          <button onclick="toggleReach(this)">
            🚗 How to Reach
          </button>
        </div>

        <div class="reach-box" style="display:none;">
          ${place.reach ? `
            <p><strong>Road:</strong> ${place.reach.road || ""}</p>
            <p><strong>Train:</strong> ${place.reach.train || ""}</p>
            <p><strong>Flight:</strong> ${place.reach.flight || ""}</p>
          ` : "No travel information available"}
        </div>
      `;

      dayCard.appendChild(placeBlock);
    });

    resultBox.appendChild(dayCard);
  });

});


function toggleReach(btn){
  const box = btn.parentElement.nextElementSibling;
  box.style.display = box.style.display === "none" ? "block" : "none";
}