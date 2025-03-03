const urlParams = new URLSearchParams(window.location.search);
const noteId = urlParams.get('noteId');

console.log(noteId);

const updateNoteButton = document.querySelector(".create-note-button");

const apiUrl = "https://notetaker-backend-connect.onrender.com";
const token = localStorage.getItem("jwt");

updateNoteButton.addEventListener("click", ()=> {
    const content = document.querySelector('.create-note-input').value;
    const heading = document.querySelector(".create-note-heading").value;

    if(token){
        fetch(`${apiUrl}/note/update/${noteId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                authorization: token,
            },
            body: JSON.stringify({ content, heading }),
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.message){
                location.href = "/pages/dashboard/dashboard.html";
            }
        })
        .catch((err) => {
            alert("Error Updating Note!!! Re-try....");
            console.log(err);
        });
    }
})