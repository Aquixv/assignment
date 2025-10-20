const lowerCase = () => {
    console.log(address.value)
    const text = address.value.toLowerCase();
    console.log(text)
    ShowLowercase.innerHTML = text
}
const trimtext = () => {
    const text = trimmed.value.trim();
    console.log(text)
    Showtrim.innerHTML = text
}
const discounts = () => {
    const text = items.value
    if(items.value % 2 === 0)
    { console.log(text + ' items are even')
        Showdiscounts.innerHTML = "your items are even so you get a 10% discount"}
    else{
        console.log(text +' items are uneven')
    Showdiscounts.innerHTML = "Your items are uneven so nothing for you"}
    }

    const ranges = () => {
    const text = temps.value
    if(temps.value < 19)
    { console.log(text + ' Cold')
        Showtemps.innerHTML = temps.value +'℃,'+ " Your temperature is cold"}

     else if   ( temps.value > 20 <=28 )
    { console.log(text + ' Warm')
        Showtemps.innerHTML = temps.value +'℃,'+" Your temperature is warm"}

    else{
        if( temps.value > 28 )
        console.log(text +' Hot')
    Showtemps.innerHTML =temps.value +'℃,'+" Your temperature is hot"}
    }
    const checkBMI = () => {
    if(height == '' || weight == '') {
        alert('Fill in the empty space(S)')
    } else {
        console.log(height, weight);
        const formula = Number(weight)/(Number(height)**2)
        console.log(formula);
        if(formula < 18.5) {
            showStatus.innerHTML = "You are underweight, you need to eat more"
        } else if(formula >= 18.5 && formula <= 24.9) {
            showStatus.innerHTML = "You are healthy, keep it up"
        } else if(formula >= 25 && formula <= 29.9) {
            showStatus.innerHTML = "You are overweight, keep it down"
        } else if(formula >= 30) {
            showStatus.innerHTML = "You are obese, hit the gym!"
        }
    }
}
 const names = () => {
    const text = usernames.value
    if(
        !(
            (text >= "a" && text <= "z") ||
        (text >= "A" && text <= "Z") || 
        (text >= "0" && text <= "9") ||
        text === '_')
    )
    { console.log(' your name is invalid')
        Check.innerHTML ="your name is invalid, correct it"}

    else{
console.log('your name is valid')
        Check.innerHTML =" your name is valid"}
    }
        const Luggage = () => {
    if(luggageweight.value == '') {
        alert('Fill in the empty space(S)')
    } else {
        const weightclass = Number(luggageweight.value)
        console.log(weightclass);
        if(weightclass < 20) {
            showweight.innerHTML = "underweight but allowed, you're safe."
        } else if(weightclass >= 20 && weightclass <= 30) {
            showweight.innerHTML = "Weight between normal range, Good to go."
        } else if(weightclass > 30) {
            showweight.innerHTML = "Reduce your luggage or get Arrested and tried!"
        }
    }
}
const checkemail = () => {
    const text = email.value
    if(email.value.endsWith("@oauife.edu.ng"))
    { console.log(text + ' email is correct')
        showmail.innerHTML = "Your email is correct! proceed"}
    else{
        console.log(text +' email is incorrect')
    showmail.innerHTML = "Your email is incorrect! fill it correctly."}
    }
            const checkgrade = () => {
    if(gradebox.value == '') {
        alert('Fill in the empty space(s)')
    } else {
        const gradeclass = Number(gradebox.value)
        console.log(gradeclass);
        if(gradeclass >= 0 && gradeclass <= 39) {
            showgrade.innerHTML = 'F' + " See you next year 😃"
        } else if(gradeclass >= 40 && gradeclass <= 49) {
            showgrade.innerHTML = 'D'+ " God saved you"
        } else if(gradeclass >= 50 && gradeclass <= 59) {
            showgrade.innerHTML = 'C' + " You pass"
        }
        else if(gradeclass >= 60 && gradeclass <= 69) {
            showgrade.innerHTML = 'B' + " You pass"
        }
        else if(gradeclass >= 70 && gradeclass <= 100) {
            showgrade.innerHTML = 'A' + " You pass"
        }
        else if(gradeclass > 100) {
            alert("Rest abeg ")
        }
    }
}
            const checkdiscount = () => {
    if(discountbox.value == '') {
        alert('Fill in the empty space(s)')
    } else {
        const discount = Number(discountbox.value)
        console.log(discount);
        if(discount < 5000) {
            showdisc.innerHTML = " No discount 😃"
        } else if(discount>= 10001 && discount <= 20000) {
            showdisc.innerHTML = "5% discount"
        } else if(discount >= 5000 && discount <= 10000) {
            showdisc.innerHTML = "10% discount"
        }
        else if(discount > 20000) {
            showdisc.innerHTML = "15% discount"
        }
    }
}
           const checkjamb = () => {
    if(JAMB.value == '') {
        alert('Fill in the empty space(s)')
    } else {
        const JAMBSCORE = Number(JAMB.value)
        console.log(JAMBSCORE);
        if(JAMBSCORE >= 280) {
            showjamb.innerHTML = "eligible for Medicine "
        } else if(JAMBSCORE >= 250) {
            showjamb.innerHTML = "eligible for engineering"
        } else if(JAMBSCORE >= 220) {
            showjamb.innerHTML = "eligible for sciences"
        }
        else if(JAMBSCORE >= 200) {
            showjamb.innerHTML = "eligible for Arts"
        }
    }
}
function checkAge() {

    const birthYear = Number(birthInput.value);

    const currentYear = 2025;

    const age = currentYear - birthYear;


    const output = ageResult

    if (age >= 18) {
        output.innerHTML = `✅ You are ${age} years old — old enough!`;
    } else {
        const yearsLeft = 18 - age;
        output.innerHTML = `❌ You are ${age} years old — you need ${yearsLeft} more year${yearsLeft > 1 ? "s" : ""} to be 18.`;
    }
}