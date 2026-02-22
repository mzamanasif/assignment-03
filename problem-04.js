var fileName = "pdtData.df";

if(fileName.split('.')[1] === 'pdf' || fileName.split('.')[1] === 'docx' || fileName.startsWith('#') === true){
    console.log("Store");
}
else{
    console.log("Delete");
}
