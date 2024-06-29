
function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        message: document.getElementById("message").value
    };
    const serviceID = "service_1wphvq8";
    const templateID = "template_1uq6896";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("address").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert('your message sent successfully');
        })
        .catch((err) => console.log(err));
}

// function sendMail() {
//     var params = {
//       name: document.getElementById("name").value,
//       email: document.getElementById("email").value,
//       address: document.getElementById("address").value,
//       message: document.getElementById("message").value,
//     };
  
//     const serviceID = "service_1wphvq8";
//     const templateID = "template_1uq6896";
  
//     emailjs.send(serviceID, templateID, params)
//       .then((res) => {
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("address").value = "";
//         document.getElementById("message").value = "";
//         console.log(res);
//         alert("Your message sent successfully!!")
  
//       })
//       .catch((err) => console.log(err));
  
//   }
  
  