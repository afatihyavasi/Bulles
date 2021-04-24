
const colors = ["whiteAlpha", "blackAlpha", "gray", "red", "orange", "yellow", "green", "teal", "blue", "cyan", "purple", "pink", "linkedin", "facebook", "messenger", "whatsapp", "twitter", "telegram"];

const pickRandomColor = (usersData) => {

    let randomColor =  colors[Math.round(Math.random() * colors.length)];

    usersData.forEach(user=>{
        if(randomColor == user.value.color) pickRandomColor(usersData);
    })
    return randomColor;
}


export default pickRandomColor;