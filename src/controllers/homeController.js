const connection = require('../config/database')
const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const createUsers = (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    console.log(">>> email = ", email, ' name = ', name, ' city = ', city)

    const query = 'INSERT INTO "usersInfo"."user" (email, name, city) VALUES ($1, $2, $3) RETURNING *';
    const values = [email, name, city];

    // Run the query with the provided values
    connection.query(query, values, (err, result) => {
        if (!err) {
            console.log(result.rows);
            return res.status(200).json({
                message: 'User created successfully!',
                user: result.rows[0]
            });
        } else {
            console.log(err.message);
            return res.status(500).json({ error: err.message });
        }
    });

}

module.exports = {
    getHomepage,
    createUsers
}