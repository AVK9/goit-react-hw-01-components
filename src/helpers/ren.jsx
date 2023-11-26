export function rendColor() {
    let color = '#' + (Math.random() * 0x1000000 | 0x1000000).toString(16).slice(1);
    return color;
};

// function rendColor() {
//         const letters = '0123456789ABCDEF';
//         let color = '#';
//         for (let i = 0; i < 6; i++) {
//             color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
// }