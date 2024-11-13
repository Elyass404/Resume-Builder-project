// --------------- Variables declaration section ---------------
let sectionCounter = 1;
let nextBtn = document.querySelectorAll(".next-btn");
let addWorkExperienceBtn = document.getElementById("add-work-button");
let workExperienceCount = 1;
let educationCount = 0;
let workToggle = document.querySelectorAll(".next-btn");
let addEducationBtn = document.getElementById("add-education-button");
let addTechnicalSkillBtn = document.getElementById('technical-skills-add-button');
let addSoftSkillBtn = document.getElementById('soft-skills-add-button');

// --------------- Arrays declaration section ---------------
let perosonalInfo = [];
let workExperiences = [];
let education = [];
let technicalSkills = [];
let softSkills = [];
let links = [];
let languages = [];
let certificaitions = [];

// --------------- button with event listenners ---------------

nextBtn.forEach((btn) => {
  btn.addEventListener("click", goNextStep);
});

addWorkExperienceBtn.addEventListener("click", addWorkExperience);

addEducationBtn.addEventListener('click',addEducation)

addTechnicalSkillBtn.addEventListener('click', addTechnicalSkill)

addSoftSkillBtn.addEventListener('click', addSoftSkill)

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
let startDateInput = document.getElementById(`start-date-${workExperienceCount}`);
let endDateInput = document.getElementById(`end-date-${workExperienceCount}`);
let responsibilityPlusBTN = document.getElementById(`add-button-${workExperienceCount}`)
let workResponsibilities = document.querySelectorAll(`#responsibilities-list-${workExperienceCount} li`);



responsibilityPlusBTN.addEventListener('click',()=>{

            let responsibilitiesInputField = document.getElementById(`responsibilities-${workExperienceCount-1}`);
            let responsibilitiesList = document.getElementById(`responsibilities-list-${workExperienceCount-1}`);
            let responsibilityValue = responsibilitiesInputField.value;
            console.log(responsibilitiesList);
            

            // ADd the responsibliy to the list below the field  live 
            if (responsibilityValue !== '') {
                let listItem = document.createElement('li');
                listItem.innerHTML= responsibilityValue;
                listItem.textContent = responsibilityValue;
                responsibilitiesList.appendChild(listItem);

                responsibilitiesInputField.value = '';

            }
})

let saveWorkExperienceBtn = document.getElementById(`save-button-${workExperienceCount}`);
saveWorkExperienceBtn.addEventListener('click', ()=>{
    let workExperienceObj ={
        roleTitle : roleInput.value,
        companyName :companyInput.value,
        startDate : startDateInput.value,
        endDate : endDateInput.value, 
        responsibilities : []
    }

    workResponsibilities.forEach(responisibility =>{
        workExperienceObj.responsibilities.push(responisibility.textContent);
    })



    workExperiences[workExperienceCount-2]=workExperienceObj;
    
    console.log(workExperiences[0]);
    console.log(workExperienceCount);
    console.log(workExperiences);
    

})

workExperienceCount ++;

roleInput.addEventListener('input', updateTitle);
companyInput.addEventListener('input', updateTitle);

function updateTitle() {
    togglerTitle.innerHTML = `${roleInput.value} in ${companyInput.value}`;
}

}


function addEducation(){
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

`

educationList.appendChild(educationItemContainer);

}


function addTechnicalSkill(){

        let technicalSkillsInput = document.getElementById('technical-skills-input');
        let technicalSkillsList = document.getElementById('technical-skills-list');
        
        let technicalSkillValue = technicalSkillsInput.value;
        
        // ADd the responsibliy to the list below the field  live 
        if (technicalSkillValue !== '') {
            let technicalSkillItem = document.createElement('li');
            technicalSkillItem.textContent = technicalSkillValue;
            technicalSkillsList.appendChild(technicalSkillItem);

            technicalSkillsInput.value = '';

        }
}

function addSoftSkill(){

    let softSkillsInput = document.getElementById('soft-skills-input');
    let softSkillsList = document.getElementById('soft-skills-list');
    
    let softSkillValue = softSkillsInput.value;
    
    // ADd the responsibliy to the list below the field  live 
    if (softSkillValue !== '') {
        let softSkillItem = document.createElement('li');
        softSkillItem.textContent = softSkillValue;
        softSkillsList.appendChild(softSkillItem);

        softSkillsInput.value = '';

    }
}

// --------------- this one for the education section ---------------

let saveEducation = document.getElementById("save-education-btn");

saveEducation.addEventListener('click',()=>{

    
    education = [];

    let educationItems = document.querySelectorAll('.education-item');
    
    educationItems.forEach((edu)=>{
    let obj = {};
    let degree = edu.querySelector('.degree-type').value;
    let major = edu.querySelector('.major').value;
    let universityName = edu.querySelector('.university-name').value;
    let startDate = edu.querySelector('.start-date').value;
    let endDate = edu.querySelector('.end-date').value;

    obj.degree = degree;
    obj.major = major;
    obj.universityName = universityName;
    obj.startDate = startDate;
    obj.endDate = endDate;

    education.push(obj);

    
})
console.log(education);


// --------------- this one for the technical skills section ---------------
technicalSkills=[];
let technicalSkillsUl =  document.querySelectorAll('#technical-skills-list li');
technicalSkillsUl.forEach((skill)=>{
    technicalSkills.push(skill.textContent);
})
console.log(technicalSkills);


// --------------- this one for the soft skills section ---------------
softSkills=[];
let softSkillsUl =  document.querySelectorAll('#soft-skills-list li');
softSkillsUl.forEach((skill)=>{
    softSkills.push(skill.textContent);
})
console.log(softSkills);


// --------------- this one for the links section ---------------
links = [];
let linksList = document.querySelectorAll('.link-details');

linksList.forEach((link)=>{

    let obj = {};

    let label = link.querySelector('label').textContent;
    let value = link.querySelector('input').value;
    // let linkedInLabel = link.querySelector('.linkedin-label').textContent;
    // let linkedInInput = link.querySelector('.linkedin-input').value;
    // // // let gitHubLabel = link.querySelector('.github-label').textContent;
    // // // console.log(gitHubLabel);
    // // let gitHubInput = link.querySelector('.github-input').value;
    // // let behanceLabel = link.querySelector('.behance-label').textContent;
    // // let behanceInput = link.querySelector('.behance-input').value;
    // // let twitterLabel = link.querySelector('.twitter-label').textContent;
    // // let twitterInput= link.querySelector('.twitter-input').value;

     obj.label =  label;
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
     
})
console.log(links);


// --------------- this one for the languages section ---------------


})

