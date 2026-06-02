  let careersData = [];
let currentFile = "";


// ========================
// DOMAIN BUTTONS
// ========================

document
    .getElementById("engineeringBtn")
    .addEventListener("click", () => {
        loadData("engineering.json");
    });

document
    .getElementById("medicalBtn")
    .addEventListener("click", () => {
        loadData("medical.json");
    });

document
    .getElementById("financeBtn")
    .addEventListener("click", () => {
        loadData("finance.json");
    });
document
    .getElementById("consultingBtn")
    .addEventListener("click", () => {
        loadData("consulting.json");
    });
document
    .getElementById("s_mBtn")
    .addEventListener("click", () => {
        loadData("s_m.json");
    });
document
    .getElementById("riskBtn")
    .addEventListener("click", () => {
        loadData("risk.json");
    });
document
    .getElementById("supplychain_OperationsBtn")
    .addEventListener("click", () => {
        loadData("supplychain_Operations.json");
    });


// ========================
// LOAD JSON
// ========================

async function loadData(fileName) {

    currentFile = fileName;

    const response =
        await fetch(`data/${fileName}`);

    const data =
        await response.json();

    careersData =
        data.specializations;

    renderCareerCards();
}


// ========================
// SHOW ALL CAREERS
// ========================

function renderCareerCards() {

    const container =
        document.getElementById("career-list");

    container.innerHTML = "";

    careersData.forEach(career => {

        const card =
            document.createElement("div");

        card.className =
            "career-card";

        card.innerHTML = `
            <h2>${career.name}</h2>
            <p>${career.summary}</p>
        `;

        card.addEventListener("click", () => {
            showCareer(career);
        });

        container.appendChild(card);

    });

}


// ========================
// SHOW ONE CAREER
// ========================

function showCareer(career) {

    const container =
        document.getElementById("career-list");

    container.innerHTML = `

        <button id="backBtn">
            ← Back
        </button>

        <div class="hero">

            <h1>${career.name}</h1>

            <p>${career.summary}</p>

        </div>

        <div class="stats-row">

            <div class="stat-card">
                <h3>Difficulty</h3>
                <p>${career.difficulty}</p>
            </div>

            <div class="stat-card">
                <h3>Goal</h3>
                <p>${career.goals.join(",")}</p>
            </div>

            <div class="stat-card">
                <h3>Future Outlook</h3>
                <p>${career.futureOutlook}</p>
            </div>

        </div>

        <div class="info-grid">

            <div class="info-card">

                <h2>Best For</h2>

                <ul>
                    ${career.bestFor.map(item =>
                        `<li>${item}</li>`).join("")}
                </ul>

            </div>

            <div class="info-card">

                <h2>Avoid If</h2>

                <ul>
                    ${career.avoidIf.map(item =>
                        `<li>${item}</li>`).join("")}
                </ul>

            </div>

            <div class="info-card">

                <h2>Required Skills</h2>

                <ul>
                    ${career.requiredSkills.map(item =>
                        `<li>${item}</li>`).join("")}
                </ul>

            </div>

            <div class="info-card">

                <h2>College Importance</h2>

                <ul>
                    ${career.collegeImportance.map(item =>
                        `<li>${item}</li>`).join("")}
                </ul>

        </div>
        

        </div>

        <div class="info-grid">

            

        
        <div class="info-card">

                <h2>Family Advantage</h2>

                <ul>
                    ${career.familyAdvantage.map(item =>
                        `<li>${item}</li>`).join("")}
                </ul>

            </div>

            <div class="info-card">

                <h2>Qualifications</h2>

                <ul>
                    ${career.qualifications.map(item =>
                        `<li>${item}</li>`).join("")}
                </ul>

            </div>

        
        
        <div class="info-card">

            <h2>Reality Check</h2>

            <ul>
                ${career.realityCheck.map(item =>
                    `<li>${item}</li>`).join("")}
            </ul>

        </div>

        <div class="info-card">
            <h2>Career Growth</h2>

            <ul>
                ${career.careerGrowth.map(item =>
                    `<li>${item}</li>`).join("")}
            </ul>

        </div>
        </div>

        <div class="full-width">

            <h2>Salary</h2>

            <p><strong>Entry:</strong> ${career.salary.entry}</p>
            <p><strong>Mid:</strong> ${career.salary.mid}</p>
            <p><strong>Senior:</strong> ${career.salary.senior}</p>

        </div>

        <div class="info-grid">

    <div class="info-card">

        <h2>Day To Day Work</h2>

        <ul>
            ${career.dayToDayWork
                .map(item => `<li>${item}</li>`)
                .join("")}
        </ul>

    </div>

    <div class="info-card">

        <h2>Challenges</h2>

        <ul>
            ${career.challenges
                .map(item => `<li>${item}</li>`)
                .join("")}
        </ul>

    </div>

</div>

<div class="full-width">

    <h2>Roadmap</h2>

    <ul>
        ${career.roadmap
            .map(item => `<li>${item}</li>`)
            .join("")}
    </ul>

</div>


    `;

    document
    .getElementById("backBtn")
    .addEventListener("click", () => {
        renderCareerCards();
    });

}