const contacts = [
    {
        name: 'Michele',
        avatar: './images/avatar_1.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent',
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di stendere i panni',
                status: 'sent',
            },
            {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received',
            },
        ],
    },
    {
        name: 'Fabio',
        avatar: './images/avatar_2.jpg',
        visible: false,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent',
            },
            {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received',
            },
            {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent',
            },
        ],
    },
    {
        name: 'Samuele',
        avatar: './images/avatar_3.jpg',
        visible: false,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received',
            },
            {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent',
            },
            {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received',
            },
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: './images/avatar_4.jpg',
        visible: false,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent',
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received',
            },
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: './images/avatar_5.jpg',
        visible: false,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                text: 'Ricordati di chiamare la nonna',
                status: 'sent',
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Va bene, stasera la sento',
                status: 'received',
            },
        ],
    },
    {
        name: 'Claudia',
        avatar: './images/avatar_6.jpg',
        visible: false,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                text: 'Ciao Claudia, hai novità?',
                status: 'sent',
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Non ancora',
                status: 'received',
            },
            {
                date: '10/01/2020 15:51:00',
                text: 'Nessuna nuova, buona nuova',
                status: 'sent',
            },
        ],
    },
    {
        name: 'Federico',
        avatar: './images/avatar_7.jpg',
        visible: false,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                text: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent',
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received',
            },
        ],
    },
    {
        name: 'Davide',
        avatar: './images/avatar_8.jpg',
        visible: false,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                text: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received',
            },
            {
                date: '10/01/2020 15:50:00',
                text: "No, l'ho già mangiata ieri, ordiniamo sushi!",
                status: 'sent',
            },
            {
                date: '10/01/2020 15:51:00',
                text: 'OK!!',
                status: 'received',
            },
        ],
    },
];

const { createApp } = Vue;
createApp({
    data() {
        return {
            contacts, // importato
            myName: 'Marianna',
            newMessage: '',
            counter: 0,
            dtTime24: '',
            searchInput: '',
        };
    },
    methods: {
        getLastMessage(contact) {
            if (contact.messages.length > 0) {
                return contact.messages.at(-1).text;
            }
            return '';
        },

        getLastHour(contact) {
            if (contact.messages.length > 0) {
                return contact.messages.at(-1).date.toString().slice(-8, -3);
            }
            return '';
        },
    },
}).mount('#app');
