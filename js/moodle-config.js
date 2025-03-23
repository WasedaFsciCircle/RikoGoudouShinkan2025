//<![CDATA[
var M = {}; 
M.yui = {};
M.pageloadstarttime = new Date();
M.cfg = {
    "wwwroot":"https://wasedafscicircle.github.io/RikoGoudouShinkan2025/index.html",
    "homeurl":{},
    "sesskey":"Jl1ovKJsiS",
    "sessiontimeout":"14400",
    "sessiontimeoutwarning":1200,
    "themerev":"1741931123",
    "slasharguments":1,
    "theme":"boost",
    "iconsystemmodule":"core/icon_system_fontawesome",
    "jsrev":"1741931123",
    "admin":"admin",
    "svgicons":true,
    "usertimezone":"\u30a2\u30b8\u30a2\/\u6771\u4eac",
    "language":"ja",
    "courseId":1,
    "courseContextId":2,
    "contextid":4238777,
    "contextInstanceId":155452,
    "langrev":1741931123,
    "templaterev":"1741931123",
    "siteId":1
};

var yui1ConfigFn = function(me) {
    if(/-skin|reset|fonts|grids|base/.test(me.name)){
        me.type='css';
        me.path=me.path.replace(/\.js/,'.css');
        me.path=me.path.replace(/\/yui2-skin/,'/assets/skins/sam/yui2-skin')
    }
};

var yui2ConfigFn = function(me) {
    var parts=me.name.replace(/^moodle-/,'').split('-'),
        component=parts.shift(),
        module=parts[0],
        min='-min';
    
    if(/-(skin|core)$/.test(me.name)){
        parts.pop();
        me.type='css';
        min='';
    }
    
    if(module){
        var filename=parts.join('-');
        me.path=component+'/'+module+'/'+filename+min+'.'+me.type
    }else{
        me.path=component+'/'+component+'.'+me.type
    }
};

// YUIの設定（長さのためコメントアウト - 必要に応じて元のコードから復元）
// YUI_config = {...};

M.yui.loader = {modules: {}};

// その他の変数
var fabbuttonhtml = "\"<div class=\\\"learningtools-action-info\\\">...</div>\"";
var pagebookmarks = false;
//]]>

// FormatTopcollスクリプト
window.onload = function () {
    $('.format-topcoll ul li.section').has('.sectionbody ul li.activity').addClass('including-module');
};
