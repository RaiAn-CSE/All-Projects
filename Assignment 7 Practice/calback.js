function function1(function2, name) {
    function2(name);
}

function function2(name) {
    console.log('Good Morning', name);
}

function function3(name) {
    console.log('Good Night', name);
}

function1(function2, 'Raian');
function1(function2, 'Raian2');
function1(function3, 'Raian3');
