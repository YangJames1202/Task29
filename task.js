var input = document.getElementsByTagName("input")[0];
var infoContent = document.getElementById("info");
var button = document.getElementById("validate");
function init(){
  button.onclick = validate;
}

function validate() {
    var inputValue = input.value;
    if (countLength(inputValue) == 0) {
      infoContent.innerHTML = '名称不能为空';
      infoContent.style.color = 'red';
    } else if (countLength(inputValue) >=4 && countLength(inputValue) <= 16) {
      infoContent.innerHTML = '格式正确';
      infoContent.style.color = 'lightgreen';
    } else {
      infoContent.innerHTML = '请输入长度为4~16位字符';
      infoContent.style.color = 'red'
    }
  }
function countLength(str) {
    var inputLength = 0;
    for (var i = 0; i < str.length; i++) {
      var countCode = str.charCodeAt(i);
      if (countCode >= 0 && countCode <=128) {
        inputLength += 1;
      } else {
        inputLength += 2;
      }
    }
    return inputLength;
  }
init();