// --------------- impoting the fucntions of the form validator ---------------
import formValidator from './formValidator.js';

// --------------- Variables declaration section ---------------
let sectionCounter = 1;
let nextBtn = document.querySelectorAll(".next-btn");
let previousBtn = document.querySelectorAll(".previous-btn");
let addWorkExperienceBtn = document.getElementById("add-work-button");
let workExperienceCount = 1;
let educationCount = 0;
let workToggle = document.querySelectorAll(".next-btn");
let addEducationBtn = document.getElementById("add-education-button");
let addTechnicalSkillBtn = document.getElementById(
  "technical-skills-add-button"
);
let addSoftSkillBtn = document.getElementById("soft-skills-add-button");
let addLanguageBtn = document.getElementById("add-languages-button");
let addCertificationBtn = document.getElementById("add-certification-button");
let doneFormBtn = document.getElementById("save-form-btn");
let savereResumeBtn = document.getElementById("save-resume-btn");

// --------------- Arrays declaration section ---------------
let personalInfo = [];
let workExperiences = [];
let education = [];
let technicalSkills = [];
let softSkills = [];
let links = [];
let languages = [];
let certifications = [];

// --------------- button with event listenners ---------------

nextBtn.forEach((btn) => {
  btn.addEventListener("click", goNextStep);
});

previousBtn.forEach((btn) => {
  btn.addEventListener("click", goPrvStep);
});

addWorkExperienceBtn.addEventListener("click", addWorkExperience);

addEducationBtn.addEventListener("click", addEducation);

addTechnicalSkillBtn.addEventListener("click", addTechnicalSkill);

addSoftSkillBtn.addEventListener("click", addSoftSkill);

addLanguageBtn.addEventListener("click", addLanguage);

addCertificationBtn.addEventListener("click", addCertification);

savereResumeBtn.addEventListener("click", saveResumePdf);

// --------------- fucntions building section ---------------

function goNextStep() {
  console.log("hello world");
  let actualSection = document.querySelector(
    `[data-section-count="${sectionCounter}"]`
  );
  let nextSection = document.querySelector(
    `[data-section-count="${sectionCounter + 1}"]`
  );

  let actualProgressbar = document.querySelector(
    `[data-progress-bar="${sectionCounter + 1}"]`
  );
  actualProgressbar.classList.add("progress-step-active");
  actualSection.classList.add("hidden");
  nextSection.classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "auto" });

  sectionCounter++;

  console.log(sectionCounter);
}

function goPrvStep() {
  console.log("hello world");
  let actualSection = document.querySelector(
    `[data-section-count="${sectionCounter}"]`
  );
  let previousSection = document.querySelector(
    `[data-section-count="${sectionCounter - 1}"]`
  );

  let actualProgressbar = document.querySelector(
    `[data-progress-bar="${sectionCounter}"]`
  );
  actualProgressbar.classList.remove("progress-step-active");

  actualSection.classList.add("hidden");
  previousSection.classList.remove("hidden");

  actualProgressbar.classList.remove("progress-step-active");

  sectionCounter--;
  window.scrollTo({ top: 0, behavior: "auto" });
  console.log(sectionCounter);
}

function addWorkExperience() {
  let workExperience = document.createElement("div");
  workExperience.classList.add("work-experience-item");

  workExperience.innerHTML = `
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div class="sm:col-span-2 flex justify-between items-center">
                <h3 class="text-xl font-semibold text-gray-900">Work Experience</h3>
                <button type="button" class="delete-button text-red-600 hover:text-red-800"><i class="fa-solid fa-trash"></i></button>
            </div>

            <div class="sm:col-span-2">
                <label for="role-title" class="block text-sm font-semibold text-gray-900">Role Title</label>
                <div class="mt-2.5">
                    <input type="text" name="role-title" class="role-title block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                </div>
            </div>

            <div class="sm:col-span-2">
                <label for="company-name" class="block text-sm font-semibold text-gray-900">Company Name</label>
                <div class="mt-2.5">
                    <input type="text" name="company-name" class="company-name block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                </div>
            </div>

            <div>
                <label for="start-date" class="block text-sm font-semibold text-gray-900">Start Date</label>
                <div class="mt-2.5">
                    <input type="date" name="start-date" class="start-date block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                </div>
            </div>

            <div>
                <label for="end-date" class="block text-sm font-semibold text-gray-900">End Date</label>
                <div class="mt-2.5">
                    <input type="date" name="end-date" class="end-date block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                </div>
            </div>

            <div class="sm:col-span-2">
                <label for="responsibilities" class="block text-sm font-semibold text-gray-900">Responsibilities and Actions</label>
                <div class="mt-2.5 flex items-center">
                    <input type="text" name="responsibilities" class="responsibilities block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm mr-2">
                    <button type="button" class="add-button px-3 py-3 flex justify-center items-center text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-inset focus:ring-indigo-500 rounded-md">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
                <ul class="responsibilities-list border border-solid border-black mt-4 list-disc pl-6 text-gray-700"></ul>
            </div>
            <div class="sm:col-span-2 flex justify-end">
                <button type="button" class="save-button w-full px-3 py-2 mt-2 mb-4 bg-green-800 text-white rounded">Save</button> 
            </div>
        </div>
    `;

  let workExperienceList = document.getElementById("work-experience-list");
  workExperienceList.appendChild(workExperience);

  let roleInput = workExperience.querySelector(".role-title");
  let companyInput = workExperience.querySelector(".company-name");
  let startDateInput = workExperience.querySelector(".start-date");
  let endDateInput = workExperience.querySelector(".end-date");
  let responsibilityPlusBTN = workExperience.querySelector(".add-button");
  let responsibilitiesList = workExperience.querySelector(
    ".responsibilities-list"
  );

  responsibilityPlusBTN.addEventListener("click", () => {
    let responsibilityValue =
      workExperience.querySelector(".responsibilities").value;

    if (responsibilityValue !== "") {
      let listItem = document.createElement("li");
      listItem.textContent = responsibilityValue;
      responsibilitiesList.appendChild(listItem);

      workExperience.querySelector(".responsibilities").value = "";
    }
  });

  let saveWorkExperienceBtn = workExperience.querySelector(".save-button");
  saveWorkExperienceBtn.addEventListener("click", () => {
    let workExperienceObj = {
      roleTitle: roleInput.value,
      companyName: companyInput.value,
      startDate: startDateInput.value,
      endDate: endDateInput.value,
      responsibilities: [],
    };

    responsibilitiesList.querySelectorAll("li").forEach((responsibility) => {
      workExperienceObj.responsibilities.push(responsibility.textContent);
    });

    workExperiences.push(workExperienceObj);

    console.log(workExperiences);
  });

  let deleteButton = workExperience.querySelector(".delete-button");
  deleteButton.addEventListener("click", () => {
    workExperienceList.removeChild(workExperience);
  });
}

function addEducation() {
  let educationList = document.getElementById("education-list");
  let educationItemContainer = document.createElement("div");
  educationItemContainer.classList.add("education-item");

  educationItemContainer.innerHTML = `
<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">


                        <div class="sm:col-span-2">
                            <label for="degree" class="block text-sm/6 font-semibold text-gray-900">Degree or
                                Qualification</label>
                            <div class="mt-2.5">
                                <select
                                    class="degree-type block w-full rounded-md border-0 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm mr-2"
                                    name="degree" id="degree-type">
                                    <option value="" selected>Select a degree</option>
                                    <option value="bachelor">Bachelor's Degree</option>
                                    <option value="master">Master's Degree</option>
                                    <option value="doctorate">Doctorate</option>
                                    <option value="certificate">Certificate</option>

                                </select>
                            </div>
                        </div>


                        <div class="sm:col-span-2">
                            <label for="major" class="block text-sm/6 font-semibold text-gray-900">Major</label>
                            <div class="mt-2.5">
                                <input type="text" name="major" id="major" autocomplete="given-name"
                                    class="major block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
                            </div>
                        </div>


                        <div class="sm:col-span-2">
                            <label for="school-university" class="block text-sm/6 font-semibold text-gray-900">School or
                                University Name</label>
                            <div class="mt-2.5">
                                <input type="text" name="school-university" id="school-university"
                                    autocomplete="given-name"
                                    class="university-name block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
                            </div>
                        </div>

                        <div>
                            <label for="studying-start-date" class="block text-sm/6 font-semibold text-gray-900">Start
                                Date</label>
                            <div class="mt-2.5">
                                <input type="date" name="studying-start-date" id="studying-start-date"
                                    autocomplete="given-name"
                                    class="start-date block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
                            </div>
                        </div>


                        <div>
                            <label for="studying-end-date" class="block text-sm/6 font-semibold text-gray-900">End
                                Date</label>
                            <div class="mt-2.5">
                                <input type="date" name="studying-end-date" id="studying-end-date"
                                    autocomplete="given-name"
                                    class="end-date block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
                            </div>
                        </div>

                        <hr class=" sm:col-span-2  h-1 bg-gray-900" >

                    </div>

`;

  educationList.appendChild(educationItemContainer);
}

function addTechnicalSkill() {
  let technicalSkillsInput = document.getElementById("technical-skills-input");
  let technicalSkillsList = document.getElementById("technical-skills-list");

  let technicalSkillValue = technicalSkillsInput.value;

  // ADd the hard skill to the list below the field  live
  if (technicalSkillValue !== "") {
    let technicalSkillItem = document.createElement("li");
    technicalSkillItem.textContent = technicalSkillValue;
    technicalSkillsList.appendChild(technicalSkillItem);

    technicalSkillsInput.value = "";
  }
}

function addSoftSkill() {
  let softSkillsInput = document.getElementById("soft-skills-input");
  let softSkillsList = document.getElementById("soft-skills-list");

  let softSkillValue = softSkillsInput.value;

  // ADd the soft skill to the list below the field  live
  if (softSkillValue !== "") {
    let softSkillItem = document.createElement("li");
    softSkillItem.textContent = softSkillValue;
    softSkillsList.appendChild(softSkillItem);

    softSkillsInput.value = "";
  }
}

function addLanguage() {
  let languagesList = document.getElementById("languages-list");
  let languageItem = document.createElement("div");
  languageItem.classList.add(
    "languages-item",
    "grid",
    "grid-cols-1",
    "gap-x-8",
    "gap-y-6",
    "sm:grid-cols-2",
    "mt-4",
    "border",
    "border-gray-500",
    "py-4",
    "px-4"
  );
  languageItem.innerHTML = `
     <div>
                                <label for="language-input"
                                    class="block text-sm/6 font-semibold text-gray-900">Language</label>
                                <div class="mt-2.5 relative">
                                    <input type="text" name="language-input"
                                        autocomplete="given-name"
                                        class="language-input block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
                                    <button type="button" id="trash-button"
                                        class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-red-600">
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                </div>

                            </div>

                            <div>
                                <label for="language-level"
                                    class="block text-sm/6 font-semibold text-gray-900">Level</label>
                                <div class="mt-2.5">
                                    <select name="language-level" 
                                        class="language-level block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
                                        <option value="">Select your Level</option>
                                        <option value="A1 (Beginner)">A1 (Beginner)</option>
                                        <option value="A2 (Elementary)">A2 (Elementary)</option>
                                        <option value="B1 (Intermediate)">B1 (Intermediate)</option>
                                        <option value="B2 (Upper Intermediate)">B2 (Upper Intermediate)</option>
                                        <option value="C1 (Advanced)">C1 (Advanced)</option>
                                        <option value="C2 (Proficiency)">C2 (Proficiency)</option>
                                    </select>
                                </div>
                            </div>
    `;

  languagesList.appendChild(languageItem);
}

function addCertification() {
  let certificationsList = document.getElementById("certifications-list");
  let certificationItem = document.createElement("div");
  certificationItem.classList.add(
    "certification-item",
    "grid",
    "grid-cols-1",
    "gap-x-8",
    "gap-y-6",
    "sm:grid-cols-2",
    "mt-4",
    "border",
    "border-gray-500",
    "py-4",
    "px-4"
  );
  certificationItem.innerHTML = `
    <div>
                                <label for="certificate-input"
                                    class="block text-sm/6 font-semibold text-gray-900">Certification</label>
                                <div class="mt-2.5 relative">
                                    <input type="text" name="certificate-input" id="certificate-input"
                                        autocomplete="given-name"
                                        class="certification-input block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
                                    <button type="button" id="trash-button"
                                        class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-red-600">
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                </div>

                            </div>

                            <div>
                                <label for="date-of-obtaining" class="block text-sm/6 font-semibold text-gray-900">Date
                                    of
                                    Obtaining</label>
                                <div class="mt-2.5">
                                    <input type="date" name="date-of-obtaining" id="date-of-obtaining "
                                        autocomplete="given-name"
                                        class="date-of-obtaining block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <label for="certification-link-input"
                                    class="block text-sm/6 font-semibold text-gray-900">Certificate Link</label>
                                <div class="mt-2.5 relative">
                                    <input type="text" name="certification-link-input" id="certification-link-input"
                                        autocomplete="given-name"
                                        class="certification-link-input block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
                                    <button type="button" id="trash-button"
                                        class="certification-link-input absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-red-600">
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                </div>

                            </div>
    `;

  certificationsList.appendChild(certificationItem);
}

// --------------- this function to show the resume with its information and give the ability to go back if any thing is wrong   ---------------
doneFormBtn.addEventListener("click", () => {
  // --------------- this one for the personal info section ---------------
  document.getElementById("save-button-section").classList.remove("hidden");

  personalInfo = [];
  let persoanlObj = {};
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let profileTitle = document.getElementById("role-title").value;
  let phoneNumber = document.getElementById("phone-number").value;
  let email = document.getElementById("email").value;
  let profileSummary = document.getElementById("profile-summary").value;

  persoanlObj.firstName = firstName;
  persoanlObj.lastName = lastName;
  persoanlObj.profileTitle = profileTitle;
  persoanlObj.phoneNumber = phoneNumber;
  persoanlObj.email = email;
  persoanlObj.profileSummary = profileSummary;

  personalInfo.push(persoanlObj);

  console.log(personalInfo);

  // --------------- this one for the education section ---------------

  education = [];

  let educationItems = document.querySelectorAll(".education-item");

  educationItems.forEach((edu) => {
    let obj = {};
    let degree = edu.querySelector(".degree-type").value;
    let major = edu.querySelector(".major").value;
    let universityName = edu.querySelector(".university-name").value;
    let startDate = edu.querySelector(".start-date").value;
    let endDate = edu.querySelector(".end-date").value;

    obj.degree = degree;
    obj.major = major;
    obj.universityName = universityName;
    obj.startDate = startDate;
    obj.endDate = endDate;

    education.push(obj);
  });
  console.log(education);

  // --------------- this one for the technical skills section ---------------
  technicalSkills = [];
  let technicalSkillsUl = document.querySelectorAll(
    "#technical-skills-list li"
  );
  technicalSkillsUl.forEach((skill) => {
    technicalSkills.push(skill.textContent);
  });
  console.log(technicalSkills);

  // --------------- this one for the soft skills section ---------------
  softSkills = [];
  let softSkillsUl = document.querySelectorAll("#soft-skills-list li");
  softSkillsUl.forEach((skill) => {
    softSkills.push(skill.textContent);
  });
  console.log(softSkills);

  // --------------- this one for the links section ---------------
  links = [];
  let linksList = document.querySelectorAll(".link-details");

  linksList.forEach((link) => {
    let obj = {};

    let label = link.querySelector("label").textContent;
    let value = link.querySelector("input").value;
    // let linkedInLabel = link.querySelector('.linkedin-label').textContent;
    // let linkedInInput = link.querySelector('.linkedin-input').value;
    // // // let gitHubLabel = link.querySelector('.github-label').textContent;
    // // // console.log(gitHubLabel);
    // // let gitHubInput = link.querySelector('.github-input').value;
    // // let behanceLabel = link.querySelector('.behance-label').textContent;
    // // let behanceInput = link.querySelector('.behance-input').value;
    // // let twitterLabel = link.querySelector('.twitter-label').textContent;
    // // let twitterInput= link.querySelector('.twitter-input').value;

    obj.label = label;
    obj.value = value;
    //  obj.linkedInLabel =  linkedInLabel;
    //  obj.linkedInInput = linkedInInput;
    // //  obj.gitHubLabel = gitHubLabel;
    // //  obj.gitHubInput = gitHubInput;
    // //  obj.behanceLabel = behanceLabel;
    // //  obj.behanceInput = behanceInput;
    // //  obj.twitterLabel = twitterLabel;
    // //  obj.twitterInput = twitterInput;

    links.push(obj);
  });
  console.log(links);

  // --------------- this one for the languages section ---------------
  languages = [];
  let languagesItems = document.querySelectorAll(".languages-item");

  languagesItems.forEach((lngItm) => {
    let obj = {};

    let language = lngItm.querySelector(".language-input").value;
    let languageLevel = lngItm.querySelector(".language-level").value;
    if (language == "" && languageLevel == "") {
      return;
    }
    obj.language = language;
    obj.level = languageLevel;

    languages.push(obj);
  });
  console.log(languages);

  // --------------- this one for the certifications section ---------------
  certifications = [];
  let certificationItems = document.querySelectorAll(".certification-item");

  certificationItems.forEach((crtf) => {
    obj = {};
    let certification = crtf.querySelector(".certification-input").value;
    let dateOfObtaining = crtf.querySelector(".date-of-obtaining").value;
    let certificationLink = crtf.querySelector(
      ".certification-link-input"
    ).value;

    if (certification == "" && dateOfObtaining == "") {
      return;
    }

    obj.certification = certification;
    obj.dateOfObtaining = dateOfObtaining;
    obj.certificationLink = certificationLink;

    certifications.push(obj);
  });
  console.log(certifications);

  // --------------- this one for the resume review section ---------------
  let cvContent = `
            <!-- Main Container -->
    <div class="max-w-6xl mx-auto my-8 bg-white border border-solid">
        <!-- Header Section with Gradient -->
        <div class="relative bg-gradient-to-r from-purple-900 to-indigo-800 p-12 text-white">
            <div class="max-w-4xl">
                <h1 class="text-5xl font-bold mb-3">${
                  personalInfo[0].firstName
                } ${personalInfo[0].lastName}</h1>
                <p class="text-xl font-light mb-6">${
                  personalInfo[0].profileTitle
                }</p>
                <div class="flex  flex-wrap gap-3 justify-start text-purple-200">
                    <div class="flex justify-start space-x-2">
                        <span>Email: </span>
                        <span>${personalInfo[0].email}</span>
                    </div>
                    <div class="flex items-start space-x-2">
                        <span>Phone: </span>
                        <span>${personalInfo[0].phoneNumber}</span>
                    </div>
                    ${links
                      .map(
                        (link) => `
                        <div class="flex items-start space-x-2">
                         <span>${link.label}: </span>
                        <span>${link.value} </span>
                    </div>
                    `
                      )
                      .join("")}
                </div>
            </div>
        </div>

        <!-- Main Content Grid -->
        <div class="grid grid-cols-12 gap-8 p-12">
            <!-- Left Column -->
            <div class="col-span-8 space-y-8">
                <!-- SUMMARY -->
                <section>
                    <div class="flex items-center mb-6">
                        <div class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-800">PRROFILE SUMMARY</h2>
                    </div>
                    <p class="text-gray-600 leading-relaxed pl-16">${
                      personalInfo[0].profileSummary
                    }</p>
                </section>

                <!--WORK Experience -->
                <section>
                    <div class="flex items-center mb-8">
                        <div class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-800">WORK EXPERIENCE</h2>
                    </div>
                   
                    
                    <div class="space-y-4 pl-16">
                    ${workExperiences.map(
                      (experience) => `
                        
                        <div class="relative pb-8 border-l-2 border-purple-200 pl-8">
                            <div class="absolute -left-2 top-0 w-6 h-6 bg-purple-600 rounded-full"></div>
                            <div class="mb-4">
                                <div class="flex justify-between items-center mb-2">
                                    <h3 class="text-xl font-bold text-gray-800">${
                                      experience.roleTitle
                                    }</h3>
                                    <span class="text-purple-600 font-semibold">${
                                      experience.startDate
                                    } - ${experience.endDate}</span>
                                </div>
                                <p class="text-gray-600 mb-4">${
                                  experience.companyName
                                }</p>
                                <ul class="space-y-2 text-gray-600">
                                ${experience.responsibilities
                                  .map(
                                    (respo) => `
                                <li class="flex items-start">
                                <span class="text-purple-600 mr-2">•</span>
                                ${respo}</li>
                                    `
                                  )
                                  .join("")}
                                    
                                </ul>
                            </div>
                        </div>

                    `
                    )}
                       

                        
                    </div>
                </section>
            </div>

            <!-- Right Column -->
            <div class="col-span-4 space-y-4">
                <!-- technical skills -->
                <section class="bg-gray-50 p-6 rounded-lg">
                    <div class="flex items-center mb-6">
                        <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                            <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                            </svg>
                        </div>
                        <h2 class="text-xl font-bold text-gray-800">HARD SKILLS</h2>
                    </div>
                    <div class="flex flex-wrap gap-2">
                    ${technicalSkills
                      .map(
                        (skill) => `
                        <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">${skill}</span>
                        `
                      )
                      .join("")}
                    </div>
                </section>
                <!-- soft skills -->
                <section class="bg-gray-50 p-6 rounded-lg">
                    <div class="flex items-center mb-6">
                        <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                            <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                            </svg>
                        </div>
                        <h2 class="text-xl font-bold text-gray-800">SOFT SKILLS</h2>
                    </div>
                    <div class="flex flex-wrap gap-2">
                    ${softSkills
                      .map(
                        (skill) => `
                        <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">${skill}</span>
                        `
                      )
                      .join("")}
                    </div>
                </section>

                <!-- Education -->
                <section class="bg-gray-50 p-6 rounded-lg">
                    <div class="flex items-center mb-6">
                        <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                            <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                            </svg>
                        </div>
                        <h2 class="text-xl font-bold text-gray-800">EDUCATION</h2>
                    </div>
                    <div>
                    ${education
                      .map(
                        (educa) => `
                        
                        <h3 class="font-bold text-gray-800 mb-1">${educa.degree} ${educa.major}</h3>
                        <p class="text-gray-600  mb-1">${educa.universityName}</p>
                        <p class="text-purple-600 font-medium">de ${educa.startDate} - ${educa.endDate}</p>
                        
                        `
                      )
                      .join("")}
                        
                    </div>
                </section>

                <!-- Languages -->
                <section class="bg-gray-50 p-6 rounded-lg">
                    <div class="flex items-center mb-6">
                        <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                            <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
                        </svg>
                    </div>
                    <h2 class="text-xl font-bold text-gray-800">LANGUAGES</h2>
                </div>
                <div class="space-y-4">

                ${languages
                  .map(
                    (language) => `
                        <div class="flex justify-between mb-1 border-b-2 pb-1">
                            <span class="text-gray-700 font-medium">${language.language}</span>
                            <span class="text-purple-600">${language.level}</span>
                        </div>
                        `
                  )
                  .join("")}
                </div>
            </section>

            <!-- Certifications -->
            <section class="bg-gray-50 p-6 rounded-lg">
                <div class="flex items-center mb-6">
                    <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                        <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                        </svg>
                    </div>
                    <h2 class="text-xl font-bold text-gray-800">CERTIFICATIONS</h2>
                </div>
                <ul class="space-y-3">
                    ${certifications
                      .map(
                        (certif) => `

                        <li class="flex flex-col border-b-2 pb-1">
                        <h5 class="font-medium text-gray-800">${certif.certification}</h5>
                        <p class="text-gray-600">${certif.dateOfObtaining}</p>
                        <a class="text-violet-800 hover:underline" href="${certif.certificationLink}">Link To Certificate</a>
                    </li>
                        
                        `
                      )
                      .join("")}
                    
                </ul>
            </section>
            
        </div>
    </div>
</div>
      `;

  document.getElementById("cv-preview-section").innerHTML = cvContent;
});

// --------------- this function to save the resum as a pdf flie and also in the foramt of A4  ---------------

function saveResumePdf() {
  const cvPreview = document.getElementById("cv-preview-section");

  html2canvas(cvPreview).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jspdf.jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    let position = 0;
    const pageHeight = pdf.internal.pageSize.getHeight();

    if (pdfHeight <= pageHeight) {
      // If content height is within a single page
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    } else {
      // If content height exceeds a single page
      while (position < pdfHeight) {
        pdf.addImage(imgData, "PNG", 0, -position, pdfWidth, pdfHeight);
        position += pageHeight;
        if (position < pdfHeight) {
          pdf.addPage();
        }
      }
    }

    pdf.save("resume.pdf");
  });
}

// --------------- this where we set up the form validation for each input in the form  ---------------

document.addEventListener("DOMContentLoaded", () => {
  let nameInput = document.getElementById("first-name");
  let form = document.getElementById("resume-form");
  let emailInput = document.getElementById("email");
  let phoneInput = document.getElementById("phone");
  let addressInput = document.getElementById("address");
  let ageInput = document.getElementById("age");
  let genderInput = document.getElementById("gender");

  //- i decided to make the validation when the event blur occurs instead of submit
  if (nameInput) {
    nameInput.addEventListener("blur", () =>
      formValidator.validateField("first-name", nameInput.value)
    );
  }
  if (emailInput) {
    emailInput.addEventListener("blur", () =>
      formValidator.validateField("email", emailInput.value)
    );
  }
  if (phoneInput) {
    phoneInput.addEventListener("blur", () =>
      formValidator.validateField("phone", phoneInput.value)
    );
  }
  if (addressInput) {
    addressInput.addEventListener("blur", () =>
      formValidator.validateField("address", addressInput.value)
    );
  }
  if (ageInput) {
    ageInput.addEventListener("blur", () =>
      formValidator.validateField("age", ageInput.value)
    );
  }
  if (genderInput) {
    genderInput.addEventListener("blur", () =>
      formValidator.validateField("gender", genderInput.value)
    );
  }


  if (form) {
    form.addEventListener("submit", (event) => {
      const isFormValid = formValidator.validateForm(form);
      if (!isFormValid) {
        event.preventDefault();
      }
    });
  }


});
