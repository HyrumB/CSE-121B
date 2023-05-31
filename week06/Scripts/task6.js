//hyrum bullock 2023





async function openJson(){

    

    var url = 'gundams.json'

    const data = require(url);
    return data;
    // fetch(url).then((data) => data.json()).catch((error) => console.log(error))

    // const responce = await fetch(url);
    
    // if(responce.ok){
    //     const data = await responce.json();

    //     return data;
    // }

}


async function createObject(jsonFile){

    var rand = Math.floor(Math.random() * 4);

    var jsonDict = await jsonFile[rand];
    
        
    var gundamInfo = {};
    gundamInfo.title = jsonDict["gundamName"]
    gundamInfo.text = jsonDict["gundamText"]
    gundamInfo.img = jsonDict["gundamImgURL"]

    return gundamInfo;
}



function replacePageContent(gundamInfo, num){

    document.getElementById("gundTitle"+ num).textContent = gundamInfo.name;
    document.getElementById("textWall" + num).textContent = gundamInfo.text;
    document.getElementById("Gundimg"+ num).src = gundamInfo.img

}

gundamJson = openJson();

gundamObj = createObject(gundamJson);
replacePageContent(gundamObj, 1);

gundamObj = createObject(gundamJson);
replacePageContent(gundamObj, 2);

gundamObj = createObject(gundamJson);
replacePageContent(gundamObj, 3);