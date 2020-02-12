// index.js
console.log("link");

let firebaseConfig = {
    apiKey: "AIzaSyAc-m81TUukWAe_KdJZlMDWGmDob1P7Whs",
    authDomain: "localhost",
    projectId: "tennahee-35037",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let gpa=0
let credit=0
let gpastr


$('#submit').click(()=>{
    checkinput()
    db.collection("users").add({
        subject: $('#subject').val(),
        gender:$('#gender').val(),
        Email: $('#email').val(),
        detail:$('#detail').val(),
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        $('#subject').val('')
        $('#gender').prop('checked', false);
        document.querySelectorAll('#gender')[1].checked=false
        document.querySelectorAll('#gender')[2].checked=false
        $('#email').val('')
        $('#detail').val('')
        
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    
})

db.collection("users").onSnapshot(doc=>{
    let table = $('tbody')[0]
    $('tbody tr').remove()
    doc.forEach(item=>{
        // let row= table.insertRow(-1)
        // let firstcell =row.insertCell(0)
        // let secondcell =row.insertCell(1)
        // let thirdcell =row.insertCell(2)
        
        // firstcell.textContent=item.data().subject
        // secondcell.textContent=item.data().grade
        // thirdcell.textContent=item.data().credit

        gpa +=item.data().grade*item.data().credit
        credit +=item.data().credit
        
    })
    // console.log("gpa:"+gpa+" credit:"+credit+" gpa/credit:"+(gpa/credit))
    
//   if (gpa/credit==4) {
//       gpastr='A'
//   }else if(gpa/credit>=3 && gpa/credit<4 ){
//       gpastr='B'
//   }else if(gpa/credit>=2 && gpa/credit<3){
//       gpastr='C'
//   }else if(gpa/credit==1 && gpa/credit<2){
//       gpstr='D'
//   }else{
//       gpastr='F'
//   }

   $('h4').text(gpa/credit)
})

db.collection('users').where('grade','>',3).get().then(res=>{
    res.forEach(item=>console.log(item.data()))
})

function resetinput(){
    $('#subject').val('')
        $('#gender').val('')
        $('#email').val('')
        $('#detail').val('')
        document.querySelectorAll('#gender')[0].checked=false
        document.querySelectorAll('#gender')[1].checked=false
        document.querySelectorAll('#gender')[2].checked=false
}
function checkinput() {
    if(document.querySelector('#subject').value==''){
        alert('checkname')
        
    }else if(document.querySelector('#email').value==''){
        alert('checkemail')
        
    }else if(document.querySelector('#detail').value==''){
        alert('checkdetail')
    }
}