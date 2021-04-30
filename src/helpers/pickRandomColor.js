const colors = ["blackAlpha", "gray", "red", "orange", "yellow", "green", "teal", "blue", "cyan", "purple", "pink", "linkedin", "facebook", "messenger", "whatsapp", "twitter", "telegram"];

const pickRandomColor = (usersData) => {
    let randomColor = colors[Math.round(Math.random() * colors.length)];
    const truthySameColor = usersData.some(user => user.value.color === randomColor);
    if (truthySameColor) pickRandomColor(usersData);
    return randomColor;
}
export default pickRandomColor;