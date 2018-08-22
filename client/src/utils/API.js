import axios from "axios";

export default {
    getContact: function () {
        return axios.get("/api/contactus");
    },
    saveContact: function (contactData) {
        return axios.post("/api/contactus", contactData);
    }
};