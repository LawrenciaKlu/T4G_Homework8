// function checkGender() {
//         let gender = prompt("What is your gender?");
//         if (gender == "male 👨🏼") {
//             alert("You are a man");
//         } else if (gender == "female") {
//             alert("You are a girl 👩🏼");
//         } 
//     }

    // checkGender()

    function checkGender(){
        let gender =prompt("What is your gender?");
        gender = gender .toLowerCase();

        if (gender =="female"){
        alert(`You are a ${gender}👩🏼`);
        } 
        else if (gender =="male"){
            alert(`You are a ${gender}👨🏼`);
        } 
        else {
            alert(`invalid input`)
        }
    }
    checkGender()
    