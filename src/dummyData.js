/**
 * File: src/dummyData.js
 * Author: Scott Mitting
 * Date: 12/3/2024
 * Project: TucsonLovesMusic
 * Abstract:
 *   Dummy data for the React app prototype admin website.
 */

/**
 * Example user data.
 * @type {[{name: string, "Active User": number},{name: string, "Active User": number}]}
 */
export const userData = [
    {
        name: "Jan",
        "Active User": 4000,
    },
    {
        name: "Feb",
        "Active User": 3000,
    },
];

/**
 * Example list of users for editing in the data grid and form.
 * @type {[{id: number, avatar: string, email: string, transaction: string, username: string, status: string},{id: number, avatar: string, email: string, transaction: string, username: string, status: string}]}
 */
export const userRows = [
    {
        id: 1,
        username: "Federico Kereki",
        avatar:
            "https://images.gr-assets.com/authors/1561336084p8/4123863.jpg",
        email: "federico@gmail.com",
        status: "active",
        transaction: "$950.00",
    },
    {
        id: 2,
        username: "Chinda Great",
        avatar:
            "https://images.gr-fb.com/fb/1561349084p8/4123868.jpg",
        email: "chinda@gmail.com",
        status: "active",
        transaction: "$320.00",
    },
];

/**
 * Example list of events for editing in the data grid and form.
 * @type {[{id: number, name: string, image: string, date: string, location: string},{id: number, name: string, image: string, date: string, location: string}]}
 */
export const eventRows = [
    {
        id: 1,
        name: "Music Festival",
        image:
            "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        date: "2023-03-01",
        location: "New York",
    },
    {
        id: 2,
        name: "Concert",
        image:
            "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        date: "2023-04-01",
        location: "Los Angeles",
    },
    {
        id: 3,
        name: "Theater Play",
        image:
            "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        date: "2023-05-01",
        location: "Chicago",
    },
];


/**
 * List of available markets for the dropdown menu.
 * @type {string[]}
 */
export const availableMarkets = [
    'Tucson',
    'Phoenix',
    'Austin',
    'Nashville',
    'New Orleans',
    'Seattle',
    'Portland',
    'Denver',
    'Minneapolis',
    'Boston',
    'Chicago',
    'Los Angeles',
];