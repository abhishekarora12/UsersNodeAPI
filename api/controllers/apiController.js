'use strict';

var users_list = [
    {
        Firstname: "Abhishek",
        Lastname: "Arora",
        Phone: "7823948577",
        Company: "Adobe",
    },
    {
        Firstname: "Shubham",
        Lastname: "Pandey",
        Phone: "8876234879",
        Company: "Amazon",
    },
    {
        Firstname: "Rahul",
        Lastname: "Biswas",
        Phone: "9087231288",
        Company: "Sample",
    }
]

exports.list_all_users = function(req, res) {
    res.json(users_list);
};

exports.read_a_user = function(req, res) {
    res.json(users_list[req.params.id-1]);
};

exports.add_a_user = function(req, res) {
    res.send("User added: " + req.body.Firstname + " " + req.body.Lastname);
};

exports.update_a_user = function(req, res) {
    res.send("User updated with id = " + req.params.id);
};

exports.delete_a_user = function(req, res) {
    res.send("User deleted with id = " + req.params.id);
};
