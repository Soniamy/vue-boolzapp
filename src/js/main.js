const contacts = [
    {
        name: 'Michele',
        avatar: './images/avatar_1.jpg',
        visible: true,
        api: 'https://animechan.xyz/api/random/anime?title=naruto',
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
        visible: true,
        api: 'https://api.chucknorris.io/jokes/random',
        messages: [
            {
                date: '03/28/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent',
            },
            {
                date: '03/28/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received',
            },
            {
                date: '03/20/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent',
            },
        ],
    },
    {
        name: 'Samuele',
        avatar: './images/avatar_3.jpg',
        visible: true,
        messages: [
            {
                date: '04/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received',
            },
            {
                date: '04/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent',
            },
            {
                date: '04/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received',
            },
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: './images/avatar_4.jpg',
        visible: true,
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
        visible: true,
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
        visible: true,
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
        visible: true,
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
        visible: true,
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
            contacts,
            myName: 'Marianna',
            newMessage: '',
            date: '',
            searchInput: '',
            activeUser: 0,
        };
    },
    methods: {
        getLastMessage(contact) {
            return contact.messages.length ? contact.messages.at(-1) : {};
        },
        getHour(message) {
            return new Date(message.date).toLocaleTimeString('it-IT', {
                hour: 'numeric',
                minute: 'numeric',
            });
        },
        getDate(message) {
            return new Date(message.date).toLocaleString('it-IT');
        },
        sendNewMessage() {
            const contact = this.contacts[this.activeUser];
            const messages = this.contacts[this.activeUser].messages;

            if (this.newMessage.trim() !== '') {
                contact.messages.push({
                    date: dayjs().format('MM/DD/YYYY HH:mm:ss'),
                    text: this.newMessage,
                    status: 'sent',
                    activeUser: messages.length,
                });
                setTimeout(() => {
                    //BONUS API//
                    axios
                        .get(
                            this.contacts[this.activeUser].api
                                ? this.contacts[this.activeUser].api
                                : 'https://animechan.xyz/api/random/anime?title=naruto'
                        )
                        .then((res) => {
                            console.log(res);
                            contact.messages.push({
                                date: dayjs().format('MM/DD/YYYY HH:mm:ss'),
                                text: res.data.value || res.data.quote,
                                status: 'received',
                                activeUser: messages.length,
                            });
                        });
                }, 1000);
                this.newMessage = '';

                console.log(contact.messages);
                console.log(contact);
            } else this.newMessage = '';
        },

        // MILESTONE 4//
        filterContact() {
            for (let i = 0; i < this.contacts.length; i++) {
                this.contacts[i].visible =
                    this.searchInput == '' ||
                    this.contacts[i].name
                        .toLowerCase()
                        .includes(this.searchInput.toLowerCase());
            }
        },
        // MILESTONE 5 //
        deleteMessage(position, messageIndex) {
            this.contacts[position].messages.splice(messageIndex, 1);
        },
    },
}).mount('#app');
