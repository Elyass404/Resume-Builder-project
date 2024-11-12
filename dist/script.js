// --------------- Variables declaration section ---------------
let sectionCounter = 1;
let nextBtn = document.querySelectorAll(".next-btn");
let addWorkExperienceBtn = document.getElementById("add-work-button");
let workExperienceCount = 1;
let workToggle = document.querySelectorAll(".next-btn");

// --------------- Arrays declaration section ---------------
let perosonalInfo = [];
let workExperience = [];
let education = [];
let technicalSkills = [];
let softSkills = [];
let languages = [];
let links = [];
let certificaitions = [];

// --------------- button with event listenners ---------------

nextBtn.forEach((btn) => {
  btn.addEventListener("click", goNextStep);
});

addWorkExperienceBtn.addEventListener("click", addWorkExperience);

// --------------- fucntions building section ---------------

function goNextStep() {
  console.log("hello world");
  let actualSection = document.querySelector(
    `[data-section-count="${sectionCounter}"]`
  );
  let nextSection = document.querySelector(
    `[data-section-count="${sectionCounter + 1}"]`
  );
  actualSection.classList.add("hidden");
  nextSection.classList.remove("hidden");
  sectionCounter++;
  window.scrollTo({ top: 0, behavior: "auto" });
  console.log(sectionCounter);
}



function addWorkExperience() {
  let workExperience = document.createElement("div");
  workExperience.classList.add("work-experience-item");

  // Create a unique ID for each work experience form
  let togglerId = `work-experience-toggle-${workExperienceCount}`;
  let workDetailsId = `work-experience-details-${workExperienceCount}`;


  workExperience.innerHTML = `
        <div class="w-full bg-yellow-400 py-3 text-2xl flex justify-between cursor-pointer" id="${togglerId}">
            <h3 id="toggler-title-${workExperienceCount}">Role title</h3>
            <div><i class="fa-solid fa-chevron-down mr-4"></i></div>
        </div>

        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 " id="${workDetailsId}">
            <div class="sm:col-span-2">
                <label for="role-title-${workExperienceCount}" class="block text-sm font-semibold text-gray-900">Role Title</label>
                <div class="mt-2.5">
                    <input type="text" name="role-title-${workExperienceCount}" id="role-title-${workExperienceCount}" autocomplete="given-name"
                        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                </div>
            </div>

            <div class="sm:col-span-2">
                <label for="company-name-${workExperienceCount}" class="block text-sm font-semibold text-gray-900">Company Name</label>
                <div class="mt-2.5">
                    <input type="text" name="company-name-${workExperienceCount}" id="company-name-${workExperienceCount}" autocomplete="given-name"
                        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                </div>
            </div>

            <div>
                <label for="start-date-${workExperienceCount}" class="block text-sm font-semibold text-gray-900">Start Date</label>
                <div class="mt-2.5">
                    <input type="date" name="start-date-${workExperienceCount}" id="start-date-${workExperienceCount}" autocomplete="given-name"
                        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                </div>
            </div>

            <div>
                <label for="end-date-${workExperienceCount}" class="block text-sm font-semibold text-gray-900">End Date</label>
                <div class="mt-2.5">
                    <input type="date" name="end-date-${workExperienceCount}" id="end-date-${workExperienceCount}" autocomplete="given-name"
                        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                </div>
            </div>

            <div class="sm:col-span-2">
                <label for="responsibilities-${workExperienceCount}" class="block text-sm font-semibold text-gray-900">Responsibilities and Actions</label>
                <div class="mt-2.5 flex items-center">
                    <input type="text" name="responsibilities-${workExperienceCount}" id="responsibilities-${workExperienceCount}" autocomplete="given-name"
                        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm mr-2">
                    <button type="button" id="add-button-${workExperienceCount}" class="px-3 py-3 flex justify-center items-center text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-inset focus:ring-indigo-500 rounded-md">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
                <ul id="responsibilities-list-${workExperienceCount}" class="border border-solid border-black mt-4 list-disc pl-6 text-gray-700">
                    <li>you coder</li>
                    <li>hello make the coffee</li>
                </ul>
                
            </div>
            <div class="sm:col-span-2 flex justify-end">
            <button type="button" id="save-button-${workExperienceCount}" class=" w-full px-3 py-2 mt-4 bg-green-800 text-white rounded">Save</button> 
            </div>
        </div>
    `;

  let workExperienceList = document.getElementById("work-experience-list");
  workExperienceList.appendChild(workExperience);

  
  let toggler = document.getElementById(togglerId);
  toggler.addEventListener("click", function () {
    let workDetails = document.getElementById(workDetailsId);
    workDetails.classList.toggle("hidden");
  });



let togglerTitle = document.getElementById(`toggler-title-${workExperienceCount}`);
let roleInput = document.getElementById(`role-title-${workExperienceCount}`);
let companyInput = document.getElementById(`company-name-${workExperienceCount}`);

roleInput.addEventListener('input', updateTitle);
companyInput.addEventListener('input', updateTitle);

function updateTitle() {
    togglerTitle.innerHTML = `${roleInput.value} in ${companyInput.value}`;
}

  workExperienceCount++;
}
