let participantCount = 1;


function participantTemplate(count) {
    return (
      `<section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
              <label for="fname"> First Name<span>*</span></label>
              <input id="fname" type="text" name="fname" value="" required />
            </div>
            <div class="item activities">
              <label for="activity">Activity #<span>*</span></label>
              <input id="activity" type="text" name="activity" />
            </div>
            <div class="item">
              <label for="fee">Fee ($)<span>*</span></label>
              <input id="fee" type="number" name="fee" />
            </div>
            <div class="item">
              <label for="date">Desired Date <span>*</span></label>
              <input id="date" type="date" name="date" />
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section>`)
}

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


function successTemplate(info) {
  return `<section class="success">
      <h2>Registration Successful</h2>
      <p>Thank you, ${info.adultName}, for registering! You have registered
      ${info.participantCount} participants and owe
       $${info.totalFee.toFixed(2)} in fees. </p>
        </section>`
}

function totalFees() {
  let feeElements = document.querySelectorAll("[id^=fee")
  console.log(feeElements)
  feeElements = [...feeElements]
  const totalFee = feeElements.reduce((total, element) => {
    return total + (parseFloat(element.value) || 0)
  }, 0)
  return totalFee
}