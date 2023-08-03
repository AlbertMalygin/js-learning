// String Remaker
// String Remaker Variables
const stringRemakerInpt = document.querySelector('.strings-remaker__input');
const stringRemakerRslt = document.querySelector('.strings-remaker__result');
const stringRemakerBtn = document.querySelector('.strings-remaker__btn');




// String Remaker functional
function stringRemaker(string) {
  let vowels = 'ЁёУуЕеЫыАаОоЭэИиЮюЯяEeYyUuIiOoAa';
  let result = "";
  for(let i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) >= 0) {
      result += string[i];
    }
  }

  return result;
}


stringRemakerBtn.addEventListener('click', function () {
  stringRemakerRslt.textContent = stringRemaker(stringRemakerInpt.value);
});

//----------------------------------------------------------

//Worker Filter
//Worker Filter variables
const workerName = document.querySelector('.name__input');
const workerSalary = document.querySelector('.salary__input');
const addWorkerBtn = document.querySelector('.add-worker__btn');
const workerList = document.querySelector('.workers-list');
const filterBtn = document.querySelector('.filter__btn');
let workers = [
  {
    name: 'Сергей',
    salary: 2400
  },
  {
    name: 'Андрей',
    salary: 700
  },
  {
    name: 'Игорь',
    salary: 1500
  }
];
let filteredArray = [];

//Worker Filter functional
function showWorkers (workers) {  
  workerList.innerHTML = '';
  workers.forEach(worker => {
    let liName = document.createElement('li');
    let liSalary = document.createElement('li');
    let div = document.createElement('div');
    div.classList.add('line');
    liName.innerHTML = 'Имя: ' + worker.name;
    workerList.append(liName);
    liSalary.innerHTML = 'Зарплата: ' + worker.salary;
    workerList.append(liSalary);
    workerList.append(div);
  });
}

function salaryFilter(workers,num) {
  filteredArray = [];
  workers.forEach(worker => {
    if (worker.salary >= num) {
      filteredArray.push(worker);
    }
  });
}

showWorkers(workers);

addWorkerBtn.addEventListener('click', function() {
  let worker = {};
  worker.name = workerName.value;
  worker.salary = workerSalary.value;
  if(worker.name != '' && worker.salary != '' &&  worker.salary >= 0 && worker.salary <= 3000){
    workers.push(worker);  
    showWorkers(workers);
  } else {
    alert('Введите коректные данные');
  }
});

filterBtn.addEventListener('click', function() {
  salaryFilter(workers, 1000);
  showWorkers(filteredArray);
});

//--------------------------------------------------------------

// Extension Search
// Extension Search Variables
const extensionSearchInpt = document.querySelector('.extension-search__input');
const extensionSearchRslt = document.querySelector('.extension-search__result');
const extensionSearchBtn = document.querySelector('.extension-search__btn');
const extension = '.html';




// Extension Search functional
function extensionSearch(string, ext) {
  if (string == undefined) {
    return false;
  }
  return string.endsWith(ext);
}


extensionSearchBtn.addEventListener('click', function () {
  extensionSearchRslt.textContent = extensionSearch(extensionSearchInpt.value, extension);
});


//---------------------------------------------------------------

//Even numbers filter
// Even numbers filter variables
const evenNumFilterTxt = document.querySelector('.even-numbers-filter__txt');
const evenNumFilterRslt = document.querySelector('.even-numbers-filter__result');
const evenNumFilterBtn = document.querySelector('.even-numbers-filter__btn');
let numbers = [11, 52, 37, 12, 43, 42];
evenNumFilterTxt.textContent = 'Массив чисел: ' + numbers;

// Even numbers filter functional
function isEven(num) {
  return num % 2 == 0; 
}


evenNumFilterBtn.addEventListener('click', function () {
  let filteredArr = [];
  numbers.forEach(num => {
    if (isEven(num)) {
      filteredArr.push(num);
    }
  });

  evenNumFilterRslt.textContent = filteredArr;
});