import { participantTemplate, successTemplate, totalFees } from "./Templates.mjs";
let participantCount = 1;


const addParticipantBtn = document.getElementById('add');
addParticipantBtn.addEventListener('click', () => {
  participantCount++;
  const newParticipant = participantTemplate(participantCount);
  addParticipantBtn.insertAdjacentHTML("beforebegin", newParticipant);
});


const registerForm = document.getElementById("register")
const summarySection = document.querySelector("#summary")
registerForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const totalFee = totalFees()
  console.log("Total Fee: ", totalFee)

  const adultName = document.getElementById("adult_name").value;

  registerForm.style.display = "none";
  summarySection.style.display = "block";
  summarySection.innerHTML = successTemplate({
    participantCount, 
    totalFee, 
    adultName
  })
});