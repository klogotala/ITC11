var idSetting = ["divLeft_Default","divLeft_CELinks","divLeft_ALinks","divLeft_RLinks","divRight","ls_Heading","rs_Heading"];

var home = {
    dispSettings : ["block","none","none","none"],
    innerHTMLSettings : ["Home link clicked. Defaul text displayed.","ITC-111","Intro to Programming <br>w/HTML, CSS & JavaScript"]
}
var classExercises = {
    dispSettings : ["none","block","none","none"],
    innerHTMLSettings : ["Defaul description for the Class Exercise Link.","Class Exercise Links","Exercise Description"]
}
var assignments = {
    dispSettings : ["none","none","block","none"],
    innerHTMLSettings : ["Defaul description for the Assignment Link.","Assignment Links","Assignment Description"]
}
var resources = {
    dispSettings : ["none","none","none","block"],
    innerHTMLSettings : ["Defaul description for the Resouce Link.","Resource Topics","Resource Catalouge"]
}
function changeLinkText(lnk) {
    let lnkObj;
    switch(lnk){
        case 'home':
            lnkObj = home;
            break;
        case 'classEx':
            lnkObj = classExercises;
            break;
        case 'assign':
            lnkObj = assignments;
            break;
        case 'resource':
            lnkObj = resources;
            break;
        default:
            break;
    }
    document.getElementById(idSetting[0]).style.display = lnkObj.dispSettings[0];
    document.getElementById(idSetting[1]).style.display = lnkObj.dispSettings[1];
    document.getElementById(idSetting[2]).style.display = lnkObj.dispSettings[2];
    document.getElementById(idSetting[3]).style.display = lnkObj.dispSettings[3];
    document.getElementById(idSetting[4]).innerHTML = lnkObj.innerHTMLSettings[0];
    document.getElementById(idSetting[5]).innerHTML = lnkObj.innerHTMLSettings[1];
    document.getElementById(idSetting[6]).innerHTML = lnkObj.innerHTMLSettings[2];
}
function changeDivRightText(txt) {  
    document.getElementById('rs_Heading').innerHTML = txt;
}

    case 'assign':
        document.getElementById('divLeft_Default').style.display = "none";
        document.getElementById('divLeft_CELinks').style.display = "none";
        document.getElementById('divLeft_ALinks').style.display = "block";
        document.getElementById('divLeft_RLinks').style.display = "none";
        document.getElementById('divRight').innerHTML = "Default description for Assignments Link.";
        document.getElementById('ls_Heading').innerHTML = "Assignments";
        document.getElementById('rs_Heading').innerHTML = "Assignment Brief";
    break;

    case 'resource':
        document.getElementById('divLeft_Default').style.display = "none";
        document.getElementById('divLeft_CELinks').style.display = "none";
        document.getElementById('divLeft_ALinks').style.display = "none";
        document.getElementById('divLeft_RLinks').style.display = "block";
        document.getElementById('divRight').innerHTML = "Default description for Resources Link.";
        document.getElementById('ls_Heading').innerHTML = "Resources";
        document.getElementById('rs_Heading').innerHTML = "Resources Examples";
    break;

    default:
        document.getElementById('divLeft_Default').style.display = "block";
        document.getElementById('divLeft_CELinks').style.display = "none";
        document.getElementById('divLeft_ALinks').style.display = "none";
        document.getElementById('divRight').style.display = "none";
    break;
    
    }
    // The innerHTML of the div to the right is also changed
    //document.getElementById('divRight').innerHTML = 'Content for the "Link 1" link.';
    // Any of an elements properties can be changed this way. Here the color is changed.
    //document.getElementById('divRight').style.color = 'red';
}
/*
    This function changed the text displayed by an element/tag. It takes a parameter 'txt'
    that is used to control what text to display depending on which link is clicked. This
    function is called whenever the text in the right div element needs to be changed.
*/
function changeDivRightText(txt) {
    // change the heading of the 'h2' tag in innerDivRight         
    document.getElementById('rs_Heading').innerHTML = txt;
}
