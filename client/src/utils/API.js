import axios from "axios";

export default {
    getContact: function () {
        return axios.get("/api/contactus");
    },
    saveContact: function (contactData) {
        return axios.post("/api/contactus", contactData);
    },
    getBooking: function () {
        return axios.get("/api/booking");
    },
    saveBooking: function (bookingData) {
        return axios.post("/api/booking", bookingData);
    }
};