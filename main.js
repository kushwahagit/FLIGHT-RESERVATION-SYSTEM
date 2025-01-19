const logou = document.getElementById('userlogo');
const navhome = document.getElementById("homepage");
const logout = document.getElementById("logout");

const retrievedValue = localStorage.getItem("shareduname");
const takename = retrievedValue;
if(takename){
    logou.innerHTML = takename;
}


logout.addEventListener('click',function(e){
    
    e.preventDefault
    window.location.href = 'login.html';
    localStorage.clear();
    
})



const checkbtn = document.getElementById('checkbtn');
const onboarding = document.getElementById('onboarding');
const destination = document.getElementById('destination');
const error = document.getElementById('error');

checkbtn.addEventListener('click',function(e){
    e.preventDefault();
    if ((onboarding.value === '' || onboarding.value == null) && (destination.value === '' || destination.value == null)) {
        alert("Onboarding & Destination must be filled");
        onboarding.focus();
    }
    else if(onboarding.value === '' || onboarding.value == null) {
        alert("Onboarding cannot be empty");
        onboarding.focus();
    }
    else if (destination.value === '' || destination.value == null) {
        alert("Destination cannot be empty");
        destination.focus();
    }
    else{
        const resultsSection = document.getElementById('results-section');
        resultsSection.innerHTML = '';


        const timings = [
            { start: '10:00 AM', duration: '2h 30m',Arrival : '12:30 PM' ,company: 'Air Asia' },
            { start: '12:00 PM', duration: '3h 00m',Arrival : '3:00 PM' ,company: 'Fly Emirates' },
            { start: '02:00 PM', duration: '2h 45m',Arrival : '4:45 PM' ,company: 'IndiGo' },
            { start: '05:00 PM', duration: '3h 15m',Arrival : '8:15 PM' ,company: 'Jet Airways' },
            { start: '08:00 PM', duration: '2h 50m',Arrival : '10:50 PM' ,company: 'Vistara' },
            { start: '08:00 PM', duration: '2h 50m',Arrival : '10:50 PM' ,company: 'Vistara' },
            { start: '08:00 PM', duration: '2h 50m',Arrival : '10:50 PM' ,company: 'Vistara' },
            { start: '08:00 PM', duration: '2h 50m',Arrival : '10:50 PM' ,company: 'Vistara' },
            { start: '08:00 PM', duration: '2h 50m',Arrival : '10:50 PM' ,company: 'Vistara' },
        ];

        timings.forEach((flight, index) => {
            const flightCard = document.createElement('div');
            flightCard.classList.add('result-card');
            flightCard.innerHTML = `
                <div class="leftcard">
                    <h3>${flight.company}</h3>
                    <div class = "carddetails">
                        <p><strong>Departure:</strong> ${flight.start}</p>
                        <p><strong>Landing:</strong> ${flight.Arrival}</p>
                        <p><strong>Duration:</strong> ${flight.duration}</p>
                    </div>
                </div>
                <div class = "rightcard">
                    <button class="bookbtn">Book</button>
                </div>
            `;
            resultsSection.appendChild(flightCard);
        });
    }
})

const clearinputon = document.getElementById('clearinputon');

clearinputon.addEventListener('click',function(e){
    e.preventDefault();
    onboarding.value = ''; // Clear the input field
    onboarding.focus(); 
})

const clearinputde = document.getElementById('clearinputde');

clearinputde.addEventListener('click',function(e){
    e.preventDefault();
    destination.value = '';
    destination.focus(); 
})
