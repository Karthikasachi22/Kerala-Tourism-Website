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
  const interest = document.getElementById("interest").value;

  const res = await fetch("/api/itinerary",{
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({ district, days, interest })
  });

  const data = await res.json();

  const resultBox = document.getElementById("itinerary-result");
  resultBox.innerHTML = "";

  if(!data.plan || data.plan.length===0){
    resultBox.innerHTML = "<p>No places found for this district.</p>";
    return;
  }

  data.plan.forEach(day=>{
    const div=document.createElement("div");
    div.className="day-card";

    div.innerHTML=`
      <h3>Day ${day.day}</h3>
      <p>${day.activities}</p>
    `;

    resultBox.appendChild(div);
  });

});