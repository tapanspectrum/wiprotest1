let newreferenceData = {
    "REF_MSISDN": "0406679321",
    "REF_IMSI": "50002312344314",
    "REF_SERVPROFID": "2"
  };


module.exports = function replaceData(item){
    if(typeof item.value == 'string' ){
        if(item.value.indexOf('{')!=-1){
            let substr = item.value.slice(item.value.indexOf('{'),item.value.indexOf('}') +1); 
            item.value = item.value.replace(substr,newreferenceData[substr.replace(/[{}]/g,'')]);
        }
    }else{
        item.value.map(replaceData);
    }
}