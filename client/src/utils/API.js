import axios from "axios";

export default {
    getContact: function () {
        return axios.get("/api/contactus");
    },
    saveContact: function (contactData) {
        return axios.post("/api/contactus", contactData);
    },
    deleteContact: function(id) {
      return axios.delete("/api/contactus/" + id);
    },
    getBooking: function () {
        return axios.get("/api/booking");
    },
    saveBooking: function (bookingData) {
        return axios.post("/api/booking", bookingData);
    },
    deleteBooking: function(id) {
      return axios.delete("/api/booking/" + id);
    }
};