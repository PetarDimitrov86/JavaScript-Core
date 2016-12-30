function checkStart([main, subs]){
    return main.includes(subs);
}

console.log(checkStart(['How have you been?', 'how']));