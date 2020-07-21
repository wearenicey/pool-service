// const LISTA_DRZAVA = [
//     {
//         drzava: 'Srbija',

//     },

//     {
//         drzava: 'Bosna i Hercegovina'
//     }
// ];



// const LISTA_VREMENA = [
//     { vreme: 'Prepodne' },
//     { vreme: 'PoslePodne' },
//     { vreme: 'Predvece' },
// ];

// const DATA_STEP_1 = {
//     usluge: {
//         type: 'checked',
//         options: LISTA_USLUGA,
//         validations: {
//             required: true,

//         },
//         errors: {
//             required: 'IZABERITE JEDNO POLJE',

//         },
//     }
// };

// const DATA_STEP_2 = {
//     usluge: {
//         type: 'checked',
//         options: LISTA_VREMENA,
//         validations: {
//             required: true,

//         },
//         errors: {
//             required: 'IZABERITE JEDNO POLJE',

//         },
//     }
// };

// const DATA_STEP_3 = {
//     name: {
//         type: 'text',
//         validations: {
//             required: true,
//             minLength: 4
//         },
//         errors: {
//             required: 'ovo polje mora biti popunjeno',
//             minlength: 'najmanje 4 karaktera'
//         },
//     },


//     subject: {
//         type: 'text',
//         validations: {
//             required: true,
//             minLength: 4
//         },
//         errors: {
//             required: 'ovo polje mora biti popunjeno',
//             minlength: 'najmanje 4 karaktera'
//         },
//     },

//     phone: {
//         type: 'phone',
//         validations: {
//             pattern: /^\d{10}$/
//         },
//         errors: {
//             pattern: 'Please enter a valid phone number'
//         },
//         placeholder: 'Contact Number'
//     },

//     email: {
//         type: 'email',
//         validations: {
//             pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
//         },
//         errors: {
//             pattern: 'Please enter a valid email adress'
//         },
//         placeholder: 'Contact Number'
//     },

//     ountry: {
//         type: 'select',
//         options: LISTA_DRZAVA,
//         validations: {},
//         errors: {},
//         placeholder: 'Country'
//     }
// };






// const LISTA_KORAKA = [
//     { label: 'Korak 1 od 3', data: DATA_STEP_1 },
//     { label: 'Korak 2 od 3', data: DATA_STEP_2 },
//     { label: 'Korak 3 od 3', data: DATA_STEP_3 },
//     { label: 'Poruka je poslata', data: {} }
// ];

const COUNTRY_LIST = [
    { name: 'United States of America', code: 'us' },
    { name: 'United Kingdoms', code: 'gb' },
    { name: 'India', code: 'in' }
];


const LISTA_USLUGA = [
    {
        usluga: "Izgradnja",
        imageUrl: "https://www.southwestjournal.com/wp-content/uploads/2019/09/46-pool.jpg",
        id: '1'
    },
    {
        usluga: "Projektovanje",
        imageUrl: "https://www.southwestjournal.com/wp-content/uploads/2019/09/46-pool.jpg"

    },
    {
        usluga: "Renoviranje",
        imageUrl: "https://www.southwestjournal.com/wp-content/uploads/2019/09/46-pool.jpg"

    },
    {
        usluga: 'Odrzavanje',
        imageUrl: "https://www.volimsvojdom.rs/wf-proizvodiPics/89179/bazen-za-decu-steel-pool-bestway-300x201x66cm-56404-1.jpg"

    },
    {
        usluga: 'Dodatna Oprema',
        imageUrl: "https://www.southwestjournal.com/wp-content/uploads/2019/09/46-pool.jpg"

    },

];

const DATA_STEP_1 = {
    firstName: { type: 'text', validations: {}, errors: {}, placeholder: 'First Name' },
    lastName: { type: 'text', validations: {}, errors: {}, placeholder: 'Last Name' },
    dateOfBirth: {
        type: 'date',
        validations: {},
        errors: {},
        placeholder: 'Date of Birth'
    }
};

const DATA_STEP_2 = {
    // address: { type: 'textarea', validations: {}, errors: {}, placeholder: 'Full Address' },
    usluga: {
        type: 'checkbox',
        options: LISTA_USLUGA,
        validations: {

        },
        errors: {},

    }
};

const DATA_STEP_3 = {
    phone: {
        type: 'phone',
        validations: {
            pattern: /^\d{10}$/
        },
        errors: {
            pattern: 'Please enter a valid phone number'
        },
        placeholder: 'Contact Number'
    },
    otp: {
        type: 'number',
        validations: {
            required: true,
            minLength: 4
        },
        errors: {
            required: 'This field can not be left blank',
            minlength: 'Minimum length should be 4 characters'
        },
        placeholder: 'One Time Password'
    }
};

const LISTA_KORAKA = [
    { label: 'Korak 1 od 3', data: DATA_STEP_1 },
    { label: 'Korak 2 od 3', data: DATA_STEP_2 },
    { label: 'Korak 3 od 3', data: DATA_STEP_3 },
    { label: 'Review & Submit', data: {} }
];

export { LISTA_KORAKA }