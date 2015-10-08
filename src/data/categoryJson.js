// core 언어 Json

var coreTagsColor = {
    html:"#777",
    javascript:"#337ab7",
    css:"#5bc0de",
    nodejs:"#5cb85c",
    tools:"#f0ad4e"
};

// 대표사이트
var officialListUrl = "https://spreadsheets.google.com/feeds/list/1YTV7T8MQlB9yH0duq7gU5vMuGQjO8hoLaFWDeO2JkaY/1/public/values?alt=json";
var officialFormUrl = "https://script.google.com/macros/s/AKfycbxMFTqL9C18OHiO1y3n0KNkC8RYOFhwdcaGI5_gudviIYtKNdE/exec";
var officialFormDataFormat = {tags:"",name:"",desc:"",url:"",r_name:"",r_email:"",};
var officialTagsColor = coreTagsColor;

// 플러그인 사이트
var pluginListUrl = "https://spreadsheets.google.com/feeds/list/1NWla4CgS3gmdZAjOet4x33D0g-nUWmDzlff17tbGy2U/1/public/values?alt=json";
var pluginFormUrl = "https://script.google.com/macros/s/AKfycbziDbyYBy5q_wyXLdAkvePXu5iJol5ct6zjMANG875g22z_xhn_/exec";
var pluginFormDataFormat = {tags:"",name:"",desc:"",url:"",r_name:"",r_email:"",};
var pluginTagsColor = coreTagsColor;

// 게시물
var postsListUrl = "https://spreadsheets.google.com/feeds/list/1nCCNrEVfhM3geRqxsE_OjEnXa1Fm3GH1YOaIPTawiIk/1/public/values?alt=json";
var postsFormUrl = "https://script.google.com/macros/s/AKfycbz2WWqIarop22AaNIVlIzWDqiOHK-wCr-V5sbEsy1heQLQ8eklU/exec";
var postsFormDataFormat = {lang:"",title:"",url:"",r_name:"",r_email:"",};
var postsTagsColor = {kor:"kor",eng:"eng"};