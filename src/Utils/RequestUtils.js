class RequestUtils {

    static getDomain() {
       return "https://blog-server-365.herokuapp.com";
     // return "http://localhost:5002"
    }

    /**
     * Make a GET request to the specified URL
     * @param {String} url
     * @returns 
     */
    static get(url, token) {

        return fetch(this.getDomain() + url, {
            method: "get",
            headers: {"Content-Type": "application/json", "Authorization": token}
        });
    }

    /**
     * Make a POST request to the specified URL with given JSON body
     * @param {String} url 
     * @param {JSONObject} object 
     * @returns 
     */
    static post(url, token, object) {

        return fetch(this.getDomain() + url, {
            method: "post",
            headers: {"Content-Type": "application/json", "Authorization": token}, 
            body: JSON.stringify(object)
        });
    }
}

export default RequestUtils;