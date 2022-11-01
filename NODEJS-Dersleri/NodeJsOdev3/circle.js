const circleArea = r => {
    const alan = Math.PI * r ** 2;
    console.log(alan.toFixed(2));
}

const circleCircumference = r => {
    const cevre = Math.PI * 2 * r;
    console.log(cevre.toFixed(2))
}

module.exports = {
    circleArea,
    circleCircumference
}