import mockedData from "./mockedData.js";
const iframe = document.getElementById("destinationIframe");
iframe.onload = () => iframe.contentWindow.postMessage(mockedData, "*");
