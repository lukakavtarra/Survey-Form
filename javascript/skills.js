function addSkills() {


    var chosedSkill = document.getElementById("language-data ").value;
    var experience = document.getElementById("experience ").value
    if (chosedSkill !== '' && experience !== '') {
        // let div = document.getElementById("here").appendChild('p')
        let div = document.createElement('p');
        div.classList.add('language-set');
        let text = document.createTextNode(chosedSkill + " Years of Experience: " + experience);

        div.appendChild(text);
        document.getElementById("skillset").appendChild(div);
        // add remove button
        div.innerHTML += ' <button class="delete-button" onclick="Delete(this);"><img src="images/remove.png"</button>';

    }
}
// give remove button function
function Delete(currentEl) {
    currentEl.parentNode.parentNode.removeChild(currentEl.parentNode);
}