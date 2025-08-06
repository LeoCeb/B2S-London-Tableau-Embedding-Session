console.log("Hello Back to School");

const viz = document.getElementById("tableauViz");

let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

const oregonWashingtonButton = document.getElementById("onw");
const clearFilterButton = document.getElementById("clear");
const undoButton = document.getElementById("undo");

// Logging workbook information
function logWorkbookInformation() {
  workbook = viz.workbook;
  console.log(`The workbooks name is ${workbook.name}`);

  let sheets = workbook.publishedSheetsInfo;
  sheets.forEach((element) => {
    index = element.index;
    console.log(`The sheet with index ${index} is: ${element.name}`);
  });

  vizActiveSheet = workbook.activeSheet;
  console.log(`The active sheet is: ${vizActiveSheet.name}`);

  listSheets = vizActiveSheet.worksheets;
  listSheets.forEach((element) => {
    index = element.index;
    console.log(`The worksheet with index ${index} is: ${element.name}`);
  });
}

//function to apply filters on all worksheets
function oregonWashFunction() {
  console.log(oregonWashingtonButton.value);

  listSheets.forEach((element) => {
    element.applyFilterAsync("State", ["Washington", "Oregon"], "replace");
  });
}
oregonWashingtonButton.addEventListener("click", oregonWashFunction);

//function to clear filters on all worksheets
function clearFunction() {
  listSheets.forEach((element) => {
    element.clearFilterAsync("State");
  });
}
clearFilterButton.addEventListener("click", clearFunction);

// function to undo
function undoFunction() {
  viz.undoAsync();
}
undoButton.addEventListener("click", undoFunction);

viz.addEventListener("firstinteractive", logWorkbookInformation);
