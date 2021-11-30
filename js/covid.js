/* Javascript 샘플 코드 */
var xhr = new XMLHttpRequest();
var url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'UKJsbAvB%2Bm7PJ4EgZmpopHK9VlD6JUHyCdu8B%2BuhBZZj8iL0okDpXxwoHK65a624DSUIQkGUqs1NqBYFP12IvA%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
queryParams += '&' + encodeURIComponent('startCreateDt') + '=' + encodeURIComponent('20200310'); /**/
queryParams += '&' + encodeURIComponent('endCreateDt') + '=' + encodeURIComponent('20200315'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');
