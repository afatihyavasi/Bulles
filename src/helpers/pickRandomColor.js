const colors = ["blackAlpha", "gray", "red", "orange", "yellow", "green", "teal", "blue", "cyan", "purple", "pink", "linkedin", "facebook", "messenger", "whatsapp", "twitter", "telegram"];

const pickRandomColor = (usersData) => {
    let randomColor = colors[Math.round(Math.random() * colors.length)];
    if (!usersData) return randomColor;
    const truthySameColor = usersData.some(user => user.value.color === randomColor);
    if (usersData.length === colors.length) return randomColor;
    if (truthySameColor) pickRandomColor(usersData);
    return randomColor;
}
export default pickRandomColor;